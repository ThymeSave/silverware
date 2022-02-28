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
    const raw = await fetch("https://funnel.thymesave.app/");
    const json = await raw.json();
    return Promise.resolve(json as FunnelConfig)
  } catch (e) {
    // TODO Make fancy
    throw e;
  }
}
