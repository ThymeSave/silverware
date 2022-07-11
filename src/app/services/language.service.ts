import { Injectable } from '@angular/core';
import { Languages } from "@thymesave/translations";

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  constructor() {
  }

  get userLanguage() {
    return Languages.en_US
  }
}
