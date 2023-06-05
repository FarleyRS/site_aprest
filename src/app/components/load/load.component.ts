import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt, toArray } from 'rxjs';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    this.disableButton(true);
  }

  disableButton(bool: boolean) {
    var element = <HTMLInputElement>document.getElementById('button');
    element.disabled = bool;
    element.style.backgroundColor = 'transparent';
    setTimeout(() => {
      this.disableButton(false);
    }, 3000);

  }

  onActivateVibration() {
    // Define o atraso de 2000 milissegundos (2 segundos)
    navigator.vibrate([800, 100, 800, 200, 800, 200, 500]);
    this.disableButton(true);
    this.bgImage('url("../../../assets/logo1.gif")');
    setInterval(() => {
      this.bgImage('url("../../../assets/giphy.gif")');
    }, 3000);
   
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 5000);
    
    console.log("Procurando algo?");
  }

  bgImage(img:string) {
    var element = <HTMLInputElement>document.getElementById('div');
    element.style.backgroundImage = img;
  }
}
