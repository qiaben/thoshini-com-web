# thoshini.com

Website for **Thoshini LLC** and the **Thoshini AI Box**, a private AI appliance built on NVIDIA Jetson.
Built with [Docusaurus](https://docusaurus.io) and deployed to GitHub Pages at https://thoshini.com.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home: what the AI Box does, how it works |
| `/ai-box` | Specs, AI models, privacy options, pricing |
| `/reserve` | Free, no-obligation reservation form |
| `/contact` | Questions and support form |
| `/sms-consent` | SMS opt-in with mobile number verification |
| `/privacy`, `/sms-terms`, `/terms` | Legal pages (A2P 10DLC compliant wording) |

Company data, AI Box price, specs and model list live in `src/data/company.ts`.

## Development

```bash
npm ci
npm start          # http://localhost:3000
npm run build
```

Set `FORMS_API_URL` to the forms worker URL (for example `https://thoshini-forms.<account>.workers.dev`)
to enable form submission and SMS verification. Without it, forms fall back to opening an email to info@thoshini.com.

## Forms worker (`worker/`)

A Cloudflare Worker that:

- sends and checks one-time SMS codes with **Twilio Verify** (`/sms/start`, `/sms/check`),
- stores each submission and SMS consent record (number, time, IP, consent text, page) in **KV** as proof of opt-in,
- emails each submission to info@thoshini.com through **SendGrid** (optional).

```bash
cd worker
npx wrangler kv namespace create FORMS     # paste the id into wrangler.toml
npx wrangler secret put TWILIO_ACCOUNT_SID
npx wrangler secret put TWILIO_AUTH_TOKEN
npx wrangler secret put TWILIO_VERIFY_SID
npx wrangler secret put TOKEN_SECRET       # any random 32+ char string
npx wrangler secret put SENDGRID_API_KEY   # optional
npx wrangler deploy
```

Then set the repository variable `FORMS_API_URL` (Settings → Secrets and variables → Actions → Variables) and re-run the deploy workflow.

## Deployment

Pushes to `main` build and deploy via `.github/workflows/deploy.yml`. In the repository settings, set
**Pages → Source** to **GitHub Actions**. For the custom domain, point DNS for `thoshini.com` to GitHub Pages
(A records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 and a `www` CNAME to `qiaben.github.io`).
