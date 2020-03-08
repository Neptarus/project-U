import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Leitor } from './leitor';

@Injectable()
export class LeitorService{
    urlService: string = "http://localhost:8181/leitores";

    constructor(private http: HttpClient){
    }


    list(){
          return this.http.get<Leitor[]>(this.urlService);
    }


    getById(id: number){
        return this.http.get<Leitor>(this.urlService + '/'+ id);
    }

    create(leitor: Leitor){        
          return this.http.post(this.urlService, leitor);          
    }

    update(leitor: Leitor){        
          return this.http.put(this.urlService, leitor);       
  }

    delete(id: number){
      return this.http.delete(this.urlService + '/' + id);
  }

}