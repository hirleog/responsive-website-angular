import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  text: string = 'lalallaa'



//   Minha abordagem une um profundo conhecimento técnico com uma compreensão
//             real das necessidades dos clientes, transformando as complexas leis
//             atuais em algo acessível e claro para você.Meu compromisso é facilitar
//             o entendimento das questões legais e proporcionar soluções eficazes e
// personalizadas.Ao me contratar, você terá a certeza de estar contando
//             com um profissional que coloca seus interesses em primeiro lugar e busca
//             sempre os melhores resultados para o seu caso.

expanded: boolean = true;   // Controla se o texto está expandido ou não
constructor() { }

ngOnInit(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });

}
toggleExpand() {
  this.expanded = !this.expanded;
}

}
