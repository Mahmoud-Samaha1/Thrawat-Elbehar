import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared-ui/components/header/header.component";
import { FooterComponent } from "../../shared-ui/components/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LangService } from '../../shared/services/lang-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { mediaModel } from '../../models/media.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent implements OnInit {
  private destroy$ = new Subject<void>();
  url: string = environment.apiUrl
  endPoint: string = "API/Videos/Get"
  _http = inject(HttpClient)
  _langService = inject(LangService)
  mediaData!: mediaModel[]
  _sanitzer = inject(DomSanitizer)
  videoUrl: SafeResourceUrl[] | undefined;
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
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getMediaData(); // ⬅️ أعد جلب البيانات
      });
  }
}
