import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusablecard',
  templateUrl: './reusablecard.component.html',
  styleUrls: ['./reusablecard.component.scss'],
})
export class ReusablecardComponent implements OnInit {



  @Input() status: string;
  @Input() updatedAt: string;
  @Input() createdAt: string;
  @Input() notes: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {}



}
