import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Artigo } from './artigo';


@Injectable()
export class ArtigoService{
    urlService: string = "http://localhost:8080/artigos";

    constructor(private http: HttpClient){}

    list(){
        return this.http.get<Artigo[]>(this.urlService)
    }

    getById(id: number){
        return this.http.get<Artigo>(this.urlService + "/" + id);
    }

    createOrUpdate(artigo: Artigo){
        if(artigo.id != null){
            return this.http.put(this.urlService, artigo);
        }
        else{
            return this.http.post(this.urlService, artigo);
        }
    }

    delete(id: number){
        return this.http.delete(this.urlService + "/" + id);
    }
}