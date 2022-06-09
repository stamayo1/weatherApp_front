import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputSearch = new FormControl(''); 
  @Output() submitted = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void {

    this.onChange();
  }

  private onChange(): void {
    /**
     * Detectar los cambios que ocurran en el input, teniendo en cuenta
     * 1. Que haya un valor en el input
     * 2. Hay una espera de .6ms para enviar el contenido del input
     */

    this.inputSearch.valueChanges
    .pipe(

      map((search: string) => search.trim()), //Elimina los espacios en blanco  de los extremos
      debounceTime(600),  // Espera .6s para emitir el valor actual
      filter((search: string) => search !== '')
    )
    .subscribe((search) =>{

      //Enviar la información al componente padre
      this.submitted.emit(search);
    });

  }

}
