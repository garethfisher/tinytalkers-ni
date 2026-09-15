import { useEffect } from "react";

// No SSR here, so per-page <title>/<meta description> are set on mount
// rather than rendered server-side. Fine for a client-rendered SPA;
// crawlers that execute JS (including modern search engines) pick these
// up after render.
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      var el = document.querySelector('meta[name="description"]');
      if (el) el.setAttribute("content", description);
    }
  }, [title, description]);
}
