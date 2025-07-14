import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LangService } from '../../shared/services/lang-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { mediaModel } from '../../models/media.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent implements OnInit {
  url: string = environment.apiUrl
  endPoint: string = "API/Videos/Get"
  _http = inject(HttpClient)
  _langService = inject(LangService)
  mediaData!: mediaModel[]
  _sanitzer = inject(DomSanitizer)
  videoUrl: SafeResourceUrl[] | undefined;
  private destroyRef = inject(DestroyRef);

  getMediaData() {
    return this._http.get<mediaModel[]>(`${this.url}${this.endPoint}`)
      .subscribe(
        res => {
          this.mediaData = res
          this.videoUrl = this.mediaData.map(media =>
            this._sanitzer.bypassSecurityTrustResourceUrl(media.IframeLink));
        });
  }
  ngOnInit(): void {
    this._langService.langChanged$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.getMediaData();
      });
  }
}
