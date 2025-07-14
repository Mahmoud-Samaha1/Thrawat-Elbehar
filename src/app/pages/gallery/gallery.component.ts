import { Component, DestroyRef, inject } from '@angular/core';
import { ImagesModel } from '../../models/images.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LangService } from '../../shared/services/lang-service.service';
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { TranslateModule } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  url: string = environment.apiUrl
  endPoint: string = "API/Images/Get"
  _http = inject(HttpClient)
  _langService = inject(LangService)
  imagesData!: ImagesModel[]
  private destroyRef = inject(DestroyRef);

  getImagesData() {
    return this._http.get<ImagesModel[]>(`${this.url}${this.endPoint}`)
      .subscribe(
        res => {
          this.imagesData = res
        });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.getImagesData();
      });
  }
}
