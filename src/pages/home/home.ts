import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: any;
  constructor(private sanitize: DomSanitizer) {}
  urlpaste(){
    this.url = "http://127.0.0.1:8000/home";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }
}