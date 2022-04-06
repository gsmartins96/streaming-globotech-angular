import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts = [
    {
      image:
        "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2-1536x1536.png",
      socialMediaName: "Facebook",
      socialMediaUrl: "https://www.facebook.com/",
    },
    {
      image:
        "https://www.imagensempng.com.br/wp-content/uploads/2021/02/Logo-Instagram-Png-1024x1024.png",
      socialMediaName: "Instagram",
      socialMediaUrl: "https://www.instagram.com/",
    },
    {
      image:
        "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png",
      socialMediaName: "Twitter",
      socialMediaUrl: "https://www.twitter.com/",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
