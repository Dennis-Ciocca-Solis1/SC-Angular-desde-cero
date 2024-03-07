import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

// ENRUTAMIENTO EN ANGULAR
// 0. Instalar boostrap: npm i bootstrap@5.2.3

// 0.1 Ir a angular.json y declarar el css y el js de boostrap

// 0.2 Ir a app.component.html y pegar un navbar de boostrap

// 0.3 Crear componentes de Angular
// ng g c home, products, contact y product-detail

// 1. Declarando las rutas de los componentes de Angular e import las librerías
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },

  // 2. Redireccionando a la ruta home cuando no exista la ruta
  { path: '**', redirectTo: '', pathMatch: 'full' },

  // 2.1 ir a app.component.html a agregar las rutas en el navbar
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
