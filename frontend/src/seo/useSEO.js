import { useEffect } from "react";

export function useSEO({ title, description }) {
  useEffect(() => {
    // Page title
    if (title) {
      document.title = title;
    }

    // Meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }

      meta.content = description;
    }
  }, [title, description]);
}
