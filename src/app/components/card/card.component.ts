import { Component, Input } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() dragon:Character = {
    id: 0,
    name: '',
    ki: 0,
    maxki: 0,
    race: '',
    gender: '',
    description: '',
    image: ''
  }
}
