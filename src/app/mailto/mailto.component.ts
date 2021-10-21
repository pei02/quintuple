import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-mailto',
  templateUrl: './mailto.component.html',
  styleUrls: ['./mailto.component.scss']
})
export class MailtoComponent implements OnInit {

  content: any = "";

  constructor() { }

  ngOnInit(): void {
    
  }


  sendEmail(e: Event) {
    var yes = confirm('確定送出?');

    if (yes) {
      alert('已送出信件');
      e.preventDefault();
      emailjs.sendForm('service_a5psdob', 'template_tojmc3q', e.target as HTMLFormElement, 'user_VZyoA0mHCsR9tNFAKVk8q')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      window.location.reload();
    } else {
      alert(':(');
    }
  }
}
