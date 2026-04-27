# Deploying to Vercel

This project ships with a Vercel-ready build pipeline that runs alongside the
default Lovable / Cloudflare configuration. The Lovable preview is **not**
affected by these files.

## One-time setup

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In Vercel, click **Add New → Project** and import the repo.
3. Vercel reads `vercel.json` automatically. No env vars or framework preset
   needs to be selected manually — leave **Framework Preset** as `Other`.
4. Click **Deploy**.

## How it works

- `vite.config.ts` → used by Lovable preview & Cloudflare (unchanged).
- `vite.config.vercel.ts` → used **only** during Vercel builds. Replaces the
  Cloudflare target with Nitro's `vercel` preset, producing the
  `.vercel/output` directory Vercel expects.
- `vercel.json` → tells Vercel to run `bun run vercel-build` and read output
  from `.vercel/output`.
- `package.json` script `vercel-build` → `vite build --config vite.config.vercel.ts`.

## Local verification

```bash
bun install
bun run vercel-build
```

A successful build creates `.vercel/output/` containing `config.json` plus
`functions/` and `static/`. That folder is exactly what Vercel deploys.

## Custom domain

After the first successful deploy, add your domain in
**Vercel → Project → Settings → Domains**.

## Troubleshooting

- **"nitro not found"** → run `bun install` again; the dependency is declared
  in `package.json`.
- **Build works locally but fails on Vercel** → ensure `NODE_ENV` is **not**
  set to `production` in Vercel env vars (it would skip devDependencies).
- **Lovable preview broke after editing** → only edit `vite.config.vercel.ts`;
  never modify `vite.config.ts`.
