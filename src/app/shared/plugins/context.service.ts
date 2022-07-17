import { Injectable } from '@angular/core';
import { ComponentContext, Service } from "@thymesave/core";
import { SERVICE_NAME_FUNNEL_CORS_PROXY } from "@thymesave/core";

import { FunnelService } from "@/shared/plugins/funnel.service";

class ComponentContextImpl implements ComponentContext {
  private services = new Map<string, Service>();

  public getService<T extends Service>(name: string): T {
    return this.services.get(name) as T;
  }

  public register(name: string, service: Service) {
    this.services.set(name, service);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ContextService {
  private globalComponentContext = new ComponentContextImpl();

  constructor(private funnelService : FunnelService) {
    this.globalComponentContext.register(SERVICE_NAME_FUNNEL_CORS_PROXY, funnelService);
  }

  public createContext(): ComponentContext {
    return this.globalComponentContext;
  }
}
