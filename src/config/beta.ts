export const BETA_MODE = typeof window !== 'undefined'
  && localStorage.getItem('zmonitor-beta-mode') === 'true';
