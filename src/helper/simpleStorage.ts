export const CACHE_FUNNEL_CONFIG = "funnelConfig";
export const CACHE_DB_NAME = "funnelDbName";

export const saveValue = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadValue = <T>(key: string): T | null => {
  const stored = localStorage.getItem(key);
  if (!stored) {
    return null;
  }
  return JSON.parse(stored);
};
