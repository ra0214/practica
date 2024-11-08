import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonBallService } from '../../services/dragon-ball.service';
import { Character } from '../models/character';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private dragonBallService: DragonBallService) {}

  ngOnInit(): void {
    this.dragonBallService.getCharacters().subscribe((value: Character[]) => {
      this.characters = value;
    });
  }
}
