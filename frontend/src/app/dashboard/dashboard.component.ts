import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    document.querySelector('#sidebarCollapse').addEventListener('click',function(e){
      document.querySelector('#sidebar').classList.toggle('active')
      document.querySelector('#body').classList.toggle('active')
    })
  }

}
