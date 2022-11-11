import { Component } from '@angular/core';
import { from, switchMap } from "rxjs";

import { StorageService } from "@/shared/storage/storage.service";

@Component({
  selector: 'app-settings-section-danger-zone',
  styleUrls: ['./settings-section-danger-zone.component.scss'],
  templateUrl: './settings-section-danger-zone.component.html',
})
export class SettingsSectionDangerZoneComponent {

  public constructor(private storageService: StorageService) {
  }

  public dropDatabase() {
    this.storageService.db$
      .pipe(
        switchMap(db => from(db!!.allDocs().then(results => results.rows.map(row => Promise.resolve(db!!.remove(row.id, row.value.rev)))))),
        switchMap(promises => from(Promise.all(promises))),
      )
      .subscribe(_ => location.reload());
  }
}
