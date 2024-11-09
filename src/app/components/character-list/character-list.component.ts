import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CardComponent, RouterOutlet],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
}
