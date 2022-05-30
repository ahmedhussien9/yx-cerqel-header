import { Component, Input, OnInit } from '@angular/core';
interface IheaderStyle {
  "background-color": string;
}
@Component({
  selector: 'app-yx-cerqel-header',
  templateUrl: './yx-cerqel-header.component.html',
  styleUrls: ['./yx-cerqel-header.component.scss']
})
export class YxCerqelHeaderComponent implements OnInit {
  @Input() styleConfig: IheaderStyle = {
    'background-color': '#fff'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
