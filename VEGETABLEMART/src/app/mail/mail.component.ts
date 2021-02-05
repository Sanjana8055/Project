import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var nodemailer: any;
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  mailOptions: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'manasachepuri2000@gmail.com',
        pass: 'manasa2000'
      }
    })

    this.mailOptions = {
      from: 'manasachepuri2000@gmail.com',
      to: JSON.parse(localStorage.getItem('email')),
      subject: 'Nodemailer test',
      text: 'Hello World!!'
    }
  

    transporter.sendMail(this.mailOptions, function (err, res) {
      if(err){
          console.log('Error');
      } else {
          console.log('Email Sent');
      }
    })
    this.router.navigate(['login']);
  }
}
