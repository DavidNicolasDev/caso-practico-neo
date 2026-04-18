import { useCallback, useEffect } from "react"
import type { GTMEvent } from "../types/gtm.types";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const useGTM = () => {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
    }, [])

    const trackEvent = useCallback((eventData: GTMEvent) => {
        window.dataLayer.push(eventData);
    }, [])

    return {
        trackEvent
    }
}