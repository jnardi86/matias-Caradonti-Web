export async function GET() {
    const baseUrl = 'https://www.drmatiascaradonti.com.ar';

    const staticRoutes = ['', '/blog/profesional', '/blog/pacientes'];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
            .map(
                (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`
            )
            .join('')}
</urlset>`;

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
// This code generates a sitemap for the website, including static routes.
// It uses the GET method to respond with an XML formatted sitemap.