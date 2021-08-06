module.exports = {
  content: {
    robots: "meta[name='robots']",
    description: "meta[name='description']",
  },
  textContent: {
    title: "title",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
  },
  href: {
    links: "a",
    canonical: "link[rel='canonical']",
    alternateMobile: "link[media='only screen and (max-width: 640px)']",
    prevPagination: "link[rel='prev']",
    nextPagination: "link[rel='next']",
    amp: "link[rel='amphtml']"
  },
  outerHTML: {
    hreflang: "link[hreflang]"
  }
}
