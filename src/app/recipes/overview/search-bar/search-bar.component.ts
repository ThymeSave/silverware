import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  private _search !: Search | null;

  @Input()
  public set search(val: Search | null) {
    this._search = val;
    this.mapSearchToForm(this._search);
    this.triggerSearch(this._search);
  }

  @Output() public searchTriggered = new EventEmitter<Search | null>();

  constructor() {
    this.searchTriggered.asObservable()
      .subscribe(triggered => this._search = triggered);
  }

  private mapSearchToForm(search: Search | null) {
      this.form.patchValue({
        fullTextSearch: search?.fullText,
      });
  }

  private mapFormToSearch(form: FormGroup = this.form): Search {
    const raw = form.getRawValue();
    return {
      fullText: raw.fullTextSearch,
    };
  }

  public triggerSearch(search: Search | null = this.mapFormToSearch()) {
    this.logger.debug("Trigger search", search);
    this.searchTriggered.next(search);
  }
}
