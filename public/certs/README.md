Certificates folder

Place verified certificate PDFs in this folder. Files placed here are served at `/certs/<filename>` when the site is built/served with Vite.

Naming suggestions:
- 01-azure-data-engineer.pdf
- 02-aws-devops.pdf
- 03-docker-k8s.pdf

Compliance notes:
- Ensure stored PDFs do not contain private PII unless you intend them to be public.
- If your compliance policy forbids public hosting, store certs in a private artifact storage and link to them behind authentication instead.
