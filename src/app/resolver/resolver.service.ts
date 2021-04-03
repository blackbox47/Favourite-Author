import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorsService } from '../services/authors.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ResolverService implements Resolve<any> {

  constructor(private authorService: AuthorsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authorService.getAllAuthors().pipe(
      catchError((error) => {
        return of('No data');
      }))
  }
}
