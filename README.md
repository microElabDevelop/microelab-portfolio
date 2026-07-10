# MicroELab Portfolio

Static portfolio website for `microelab.com`.

## Local Preview

Open `index.html` directly in a browser, or run:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Free Hosting Options

### GitHub Pages

1. Create a GitHub repository.
2. Push this folder to the repository.
3. In GitHub, open `Settings -> Pages`.
4. Select `Deploy from a branch`, branch `main`, folder `/root`.
5. Keep the `CNAME` file as `microelab.com`.

DNS records at your domain provider:

```text
Type  Name  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   your-github-username.github.io
```

### Netlify

1. Drag this folder into Netlify Deploys, or connect the GitHub repository.
2. Build command: leave empty.
3. Publish directory: `.`.
4. Add `microelab.com` in Netlify domain settings.

### Cloudflare Pages

1. Connect the GitHub repository to Cloudflare Pages.
2. Build command: leave empty.
3. Output directory: `/`.
4. Add `microelab.com` as a custom domain.

## Content To Replace

- Contact email in `index.html`
- Real project descriptions
- Any phone, WhatsApp, LinkedIn, or inquiry links
