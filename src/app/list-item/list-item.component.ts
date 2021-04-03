import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  // page = 1;
  pageSize = 4;

  @Input('authors') authors;
  @Input('page') page;

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    // for (let i = 0; i < this.authors.length; i++) this.authors[i].isFav = false;
  }

  toggleFavt(author) {

    author.isFav = !author.isFav;
    if (author.isFav === true) {
      localStorage.setItem(author._id, JSON.stringify(author));
      this.toastr.success("", "Author Added to Favorite List", { timeOut: 500 });
    }
    else if (author.isFav === false) {
      this.toastr.success("", "Remove Form Favorite List", { timeOut: 500 });
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/favorite-authors']);
      localStorage.removeItem(author._id);
    }
  }

}
