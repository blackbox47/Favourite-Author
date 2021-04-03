import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { ResolverService } from './resolver/resolver.service';
import { FavoriteAuthorsComponent } from './favorite-authors/favorite-authors.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "authors", component: AuthorsComponent, resolve: { allAuthors: ResolverService } },
  { path: "favorite-authors", component: FavoriteAuthorsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
