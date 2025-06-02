import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from "./shared-ui/components/header/header.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, HeaderComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  _translateService = inject(TranslateService);

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("appLanguage", "ar");
    this._translateService.setDefaultLang(localStorage.getItem("appLanguage")!);
    this._translateService.use(localStorage.getItem("appLanguage")!);
  }
}
