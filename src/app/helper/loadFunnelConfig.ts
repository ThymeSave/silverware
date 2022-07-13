import { CACHE_FUNNEL_CONFIG, loadValue, saveValue } from "@/helper/simpleStorage";

/**
 * Configuration as returned by funnel
 */
export interface FunnelConfig {
  /**
   * OIDC related configuration
   */
  oidc: {
    clientId: string
    configUrl: string
    issuerUrl: string
    scopes: string[]
    usernameClaim: string
  }
}

/**
 * loadFunnelConfig from API
 */
export const loadFunnelConfig = async (): Promise<FunnelConfig> => {
  try {
    // TODO Load from config file to allow self hosting
    const raw = await fetch('https://funnel.thymesave.app/');
    const json = await raw.json();
    const parsedConfig = json as FunnelConfig;
    saveValue<FunnelConfig>(CACHE_FUNNEL_CONFIG, parsedConfig);
    return Promise.resolve(parsedConfig);
  } catch (e) {
    const cachedConfig = loadValue<FunnelConfig>(CACHE_FUNNEL_CONFIG);
    if (cachedConfig != null) {
      return Promise.resolve(cachedConfig);
    }
    // TODO Make fancy
    throw e;
  }
};
