import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { LangService } from './lang-service.service';
import { IconSweetAlert } from '../enums/iconSweetAlert.enum';
// import { IconSweetAlert } from '../../Enums/iconSweetAlert.enum';
@Injectable({
  providedIn: 'root'
})
export class SweetalertService {
  constructor() { }

  sweetAlert(icon: IconSweetAlert, title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: icon,
      title: title,
    });
  }

  toastDone() {
    return Swal.mixin({
      icon: 'success',
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text: 'عملية ناجحة',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    }).fire();
  }

  toastError(text: string) {
    return Swal.mixin({
      icon: 'error',
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    }).fire();
  }

  toastWarning(text: string) {
    return Swal.mixin({
      icon: 'warning',
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    }).fire();
  }

  toastDoneWithMessage(text: string) {
    return Swal.mixin({
      icon: 'success',
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    }).fire();
  }

  toastErrorWithMessage(text: string, psitionClass: string = 'bottom-end') {
    return Swal.mixin({
      icon: 'error',
      toast: true,
      position: psitionClass || ('bottom-end' as any),
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    }).fire();
  }

}
