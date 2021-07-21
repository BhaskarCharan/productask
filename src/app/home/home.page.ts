import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Products = [
    { "info":"use supercoins","text":"get offers on grocery","discount":"FLAT $200 OFF",
  "img":"https://memoproject.s3.ap-south-1.amazonaws.com/aws/kwickbox.jpg"},

    { "info":"use supercoins","text":"get offers on fashion","discount":"EXTRA $200 OFF",
  "img":"https://memoproject.s3.ap-south-1.amazonaws.com/charan.jpg"},

    { "info":"use supercoins","text":"Before Anyone Else","discount":"SHOW NOW",
    "img":"https://memoproject.s3.ap-south-1.amazonaws.com/charan.jpg"},

    { "info":"Most Popular","text":"SleepyHead More","discount":" 30-65% OFF ",
  "img":"https://memoproject.s3.ap-south-1.amazonaws.com/aws/kwickbox.jpg"}
  ];
  constructor() {}

}
