import { Component, OnInit } from '@angular/core';
import {PwaService} from "../pwa.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public Pwa: PwaService) { }

  ngOnInit(): void {
  }

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

}
