import { Injectable } from '@angular/core';
import { env } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  baseUrl = env.baseUrl;
  constructor() {}
}
