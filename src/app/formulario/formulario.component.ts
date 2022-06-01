import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../loggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService 
  ) {
    this.personasService.saludar.subscribe((indice: number) => alert("El indice es " + indice));
  }

  // nombreInput: string = '';
  // apellidoInput: string = '';
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    // this.loggingService.enviaMensajeAConsola("Enviamos persona: " + persona1.nombre + " " + persona1.apellido);
    // this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }
}
