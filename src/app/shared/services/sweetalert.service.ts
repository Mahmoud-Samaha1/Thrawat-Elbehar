import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { IconSweetAlert } from '../../Enums/iconSweetAlert.enum';
import { LanguageService } from './language.service';
@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor(private _languageService: LanguageService,private translate: TranslateService,) { 
    
  }
  
  seenNotifications() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.areYouSureToSeen}`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }
  unSeenNotifications() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.areYouSureToUnseen}`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }
  toastAllSeen() {
    return Swal.mixin({
      icon: "success",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text: this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.seenIsDone,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  };
  toastAllUnSeen() {
    return Swal.mixin({
      icon: "success",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text:this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.unSeenIsDone,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  };
  sweetAlert(icon: IconSweetAlert, title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      // onOpen: (toast) => {
      //   toast.addEventListener('mouseenter', Swal.stopTimer);
      //   toast.addEventListener('mouseleave', Swal.resumeTimer);
      // }
    });
    Toast.fire({
      icon: icon,
      title: title,
    });
  }

  
  unAuthorized(message: string) {
    return Swal.mixin({
      icon: "warning",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text: message,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  }
 
  get LANG(): string {
    let lang = localStorage.getItem("lang");
    if (lang === "en") return "EN";
    return "AR";
  }

  toastActivated() {
    return Swal.mixin({
      icon: "success",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text: this._languageService.GetCurrentLanguage() === "en" ? "activated is done" :  "تم التفعيل بنجاح",
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  };

  toastDeActivated() {
    return Swal.mixin({
      icon: "success",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text: this._languageService.GetCurrentLanguage() === "en"? "deactivated is done" : "تم إلغاء التفعيل بنجاح",
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  };

  toastToggleActivation = (status:boolean) => status ? this.toastActivated() : this.toastDeActivated();
  
  toastDone() {
    return Swal.mixin({
      icon: "success",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text: this._languageService.GetCurrentLanguage() === "en" ? "Success" : "عملية ناجحة",
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  };

  toastError(text: string) {
    return Swal.mixin({
      icon: "error",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  }

  toastDeleted() {
    return Swal.mixin({
      icon: "success",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text: this._languageService.GetCurrentLanguage() === "en" ? "deleted" : "تم الحذف بنجاح",
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  };


  toastWarning(text: string) {
    return Swal.mixin({
      icon: "warning",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  }

  toastWarningDublicatedItem() {
    return Swal.mixin({
      icon: "warning",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text:`${this._languageService.GetCurrentLanguage() === "en" ? 'This choice is duplicated' : 'هذا الاختيار مكرر من قبل'}`,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  }


  deleteQuestion() {
    return Swal.fire({
      icon: 'warning',
      position: "center",
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ? 'are you sure to delete ?' : 'هل أنت متأكد من الحذف ؟'} `,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }
 cancelJoiningQuestion() {
    return Swal.fire({
      icon: 'warning',
      position: "center",
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ? 'are you sure to cancel join opportunity ?' : 'هل أنت متأكد من إلغاء طلب الانضمام ؟ '} `,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }
  rejectQuestion() {
    return Swal.fire({
      icon: 'warning',
      position: "center",
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ? 'are you sure to reject invitation ?' : 'هل أنت متأكد من رفض الدعوة ؟'} `,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

  activateQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en" ?  'are you sure to activate' : 'هل أنت متأكد من  التفعيل'} ?`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }
  
  deActivateQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ?  'are you sure to deactivate' :'هل أنت متأكد من إلغاء التفعيل'} ?`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this._languageService.GetCurrentLanguage() === "en"?  'لا ' : 'no'}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }
  BlockQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.LANG === "AR" ? 'أنتبه' : 'be careful'} !`,
      text: `${this.LANG === "AR" ? 'هل أنت متأكد من  حظر العضو' : 'are you sure to block the member'} ?`,
      confirmButtonText: `${this.LANG === "AR" ? 'نعم' : 'yes'}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.LANG === "AR" ? 'لا ' : 'no '}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }
  
  UnBolckQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.LANG === "AR" ? 'أنتبه' : 'be careful'} !`,
      text: `${this.LANG === "AR" ? 'هل أنت متأكد من إلغاء حظر العضو' : 'are you sure to unblock the member'} ?`,
      confirmButtonText: `${this.LANG === "AR" ? 'نعم' : 'yes'}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.LANG === "AR" ? 'لا ' : 'no'}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }
  saveQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ? 'are you sure to save' : 'هل أنت متأكد من الحفظ'} ?`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

  assignTeamLeaderQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"? 'are you sure to assign this team member as team leader ?'  : 'هل أنت متأكد من تعيين عضو الفريق كقائد ؟'} `,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

  assignViceTeamLeaderQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"?  'are you sure to assign this team member as vice team leader ' : ' هل أنت متأكد من تعيين عضو الفريق كنائب قائد'} ?`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

  unAssignViceTeamLeaderQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ? 'are you sure to unassign this team member as vice team leader ? ' : '؟ هل أنت متأكد من عدم تعيين عضو الفريق كنائب قائد'}`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

  leaveTeamQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ? 'are you sure to leave team ?': 'هل أنت متأكد من مغادرة الفريق ؟' }`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

  leaveEntityQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ? 'are you sure to withdraw from entity ?': 'هل أنت متأكد من الانسحاب من الجهة ؟' }`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

  withdrawQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ? 'are you sure to withdraw ?': 'هل أنت متأكد من الانسحاب ؟' }`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

  teamLeaderWithdrawQuestion() {
    return Swal.fire({
      icon: 'warning',
      title: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.beCareful}!`,
      text: `${this._languageService.GetCurrentLanguage() === "en"  ? 'Are you sure to withdraw as team leader?': 'هل أنت متأكد من الانسحاب كقائد فريق؟' }`,
      confirmButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.yes}`,
      confirmButtonColor: `#dc3545`,
      cancelButtonText: `${this.translate.store.translations[this._languageService.GetCurrentLanguage()].Common.no}`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

  toastDoneWithMessage(text:string) {
    return Swal.mixin({
      icon: "success",
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  };

  toastErrorWithMessage(text:string,psitionClass:string='bottom-end') {
    return Swal.mixin({
      icon: "error",
      toast: true,
      position:psitionClass||'bottom-end' as any,
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    }).fire();
  };


  activationToggleQuestion = (status:boolean) => status ? this.activateQuestion() : this.deActivateQuestion(); 

  GeneralQuestion(text:string) {
    return Swal.fire({
      icon: 'warning',
        title: `${this.LANG === "AR" ? 'انتبه' : 'be careful'} !`,
      text: text,
        confirmButtonText: `${this.LANG === "AR" ? 'نعم' : 'yes'}.`,
      confirmButtonColor: `#dc3545`,
        cancelButtonText: `${this.LANG === "AR" ? 'لا' : 'no'}.`,
      cancelButtonColor: `#f8f9fa`,
      showCancelButton: true
    })
  }

      // How to find the invalid controls in Angular

  // for (let el in this.addForm.controls) {
  //      if (this.addForm.controls[el].errors) {
  //        console.log(el)
  //      }
  //    } 

}
