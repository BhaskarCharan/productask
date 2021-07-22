import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public items = [
    {
      info:"use supercoins",
      text:"get offers on fashion",
      discount:"EXTRA $200 OFF",
      img:"https://memoproject.s3.ap-south-1.amazonaws.com/aws/kwickbox.jpg"
    },
    {
      info:"use supercoins",
      text:"get offers on fashion",
      discount:"EXTRA $200 OFF",
      img:"https://memoproject.s3.ap-south-1.amazonaws.com/charan.jpg"
    },
    {
      info:"use supercoins",
      text:"get offers on fashion",
      discount:"EXTRA $200 OFF",
      img:"https://memoproject.s3.ap-south-1.amazonaws.com/charan.jpg"
    },
    {
      info:"use supercoins",
      text:"get offers on fashion",
      discount:"EXTRA $200 OFF",
      img:"https://memoproject.s3.ap-south-1.amazonaws.com/aws/kwickbox.jpg"
    }
  ]
  constructor() {}
}
