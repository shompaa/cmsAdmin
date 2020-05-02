import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/Operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(private router: Router, private title: Title) {
    this.getDataRoute().subscribe(data => {
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);
    });
  }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( resp => resp instanceof ActivationEnd ),
      filter( (resp: ActivationEnd) =>  resp.snapshot.firstChild === null),
      map( (resp: ActivationEnd) => resp.snapshot.data )
    );
  }

}
