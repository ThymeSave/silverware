import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "@/pages/home/home.component";
import { NotFoundComponent } from "@/pages/not-found/not-found.component";
import { ShellComponent } from "@/pages/shell/shell.component";

const routes: Routes = [
  {
    children: [
      {
        component: HomeComponent,
        path: '',
      },
      {
        loadChildren: () => import("@/settings/settings.module").then(m => m.SettingsModule),
        path: 'settings',
      },
      {
        loadChildren: () => import("@/recipes/recipes.module").then(m => m.RecipesModule),
        path: 'recipes',
      },
      {
        loadChildren: () => import("@/shopping-lists/shopping-lists.module").then(m => m.ShoppingListsModule),
        path: 'shopping-lists',
      },
      {
        component: NotFoundComponent,
        path: '**',
      },
    ],
    component: ShellComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
