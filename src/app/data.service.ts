import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private HttpClient: HttpClient) {}

  // Guardar personas
  guardarPersonas(personas: Persona[]) {
    this.HttpClient.put(
      'https://listado-personas-59e70-default-rtdb.europe-west1.firebasedatabase.app/datos.json',
      personas
    ).subscribe(
      (response) =>
        console.log('Resultado de guarda las personas: ' + response),
      (error) => console.log('Error al guardar personas: ' + error)
    );
  }
}
