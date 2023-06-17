// import { Component} from '@angular/core';
// import { NgForm } from '@angular/forms';
// // import { BotService } from './bot.service';


// @Component({
//   selector: 'app-bot',
//   templateUrl: './bot.component.html',
//   styleUrls: ['./bot.component.css']
// })
// export class BotComponent  {
//   //  constructor(private botService : BotService){}

//   onSubmit(form: NgForm) {
//     // Handle form submission logic here
//   }

  
//   }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
@Injectable()
export class BotComponent {
  messages: Message[] = [];

  constructor(private router: Router) {}

  conversation = new Subject<Message[]>();

  messageMap: { [key: string]: string } = {
    'Hi': 'Hello',
    'Who are you': 'My name is Test Sat Bot',
    'What is your role': 'Just guide for the user',
    'defaultmsg': "I can't understand your text. Can you please repeat",
  };

  onSubmit(form: NgForm) {
    const userMessage = new Message('user', form.value.message);
    this.messages.push(userMessage);
    this.conversation.next(this.messages);
    form.resetForm();
    setTimeout(() => {
      const botMessage = new Message(
        'bot',
        this.getBotMessage(userMessage.content)
      );
      this.messages.push(botMessage);
      this.conversation.next(this.messages);
    }, 1500);
  }

  getBotMessage(question: string) {
    let answer:any = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }

  redirect() {
    this.router.navigate(['/bot']);
  }
}



