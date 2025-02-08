import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ScrollAnimationService } from '../../../scroll-animation.service';
import { LanguageService } from '../../language.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.component2.scss'],
})
export class ContactComponent implements AfterViewInit {
  nameValid = false;
  nameTouched = false;

  emailValid = false;
  emailTouched = false;

  privacyChecked = false;
  privacyTouched = false;
  privacyError = false;

  messageValid = false;
  messageTouched = false;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;
  isSubmitting = false;
  isSubmitted = false;

  constructor(
    private router: Router,
    private scrollAnimationService: ScrollAnimationService,
    public languageService: LanguageService,
    private http: HttpClient
  ) {}

  ngAfterViewInit(): void {
    this.scrollAnimationService.observe(this.animatedElements.toArray());
  }

  validateField(field: string, value: any): void {
    if (field === 'name') {
      this.nameValid = value.trim().length >= 2;
    } else if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailValid = emailRegex.test(value);
    } else if (field === 'message') {
      this.messageValid = value.trim().length > 2;
    } else if (field === 'checkbox') {
      this.privacyChecked = value === true;
    }
  }

  validateCheckbox(isChecked: boolean): void {
    this.privacyChecked = isChecked;
  }

  post = {
    endPoint: 'https://tobias-rothe.de/portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm): void {
    this.privacyTouched = true;
    this.nameTouched = true;
    this.emailTouched = true;
    this.messageTouched = true;

    this.validateField('name', this.contactData.name);
    this.validateField('email', this.contactData.email);
    this.validateField('message', this.contactData.message);
    this.validateField('checkbox', this.contactData.privacy);

    if (
      !ngForm.valid ||
      !this.nameValid ||
      !this.emailValid ||
      !this.messageValid ||
      !this.privacyChecked
    ) {
      if (!this.privacyChecked) {
        this.privacyTouched = true;
      }
      return;
    }

    this.isSubmitting = true;
    this.isSubmitted = false;

    const payload = {
      name: this.contactData.name,
      email: this.contactData.email,
      message: this.contactData.message,
    };

    this.http.post(this.post.endPoint, payload, this.post.options).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        setTimeout(() => {
          this.isSubmitted = false;
          this.clearInput();
        }, 3000);
      },
      error: (err) => {
        this.isSubmitting = false;
      },
    });
  }

  clearInput() {
    this.contactData.name = '';
    this.contactData.email = '';
    this.contactData.message = '';
    this.contactData.privacy = false;

    this.nameTouched = false;
    this.emailTouched = false;
    this.privacyTouched = false;
    this.messageTouched = false;

    this.nameValid = false;
    this.emailValid = false;
    this.messageValid = false;
  }

  scrollToTop(): void {
    if (this.router.url === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
