import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Autor } from './autor';

@Injectable()
export class AutorService{
    urlService: string = "http://localhost:8080/autores";

    constructor(private http: HttpClient){
    }


    list(){
          return this.http.get<Autor[]>(this.urlService);
    }


    getById(id: number){
        return this.http.get<Autor>(this.urlService + '/'+ id);
    }

    create(autor: Autor){        
          return this.http.post(this.urlService, autor);          
    }

    update(autor: Autor){        
          return this.http.put(this.urlService, autor);       
  }

    delete(id: number){
      return this.http.delete(this.urlService + '/' + id);
  }

}