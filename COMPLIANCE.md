Compliance & Certificate upload guide

What I changed:
- Added a more detailed "Professional Background" experience section to the site.
- Added a "Certifications & Compliance" tab that references files in `public/certs` and includes placeholder certificate files.

How to make your certificates compliant and live on the site:
1. Replace the placeholder `.txt` files in `public/certs` with the real PDF certificates. Keep a predictable filename (e.g. `01-azure-data-engineer.pdf`).
2. If company policy requires private storage, don't commit certificates to this repo; instead host them in secure storage and update `src/App.tsx` links to point to the secure URLs (or behind an authentication gate).
3. Update the metadata in the `src/App.tsx` cert list to match the official IDs/dates if they differ.
4. Commit changes and run `npm run build` (or `npm run dev` for testing locally). The files in `public` are served at `/` by Vite.

Optional local helper:

5. Use the provided sync helper to copy certificates from a local central folder into the site:

```sh
npm run sync-certs
```

This will copy files from `/Users/haos/hk-background/certs` into `public/certs` without overwriting existing files.

Deploying on Vercel (automated):

1. Create or connect a Vercel project. Use your Vercel dashboard and create a project for this repository. Note the Project ID and Org ID.
2. Add these GitHub repository secrets (Repository -> Settings -> Secrets -> Actions):
	- `VERCEL_TOKEN` (a personal token from Vercel)
	- `VERCEL_ORG_ID` (Vercel organization or team id)
	- `VERCEL_PROJECT_ID` (the Vercel project id)
	- (Optional) `CERTS_S3_BUCKET` (if you store certs in an S3 bucket)
	- (Optional) `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION` (needed if `CERTS_S3_BUCKET` is used)
3. Push to `main`. The GitHub Actions workflow `.github/workflows/deploy.yml` will:
	- optionally sync certs from S3 when `CERTS_S3_BUCKET` is set,
	- build the site, and
	- deploy to Vercel using the Vercel CLI.

Notes:
- The workflow runs on pushes to `main`. If you use a different default branch, update the workflow triggers.
- If you'd rather not host certs publicly, skip the S3 sync and don't commit cert PDFs to the repo; instead change `src/App.tsx` to link to private URLs.

Security checklist:
- Confirm certificates do not contain sensitive personal data you aren't allowed to publish.
- If a certificate contains signatures or PII, prefer private hosting and an access control layer.

If you want, I can:
- Add a small script to validate filenames and produce a `certs.json` manifest automatically.
- Add client-side verification badges if you have an API to validate cert IDs.
