import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { createLogger } from "@helper/log";

export interface Search {
  fullText?: string
}

@Component({
  selector: 'app-recipe-search-bar',
  styleUrls: ['./search-bar.component.scss'],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  public form = new FormGroup({
    fullTextSearch: new FormControl(""),
  });

  private readonly logger = createLogger("SearchBarComponent");

  @Output() public search = new EventEmitter<Search>();

  constructor() {
  }

  private mapFormToSearch(form: FormGroup = this.form): Search {
    const raw = form.getRawValue();
    return {
      fullText: raw.fullTextSearch,
    };
  }

  public triggerSearch(search: Search = this.mapFormToSearch()) {
    this.logger.debug("Trigger search", search);
    this.search.next(search);
  }
}
