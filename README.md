# MicroELab Portfolio

Static portfolio website for `microelab.com`.

Owner contact:

- Fawad Butt
- 0320 4077096
- microElab@gmail.com

## Local Preview

Open `index.html` directly in a browser, or run:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Live Hosting

Production URL:

- `https://microelab.com`
- `https://www.microelab.com`

The site is hosted on Cloudflare Pages.

```text
Cloudflare account: Microelab@gmail.com's Account
Cloudflare Pages project: microelab
Pages domain: microelab.pages.dev
Custom domains: microelab.com, www.microelab.com
```

GitHub repository used as the site source/backup:

```text
https://github.com/microElabDevelop/microelab-portfolio
```

GitHub Pages is not the active custom-domain host for `microelab.com`.

## Domain Setup

The domain was purchased from Namecheap. Namecheap should use Cloudflare custom nameservers:

```text
monika.ns.cloudflare.com
troy.ns.cloudflare.com
```

DNS records are managed inside Cloudflare, not Namecheap Advanced DNS.

Final Cloudflare DNS records:

```text
Type   Name             Content              Proxy
CNAME  microelab.com    microelab.pages.dev  Proxied
CNAME  www              microelab.pages.dev  Proxied
```

SSL is issued and managed automatically by Cloudflare Pages.
