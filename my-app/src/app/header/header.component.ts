import { Component, OnInit } from '@angular/core';
import { EpService } from '../ep.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private empService: EpService) { }

  ngOnInit(): void {
  }
 LogOut(): void {
  this.empService.setUserLoggedOut();
 }
}
