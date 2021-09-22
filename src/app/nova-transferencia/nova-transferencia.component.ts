import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
  selector: "app-nova-transferencia",
  templateUrl: "./nova-transferencia.component.html",
  styleUrls: [
    "./nova-transferencia.component.scss",
  ]
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;

  constructor(
    private service: TransferenciaService,
    private router: Router
  ) {}

  transferir(): void {
    const valorEmitir: Transferencia = {
      valor: Number(this.valor),
      destino: String(this.destino),
    };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl("extrato");
    }, error => {
      console.error(error);
    });
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
