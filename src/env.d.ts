/// <reference path="../.astro/types.d.ts" />

interface Window {
  gtag: (
    command: string,
    eventName: string,
    eventParameters?: Record<string, any>
  ) => void;
  dataLayer: any[];
}
