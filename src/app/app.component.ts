import { Component } from '@angular/core';
import { Transferencia } from './models/transferencia.model';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {}

  transferir($event: Transferencia) {
    this.service.adicionar($event);
  }
}
