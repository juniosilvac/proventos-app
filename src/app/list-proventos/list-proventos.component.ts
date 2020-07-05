import { Provento } from './provento.model';
import { Component, OnInit } from '@angular/core';
import { ListProventoService } from './list-proventos.service';

@Component({
  selector: 'mt-list-proventos',
  templateUrl: './list-proventos.component.html' 
})
export class ListProventosComponent implements OnInit {
  proventos : Provento[] = [];
  constructor(private proventosService: ListProventoService) { }

  ngOnInit() {
    this.proventosService.proventos()
    .subscribe(prvs => this.proventos = prvs);
  }

}
