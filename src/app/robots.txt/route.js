export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://www.drmatiascaradonti.com.ar/sitemap.xml
  `;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
// This code generates a robots.txt file that allows all user agents to access the site and specifies the location of the sitemap.