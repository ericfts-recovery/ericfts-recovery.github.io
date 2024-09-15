import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-second-chance',
  templateUrl: './second-chance.component.html',
  styleUrls: ['./second-chance.component.css'],
})
export class SecondChanceComponent {
  whatsappLink =
    'https://api.whatsapp.com/send?phone=5551999361823&text=te%20dou%20uma%segunda%chance%20(%20e%20te%20deixo%20usar%meus%descontos%da%jbl%20%F0%9F%A4%9D';

  motivos = [
    'Nosso papo/date foi muito foda',
    'Preciso de alguém para ofender minorias',
    'Teu beijo é muito bom',
    'Tenho que aprender a beber contigo kkkkk',
    'Eu quero saber mais de como foi tua ida no show do RBD',
    'Quero te conhecer maaaais',
    'Como vamos fazer com o Poa em Dobro que preciso usar?',
    'Tu ta me devendo uma ida a um sushi',
    'Quero usar teus descontos da JBL',
    'Combinamos uma viagem pro Rio',
  ];
  contador = 1;
  noDisabled = false;
  showReasons = false;

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2,
    private modalService: NgbModal
  ) {}

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent);
    if (this.contador === 11) {
      this.contador = 1;
    }
    modalRef.componentInstance.title = `Motivo #${this.contador}`;
    modalRef.componentInstance.body = this.motivos[this.contador - 1];
    this.contador++;
  }

  onNo() {
    this.noDisabled = true;
    this.showReasons = true;
  }

  moveNoButton(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const card = this.el.nativeElement.querySelector('.card-body');
    const cardRect = card.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    let newLeft = Math.random() * (cardRect.width - buttonRect.width);
    let newTop = Math.random() * (cardRect.height - buttonRect.height);

    this.renderer.setStyle(button, 'position', 'absolute');
    this.renderer.setStyle(button, 'left', `${newLeft}px`);
    this.renderer.setStyle(button, 'top', `${newTop}px`);
  }

  openWhatsapp() {
    window.open(this.whatsappLink, '_blank');
  }
}
