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
    
  }

  onActivateVibration() {
    // Define o atraso de 2000 milissegundos (2 segundos)
    navigator.vibrate([800, 100, 800, 200, 800]);
   
    setTimeout(() => {
      this.router.navigate(['form']);
    }, 5000); 
    console.log("Procurando algo?");
  }

}
