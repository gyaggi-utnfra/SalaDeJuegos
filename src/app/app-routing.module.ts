import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'quienSoy', component: QuienSoyComponent, },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
