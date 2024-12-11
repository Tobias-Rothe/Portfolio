import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ScrollAnimationService } from '../../../scroll-animation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  nameValid = false;
  nameTouched = false;

  emailValid = false;
  emailTouched = false;

  privacyChecked = false;
  privacyTouched = false;

  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    this.scrollAnimationService.observe(this.animatedElements.toArray());
  }

  validateField(field: string, value: string): void {
    if (field === 'name') {
      this.nameValid = value.trim().length >= 2;
    } else if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailValid = emailRegex.test(value);
    }
  }

  validateCheckbox(isChecked: boolean): void {
    this.privacyChecked = isChecked;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.nameValid && this.emailValid && this.privacyChecked) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all fields correctly.');
      this.nameTouched = true;
      this.emailTouched = true;
      this.privacyTouched = true;
    }
  }
}
