import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

export class Message {

  constructor(public author: string, public content: string) {}
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
  
})
@Injectable()
export class ClientComponent {
//  messageMap: [] = any;
constructor(private router: Router) { }



  redirect() {
    this.router.navigate(['/bot']);
  }
}

 
  



