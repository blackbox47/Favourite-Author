import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUrl;
  authorUrl = "/authors";
  favAuthorUrl = "/favorite-authors";

  constructor(private router: Router) {
    this.currentUrl = router.url;
  }

  ngOnInit(): void {
  }
}
