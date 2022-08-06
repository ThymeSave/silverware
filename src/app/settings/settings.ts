import { BaseDocument } from "@/models/BaseDocument";

type SettingsEntityType = "settings"

export interface Settings extends BaseDocument {
  $entityType : SettingsEntityType
  language : string
}
