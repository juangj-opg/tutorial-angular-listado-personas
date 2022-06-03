import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient,
              private loginService: LoginService) {}

  // Cargar personas
  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+  token);
  }

  // Guardar personas
  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put(
      'https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+  token,
      personas
    ).subscribe(
      (response) => {
        console.log('Resultado de guarda las personas: ' + response)
      },
      (error) => console.log('Error al guardar personas: ' + error)
    );
  }

  // Modificar persona
  modificarPersona(index:number, persona: Persona){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app/datos/' + index + '.json?auth='+  token; 
    this.httpClient.put(url, persona)
      .subscribe(
        (response) => console.log("Resultado modificar Persona: " + response),
        (error) => console.log("Error en modificar Persona: " + error)
      )
  }

  // Eliminar persona
  eliminarPersona(index:number){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app/datos/' + index + '.json?auth='+  token; 
    this.httpClient.delete(url)
      .subscribe(
        (response) => console.log("Resultado de eliminar Persona: " + response),
        (error) => console.log("Error en eliminar Persona: " + error)
      )
  }
}
