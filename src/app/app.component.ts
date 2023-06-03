import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site_aprest';

  onVibrate(ms:any):void{
    window.navigator.vibrate(ms);
  }

  ngOnInit(){
    this.onVibrate([800,200,500]);
  }
}
