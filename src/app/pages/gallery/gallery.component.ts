import { Component, inject } from '@angular/core';
import { ImagesModel } from '../../models/images.model';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LangService } from '../../shared/services/lang-service.service';
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  private destroy$ = new Subject<void>();

  url: string = environment.apiUrl
  endPoint: string = "API/Images/Get"
  _http = inject(HttpClient)
  _langService = inject(LangService)
  imagesData!: ImagesModel[]
  getImagesData() {
    return this._http.get<ImagesModel[]>(`${this.url}${this.endPoint}`)
      .subscribe(
        res => {
          this.imagesData = res
        });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getImagesData(); // ⬅️ أعد جلب البيانات
      });
  }
}
