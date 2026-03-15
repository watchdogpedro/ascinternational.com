# Domain Setup Guide - solderpasteinspection.net

This guide will walk you through setting up **solderpasteinspection.net** as the main domain for the ASC International website.

## Overview

All hardcoded URLs in the application have been updated from `asc-international.vercel.app` to `solderpasteinspection.net`.

## Step 1: Configure Vercel Domain

1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com) and log in to your account

2. **Navigate to Your Project**
   - Select the `asc-international` project from your dashboard

3. **Add Custom Domain**
   - Go to **Settings** → **Domains**
   - Click **Add** or **Add Domain**
   - Enter: `solderpasteinspection.net`
   - Click **Add**

4. **Add www Subdomain (Optional but Recommended)**
   - Also add: `www.solderpasteinspection.net`
   - Vercel will automatically redirect www to the apex domain (or vice versa)

5. **Note the DNS Records**
   - Vercel will display the DNS records you need to configure
   - Typically, you'll need:
     - **A Record** for `@` (apex domain) pointing to Vercel's IP (e.g., `76.76.21.21`)
     - **CNAME Record** for `www` pointing to `cname.vercel-dns.com`

## Step 2: Configure DNS in Porkbun

1. **Log in to Porkbun**
   - Go to [porkbun.com](https://porkbun.com) and log in
   - Navigate to your domain management

2. **Find solderpasteinspection.net**
   - Click on **Domain Management**
   - Select `solderpasteinspection.net`

3. **Update DNS Records**
   - Click on **DNS** or **DNS Records**
   - Remove any default A or CNAME records for the apex (@) and www

4. **Add Vercel DNS Records**

   **For Apex Domain (@):**
   - Type: `A`
   - Host: `@` or leave blank
   - Answer/Value: `76.76.21.21` (Vercel's IP - confirm this in Vercel dashboard)
   - TTL: `600` (or default)

   **For WWW Subdomain:**
   - Type: `CNAME`
   - Host: `www`
   - Answer/Value: `cname.vercel-dns.com`
   - TTL: `600` (or default)

5. **Save Changes**
   - Click **Save** or **Add** for each record

## Step 3: Deploy Changes to Vercel

1. **Create .env.local File (Local Development)**
   ```bash
   cp .env.local.example .env.local
   ```

   The `.env.local` file should contain:
   ```
   NEXT_PUBLIC_SITE_URL=https://solderpasteinspection.net
   ```

2. **Set Environment Variable in Vercel**
   - In Vercel project settings, go to **Environment Variables**
   - Add a new variable:
     - Key: `NEXT_PUBLIC_SITE_URL`
     - Value: `https://solderpasteinspection.net`
     - Select all environments (Production, Preview, Development)
   - Click **Save**

3. **Commit and Push Changes**
   ```bash
   git add .
   git commit -m "Update domain to solderpasteinspection.net"
   git push origin main
   ```

4. **Trigger New Deployment**
   - Vercel will automatically deploy when you push to main
   - Or manually trigger a deployment from the Vercel dashboard

## Step 4: Verify Configuration

### DNS Propagation Check

DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. To check:

```bash
# Check A record
dig solderpasteinspection.net

# Check CNAME record
dig www.solderpasteinspection.net

# Or use online tools
# https://www.whatsmydns.net/
```

### SSL Certificate

- Vercel automatically provisions SSL certificates via Let's Encrypt
- This process usually takes a few minutes after DNS is configured
- Check the Vercel dashboard for SSL status

### Test Your Site

Once DNS has propagated and SSL is active:

1. Visit `https://solderpasteinspection.net`
2. Visit `https://www.solderpasteinspection.net`
3. Check that both redirect properly
4. Verify all pages load correctly
5. Check the following files to confirm correct URLs:
   - `/robots.txt` - Should reference solderpasteinspection.net
   - `/sitemap.xml` - Should contain solderpasteinspection.net URLs

## Files Updated

The following files were updated with the new domain:

- `.env.local.example` - Added NEXT_PUBLIC_SITE_URL
- `src/app/robots.ts` - Updated baseUrl
- `src/app/sitemap.ts` - Updated baseUrl
- `src/app/layout.tsx` - Updated metadataBase, OpenGraph, canonical URLs, and organization schema
- `src/app/page.tsx` - Updated website schema and product URLs
- All blog post files - Updated canonical URLs and structured data

## Troubleshooting

### Domain Not Resolving

- Check DNS records in Porkbun match Vercel's requirements
- Wait for DNS propagation (up to 48 hours)
- Use `dig` or online DNS checker tools
- Clear your browser cache and DNS cache

### SSL Certificate Issues

- Ensure DNS is fully propagated first
- Check Vercel dashboard for certificate status
- Try removing and re-adding the domain in Vercel

### Old Domain Still Showing

- Clear browser cache
- Check that you've pushed the latest code
- Verify environment variables are set in Vercel
- Trigger a fresh deployment

### Vercel Shows "Invalid Configuration"

- Ensure DNS records are correctly configured
- Verify you own the domain
- Check that the domain isn't already in use by another Vercel account

## Additional Configuration

### Redirects from Old Domain (Optional)

If you want to keep the old Vercel domain and redirect it to the new one, add this to `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'asc-international.vercel.app',
          },
        ],
        destination: 'https://solderpasteinspection.net/:path*',
        permanent: true,
      },
    ]
  },
}
```

### Google Search Console

After the domain is live:
1. Add both `solderpasteinspection.net` and `www.solderpasteinspection.net` to Google Search Console
2. Submit the sitemap: `https://solderpasteinspection.net/sitemap.xml`
3. Update the verification code in `src/app/layout.tsx` (line 52)

### Analytics

Update any analytics tracking codes (Google Analytics, etc.) to use the new domain.

## Support

- **Vercel Documentation**: https://vercel.com/docs/concepts/projects/domains
- **Porkbun Support**: https://porkbun.com/support
- **Next.js Metadata**: https://nextjs.org/docs/app/api-reference/functions/generate-metadata

---

**Last Updated**: January 26, 2026
