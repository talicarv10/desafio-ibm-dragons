import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDragonComponent } from './pages/dragoes/add-dragon/add-dragon.component';
import { DetailDragonComponent } from './pages/dragoes/detail-dragon/detail-dragon.component';
import { EditDragonComponent } from './pages/dragoes/edit-dragon/edit-dragon.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login - Dragons' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'add-dragon',
    component: AddDragonComponent,
    data: { title: 'Adicionar dragão' },
  },
  {
    path: 'edit-dragon',
    component: EditDragonComponent,
    data: { title: 'Editar dragão' },
  },
  {
    path: 'detail-dragon',
    component: DetailDragonComponent,
    data: { title: 'Detalhes do dragão' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
