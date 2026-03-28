/// <reference types="vite/client" />

interface Window {
  umami?: {
    track: (event: string, data?: Record<string, unknown>) => void;
    identify: (data: Record<string, unknown>) => void;
  };
}

declare const __APP_VERSION__: string;

interface ImportMetaEnv {
  readonly VITE_BRAND_NAME?: string;
  readonly VITE_SENTRY_DSN?: string;
  readonly VITE_WS_API_URL?: string;
  readonly VITE_WS_RELAY_URL?: string;
  readonly VITE_VARIANT?: string;
  readonly VITE_E2E?: string;
  readonly VITE_DESKTOP_RUNTIME?: string;
  readonly VITE_TAURI_API_BASE_URL?: string;
  readonly VITE_TAURI_REMOTE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
