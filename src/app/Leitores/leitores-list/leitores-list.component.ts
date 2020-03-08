import { Component, OnInit } from '@angular/core';

import { LeitorService } from 'src/app/Leitor/leitor-service';
import { Leitor } from 'src/app/Leitor/leitor';
import { Response } from 'src/app/response';


@Component({
  selector: 'app-leitores-list',
  templateUrl: './leitores-list.component.html',
  styleUrls: ['./leitores-list.component.css']
})
export class LeitoresListComponent implements OnInit {
  displayDialog: boolean;
  leitor: Leitor;
  selectedLeitor: Leitor;
  newLeitor: boolean;
  leitores: Leitor[];
  cols: any[];
  
  
 


  constructor(private leitorService: LeitorService){}

  ngOnInit() {
     this.leitorService.list().subscribe(leitores => this.leitores = leitores);
  
     this.cols = [
         { field: 'nome', header: 'Nome' },
         { field: 'sobrenome', header: 'sobrenome' },
         { field: 'cidade', header: 'cidade' }
       
     ];
  
    }

    showDialogToAdd() {
      this.newLeitor = true;
      this.leitor = new Leitor();
      this.displayDialog = true;
  }

  save() {
      let leitores = [...this.leitores];


     if (this.newLeitor){ 
          leitores.push(this.leitor);
          this.leitorService.create(this.leitor).subscribe(response => {

            let res: Response = <Response>response;
    
            if (res.codigo == 1) {           
              this.leitor = new Leitor();
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
          leitores[this.leitores.indexOf(this.selectedLeitor)]= this.leitor;
          this.leitorService.update(this.leitor).subscribe(response => {
            let res: Response = <Response>response;
    
            if (res.codigo == 0) {            
              alert(res.mensagem);
            }
          },
            (erro) => {                           
              alert(erro);
            });
          
      }
      this.leitores = leitores;
      this.leitor = null;
      this.displayDialog = false;
  }

  delete() {
      let index = this.leitores.indexOf(this.selectedLeitor);
    
      if(confirm("Deseja realmente excluir esse registro?")){
        this.leitorService.delete(this.selectedLeitor.id).subscribe(response => {
              let res:Response = <Response>response;
              if(res.codigo == 1){
                this.leitores.splice(index,1);
              }                        
               alert(res.mensagem);
              
          },
          (erro) => {  
               alert(erro);
          });        
      }
    
      this.leitores = this.leitores.filter((val, i) => i != index);
      this.leitor = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newLeitor = false;
      this.leitor = this.cloneAutor(event.data);
      this.displayDialog = true;
  }

  cloneAutor(c: Leitor): Leitor {
      let leitor = new Leitor();
      for (let prop in c) {
        leitor[prop] = c[prop];
      }
      return leitor;
  }
}

