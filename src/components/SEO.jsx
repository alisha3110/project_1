import { useEffect } from "react";

/**
 * SEO Component for dynamic document title and meta tag updates on route change
 */
const SEO = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    // 1. Update document title
    if (title) {
      document.title = title;
    }

    // Helper to create or update meta tags
    const updateMetaTag = (attr, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Update description & social descriptions
    if (description) {
      updateMetaTag("name", "description", description);
      updateMetaTag("property", "og:description", description);
      updateMetaTag("name", "twitter:description", description);
    }

    // 3. Update keywords
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // 4. Update social titles
    if (title) {
      updateMetaTag("name", "title", title);
      updateMetaTag("property", "og:title", title);
      updateMetaTag("name", "twitter:title", title);
    }

    // 5. Update canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, keywords, canonical]);

  return null;
};

export default SEO;
