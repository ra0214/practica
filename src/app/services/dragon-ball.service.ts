import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character} from '../components/models/character';

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  constructor(readonly httpClient: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    let url = 'https://dragonball-api.com/api/characters'

    return this.httpClient.get<Character[]>(url);
  }
}
