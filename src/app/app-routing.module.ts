import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "@/pages/home/home.component";
import { NotFoundComponent } from "@/pages/not-found/not-found.component";
import { ShellComponent } from "@/pages/shell/shell.component";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'settings',
        loadChildren: () => import("@/settings/settings.module").then(m => m.SettingsModule),
      },
      {
        path: 'recipes',
        loadChildren: () => import("@/recipes/recipes.module").then(m => m.RecipesModule),
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
