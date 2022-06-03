import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
    private dataServices: DataServices
  ) {}

  //Lo usamos para iniciar el arreglo, ya que ya es asincrono desde la BD
    //Se inicializa desde el compoente PersonasComponent    
    setPersonas(personas: Persona[]){
      this.personas = personas;
  }

  obtenerPersonas(){
      console.log(this.dataServices.cargarPersonas());
      return this.dataServices.cargarPersonas();
  }
  
  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola(
      'Se ha agregado una nueva persona: ' +
        persona.nombre +
        ' ' +
        persona.apellido
    );
    if(this.personas == null ) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
