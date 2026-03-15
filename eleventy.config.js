export default function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy("img");

  // WhatsApp URL filter
  eleventyConfig.addFilter("waUrl", (site) => {
    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
  });

  // Date filter (ISO format for sitemap)
  eleventyConfig.addFilter("isoDate", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
