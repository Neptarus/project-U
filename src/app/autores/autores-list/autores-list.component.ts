import { Component, OnInit } from '@angular/core';

import { AutorService } from 'src/app/Autor/autor-service';
import { Autor } from 'src/app/Autor/autor';
import { Response } from 'src/app/response';


@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.css']
})
export class AutoresListComponent implements OnInit {
  displayDialog: boolean;
  autor: Autor;
  selectedAutor: Autor;
  newAutor: boolean;
  autores: Autor[];
  cols: any[];
  
  
 


  constructor(private autorService: AutorService){}

  ngOnInit() {
     this.autorService.list().subscribe(autores => this.autores = autores);
  
     this.cols = [
         { field: 'nome', header: 'Nome' },
         { field: 'endereco', header: 'Endereço' },
         { field: 'cidade', header: 'Cidade' }
       
     ];
  
    }

    showDialogToAdd() {
      this.newAutor = true;
      this.autor = new Autor();
      this.displayDialog = true;
  }

  save() {
      let autores = [...this.autores];


     if (this.newAutor){ 
          autores.push(this.autor);
          this.autorService.create(this.autor).subscribe(response => {

            let res: Response = <Response>response;
    
            if (res.codigo == 1) {           
              this.autor = new Autor();
            }
            else {         
              alert(res.mensagem);
            }
          },
            (erro) => {
              alert(erro);
            });



     }
      else{ 
          autores[this.autores.indexOf(this.selectedAutor)]= this.autor;
          this.autorService.update(this.autor).subscribe(response => {
            let res: Response = <Response>response;
    
            if (res.codigo == 0) {            
              alert(res.mensagem);
            }
          },
            (erro) => {                           
              alert(erro);
            });
          
      }
      this.autores = autores;
      this.autor = null;
      this.displayDialog = false;
  }

  delete() {
      let index = this.autores.indexOf(this.selectedAutor);
    
      if(confirm("Deseja realmente excluir esse registro?")){
        this.autorService.delete(this.selectedAutor.id).subscribe(response => {
              let res:Response = <Response>response;
              if(res.codigo == 1){
                this.autores.splice(index,1);
              }                        
               alert(res.mensagem);
              
          },
          (erro) => {  
               alert(erro);
          });        
      }
    
      this.autores = this.autores.filter((val, i) => i != index);
      this.autor = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newAutor = false;
      this.autor = this.cloneAutor(event.data);
      this.displayDialog = true;
  }

  cloneAutor(c: Autor): Autor {
      let autor = new Autor();
      for (let prop in c) {
        autor[prop] = c[prop];
      }
      return autor;
  }
}

