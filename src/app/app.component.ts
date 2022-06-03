import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  titulo = 'Listado de personas';

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyDF7Hf7f8nliHaaRqSOOezm0H1M0hF5b4c",
      authDomain: "listado-personas-59e70.firebaseapp.com",
      databaseURL: "https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "listado-personas-59e70",
      storageBucket: "listado-personas-59e70.appspot.com",
      messagingSenderId: "766965407226",
      appId: "1:766965407226:web:762dab3fd11c11aa345843",
      measurementId: "G-XH7D09KQD1"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
  }

  isAuth(){
    return this.loginService.isAuth();
  }

  salir(){
    return this.loginService.logout();
  }
}
