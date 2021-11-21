import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})


export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  public ngOnInit(): void {
  }
}
