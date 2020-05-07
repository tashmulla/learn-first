import { Component, OnInit, HostListener, ViewChild, ViewChildren, Host } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      $(".hide-macbook").click(() => {
      $(".show-hide-macbook").hide();
      });

      $(".show-macbook").click(() => {
        $(".show-hide-macbook").show();
        });
    });
  }
}
