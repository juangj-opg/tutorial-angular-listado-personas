import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  // Cargar personas
  cargarPersonas() {
    return this.httpClient.get('https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app/datos.json')
  }

  // Guardar personas
  guardarPersonas(personas: Persona[]) {
    this.httpClient.put(
      'https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app/datos.json',
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
    let url: string;
    url = 'https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app/datos/' + index + '.json'; 
    this.httpClient.put(url, persona)
      .subscribe(
        (response) => console.log("Resultado modificar Persona: " + response),
        (error) => console.log("Error en modificar Persona: " + error)
      )
  }

  // Eliminar persona
  eliminarPersona(index:number){
    let url: string;
    url = 'https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app/datos/' + index + '.json'; 
    this.httpClient.delete(url)
      .subscribe(
        (response) => console.log("Resultado de eliminar Persona: " + response),
        (error) => console.log("Error en eliminar Persona: " + error)
      )
  }
}
