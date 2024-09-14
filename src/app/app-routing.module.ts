import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' }
];
// const routerOptions: ExtraOptions = {
//   anchorScrolling: 'enabled',  // Ativa a rolagem suave para âncoras
//   scrollPositionRestoration: 'enabled'  // Restaura a posição de rolagem ao navegar
// };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
