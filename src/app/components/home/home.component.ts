import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showButton = false;
  
  constructor(private router: Router) { }
  
  ngOnInit() {
    setTimeout(() => {
      this.showButton = true;   
    }, 7000); 
  }

  onActivateVibration() {
    // Define o atraso de 2000 milissegundos (2 segundos)
    navigator.vibrate([500, 200, 800, 200, 800]);
    this.router.navigate(['form']);
    console.log("Procurando algo?");
  }

}
