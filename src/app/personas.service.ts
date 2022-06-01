import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./loggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona("Juan", "Garrido"),
        new Persona("David", "Gómez")
    ]

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService) {}

    agregarPersona(persona: Persona) {
        this.loggingService.enviaMensajeAConsola("Se ha agregado una nueva persona: " + persona.nombre + " " + persona.apellido);
        this.personas.push(persona);
      }
}