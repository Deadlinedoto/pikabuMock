import { Component } from '@angular/core';
import {SvgIconsComponent} from '../../svg-icons/svg-icons.component';

@Component({
  selector: 'app-header',
  imports: [
    SvgIconsComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  buttons: string[] = ['Горячее', 'Лучшее', 'Свежее', 'Подписки', 'Сообщества', 'Блоги', 'Эксперты' ]
}
