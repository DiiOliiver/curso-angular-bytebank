import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transferencia } from "../models/transferencia.model";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: Array<Transferencia>;
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias(): Array<Transferencia> {
    return this.listaTransferencias;
  }

  todas(): Observable<Array<Transferencia>> {
    return this.httpClient.get<Array<Transferencia>>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: Transferencia): void {
    transferencia.data = new Date();
  }
}
