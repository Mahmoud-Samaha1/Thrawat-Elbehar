import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading = signal(false)
  constructor() { }
  showLoader() {

    this.loading.set(true)
  }
  hideLoader() {
    setTimeout(() => {

      this.loading.set(false)
    }, 500);
  }
}
