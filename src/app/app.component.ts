import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site_aprest';

  onVibrate():void{
    window.navigator.vibrate(1000);
  }
}