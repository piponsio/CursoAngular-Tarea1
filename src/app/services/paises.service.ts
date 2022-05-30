import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  listaPaises = [{nombre: 'Argentina', capital: 'Buenos Aires'}, {nombre: 'Bolivia', capital: 'La Paz'},{nombre: 'Brasil', capital: 'Brasília'}]
  listapaises2:Array<Object> = [{nombre: 'Argentina', capital: 'Buenos Aires'}, {nombre: 'Bolivia', capital: 'La Paz'},{nombre: 'Brasil', capital: 'Brasília'}]
  //Con esta lanza error
  constructor() { }
}
