import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  backend = environment.backend+"/registroForm"
  constructor(private http: HttpClient) { }


ObtenerRegistros (){ 
  return this.http.get(`${this.backend}/obtener-registros`);
}
}


