import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public paisesService:PaisesService) { }
    public listaPaises = this.paisesService.listaPaises;
    
  ngOnInit(): void {
    console.log(this.listaPaises)
  }

}
