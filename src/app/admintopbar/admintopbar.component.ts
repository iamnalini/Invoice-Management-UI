import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admintopbar',
  templateUrl: './admintopbar.component.html',
  styleUrls: ['./admintopbar.component.css']
})
export class AdmintopbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('id');
    this.router.navigateByUrl('');
  }


}
