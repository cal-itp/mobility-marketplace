export const seo = {
  description: (data) => data.description || data.site.description,

  // Full title for `<title>` tag
  title: (data) => {
    if (data.title) return `${data.title} | ${data.site.title}`;

    return data.site.title;
  },

  // Page title with nothing prepended
  pageTitle: (data) => data.title || data.site.title,
  siteTitle: (data) => data.site.title,

  canonicalUrl: (data) => data.siteDomain + data.page.url,
  imgUrl: (data) => data.siteDomain + (data.image || data.site.image),

  schemaType: (data) => (data.page.url === "/" ? "WebSite" : "WebPage"),
};
