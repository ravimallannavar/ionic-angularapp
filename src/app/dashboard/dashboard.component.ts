import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $(".btn1").click(function () {
        $(".btn1").addClass('color').removeClass('selectcolor');
        $(this).removeClass('color').addClass('selectcolor');
      });
    });
  }

  logout() {
    this.route.navigate(['/', 'login']);
  }
}
