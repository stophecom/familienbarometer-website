/**
 * Password gate for the Vercel deployment.
 *
 * The 2027 "Vorschau" edition goes online before it is public, so the URL alone
 * must not be enough to see it. Vercel serves the static build straight from its
 * CDN — there is no nginx in front — so the Basic Auth in `nginx.conf` never runs
 * here. This Edge Middleware does: Vercel picks up a root `middleware.ts`
 * automatically and runs it before any file is served, covering pages, images
 * and JavaScript bundles alike. `noindex` and a private repo do nothing for
 * someone holding the link.
 *
 * One shared password, no user name. It reads the SAME `BASIC_AUTH_PASSWORD`
 * used by the nginx container gate, so a single variable controls access on
 * every target:
 *   - Set `BASIC_AUTH_PASSWORD` in the Vercel project settings for EVERY
 *     environment, then redeploy — variables only reach a deployment created
 *     after they were saved.
 *   - Leave it unset to serve the site publicly (the launch state), so going
 *     live needs no code change, just clearing the variable.
 *
 * Astro's dev server does not run this file, so local work is unaffected.
 */

// No `config.matcher`: the middleware runs on every request, the safe default —
// a matcher that silently fails to match would leave the site open. `/_vercel/`
// (Speed Insights / Web Analytics instrumentation) is let through below so it
// keeps working if enabled.
const COOKIE = 'fb_zugang';
const THIRTY_DAYS = 60 * 60 * 24 * 30;
const PASS_THROUGH = /^\/_vercel\//;

/**
 * Compares without returning early, so how long the check takes says nothing
 * about how much of the input was right.
 */
function equals(a: string, b: string): boolean {
  const encoder = new TextEncoder();
  const left = encoder.encode(a);
  const right = encoder.encode(b);
  if (left.length !== right.length) return false;

  let diff = 0;
  for (let i = 0; i < left.length; i++) diff |= left[i] ^ right[i];
  return diff === 0;
}

/**
 * The value the cookie must carry: an HMAC over a constant, keyed by the
 * password. Unforgeable without the password, and changing the password
 * invalidates every cookie already handed out.
 */
async function ticket(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode('familienbarometer-vorschau'),
  );
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

function cookieValue(header: string | null, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return rest.join('=');
  }
  return null;
}

/** The gate page, in German (formal address). Self-contained — needs nothing from the build. */
function gatePage(failed: boolean): string {
  return `<!doctype html>
<html lang="de-CH">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Familienbarometer — Zugang</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --navy: #394454;
        --coral: #f04e5a;
        --gray: #eff3f6;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        background: var(--gray);
        font-family: "Roboto", system-ui, sans-serif;
        color: var(--navy);
      }
      .card {
        width: 100%;
        max-width: 440px;
        background: #fff;
        border-radius: 18px;
        padding: 2.5rem;
        box-shadow: 0 18px 50px rgba(57, 68, 84, 0.12);
      }
      h1 {
        margin: 0;
        font-family: "Merriweather", Georgia, serif;
        font-size: 30px;
        line-height: 1.25;
        font-weight: 700;
        color: var(--navy);
      }
      .lead { margin: 0.75rem 0 0; font-size: 16px; line-height: 1.55; color: #5b6673; }
      label { display: block; margin-bottom: 8px; font-size: 15px; font-weight: 500; }
      .field { margin-top: 1.75rem; }
      input {
        width: 100%;
        padding: 12px 14px;
        font: inherit;
        font-size: 17px;
        line-height: 24px;
        color: var(--navy);
        background: #fff;
        border: 1px solid #c7d0d9;
        border-radius: 10px;
        outline: none;
      }
      input:focus-visible { border-color: var(--coral); outline: 2px solid var(--coral); outline-offset: 2px; }
      button {
        width: 100%;
        margin-top: 1.75rem;
        padding: 14px 28px;
        font: inherit;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        background: var(--coral);
        border: 0;
        border-radius: 999px;
        cursor: pointer;
      }
      button:hover { background: #d8434e; }
      .error {
        margin-top: 1.5rem;
        padding: 0.85rem 1rem;
        border: 1px solid var(--coral);
        border-radius: 12px;
        background: #fff5f5;
        font-size: 14px;
        color: #8a2b32;
      }
      .error strong { display: block; }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>Schweizer Familienbarometer</h1>
      <p class="lead">Die Vorschau-Ausgabe ist noch nicht öffentlich. Bitte geben Sie das Passwort ein.</p>

      <form method="post">
        <div class="field">
          <label for="passwort">Passwort</label>
          <input id="passwort" name="passwort" type="password" autocomplete="current-password" autofocus required />
        </div>

        ${
          failed
            ? `<div class="error" role="alert">
          <strong>Anmeldung fehlgeschlagen</strong>
          Das Passwort stimmt nicht.
        </div>`
            : ''
        }

        <button type="submit">Öffnen</button>
      </form>
    </main>
  </body>
</html>`;
}

function gateResponse(failed: boolean): Response {
  return new Response(gatePage(failed), {
    // 401 without `WWW-Authenticate`, so the browser shows this page instead of
    // its own credentials dialog.
    status: 401,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export default async function middleware(
  request: Request,
): Promise<Response | undefined> {
  const password = process.env.BASIC_AUTH_PASSWORD;

  // Unset -> the site is public (launch state); matches the nginx container gate.
  if (!password) return undefined;

  const url = new URL(request.url);
  if (PASS_THROUGH.test(url.pathname)) return undefined;

  const expected = await ticket(password);

  // The form posts to the page that was asked for, so a successful login lands
  // exactly where the visitor was heading (a section's #anchor is preserved).
  if (request.method === 'POST') {
    const form = new URLSearchParams(await request.text());
    if (!equals(form.get('passwort') ?? '', password))
      return gateResponse(true);

    const secure = url.protocol === 'https:' ? ' Secure;' : '';
    return new Response(null, {
      status: 303,
      headers: {
        Location: url.pathname + url.search,
        'Set-Cookie': `${COOKIE}=${expected}; Path=/; Max-Age=${THIRTY_DAYS}; HttpOnly;${secure} SameSite=Lax`,
        'Cache-Control': 'no-store',
      },
    });
  }

  const existing = cookieValue(request.headers.get('cookie'), COOKIE);
  if (existing && equals(existing, expected)) return undefined;

  return gateResponse(false);
}
