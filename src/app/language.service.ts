import { Injectable, EventEmitter, TRANSLATIONS } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  setLanguage(lang: string): void {
    if (this.selectedLanguage !== lang) {
      this.selectedLanguage = lang;
      this.languageChange.emit(lang);
    }
  }
  selectedLanguage: string = 'en';
  languageChange: EventEmitter<string> = new EventEmitter<string>();

  switchLanguage() {
    if (this.selectedLanguage === 'en') {
      this.selectedLanguage = 'de';
    } else {
      this.selectedLanguage = 'en';
    }
    this.languageChange.emit(this.selectedLanguage);
  }
  getLanguage(): string {
    return this.selectedLanguage;
  }

  getTranslation(key: string): string {
    const keys = key.split('.');
    let translation = this.translations[this.selectedLanguage];
    for (const k of keys) {
      translation = translation[k];
    }
    return translation;
  }

  translations: any = {
    de: {
      privacy: {
        policy: ' Datenschutzerklärung',
        imprint: 'Impressum',
      },
      talk: {
        btn: 'Kontaktieren Sie mich!',
        btn1: 'Kontaktieren Sie mich!',
      },
      About: {
        heading: 'Über mich',
        intro:
          'Ich bin ein deutschsprachiger Frontend-Entwickler mit Sitz in Delitzsch, Deutschland. Angetrieben von den nahezu unbegrenzten Möglichkeiten, die die IT-Welt bietet.',
        sections: {
          passion:
            'Ich habe eine starke Leidenschaft für das Erlernen neuer Technologien und gedeihe daran, Herausforderungen mit kreativen Lösungen zu meistern. Mit einem scharfen Auge für Details und einem Engagement für qualitativ hochwertige Arbeit suche ich kontinuierlich nach Möglichkeiten, meine Fähigkeiten zu erweitern und effektiv zu Projekten beizutragen.',
          profession:
            'In meinem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben; es ist eine kreative Form der Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu destillieren. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.',
        },
      },

      Skills: {
        intro:
          'Ich habe Erfahrung im Erstellen von Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.',
        getin: '',
      },
      Contact: {
        heading: 'Kontakt',
        intro: 'Haben Sie ein Problem zu lösen?',
        description:
          'Kontaktieren Sie mich über dieses Formular. Ich freue mich darauf, von Ihnen zu hören, Ihre Ideen zu kennen und mit meiner Arbeit zu Ihren Projekten beizutragen. Haben Sie ein Problem zu lösen? Nehmen Sie Kontakt auf!',
        errors: {
          names: 'Der Name muss aus mindestens 2 Zeichen bestehen.',
          email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
          massage: 'Bitte geben Sie eine Nachricht ein.',
          privacy:
            'Sie müssen die Datenschutzrichtlinie akzeptieren, um fortzufahren.',
        },
        form: {
          namePlaceholder: 'Geben Sie Ihren Namen ein',
          emailPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein',
          messagePlaceholder: 'Geben Sie Ihre Nachricht ein',
          privacyPolicy: {
            firstpart: 'Ich habe die',
            link: 'Datenschutzerklärung',
            lastpart: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
          },
          submitting: 'Senden...',
          submitted: 'Nachricht wurde versendet',
          submit: 'Senden',
          submitButton: 'Nachricht senden',
        },
      },
      Portfolio: {
        heading: 'Portfolio',
        intro:
          'Entdecken Sie hier eine Auswahl meiner Arbeiten - interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',
        projects: {
          join: {
            name: 'Join',
            skills: ['HTML', 'CSS', 'Firebase'],
            description:
              'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
            links: {
              liveTest: '#',
              github: '#',
            },
          },
          pollo: {
            name: 'El Pollo Loco',
            skills: ['HTML', 'CSS', 'JavaScript'],
            description:
              'El Pollo Loco ist ein Spiel, bei dem ein Mexikaner seinen Weg durch eine sengende Wüste bahnt, Flaschen sammelt und mutig gegen Hühner kämpft. Gebaut mit JavaScript, HTML und CSS.',
          },
          pokedex: {
            name: 'Pokedex',
            skills: ['HTML', 'CSS', 'JavaScript', 'API'],
            description:
              'Ein dynamischer Pokédex, der über die PokeAPI Daten wie Namen, Typen, Fähigkeiten und Bilder in Echtzeit abruft und auf meiner Webseite rendert. Ziel ist ein interaktives und benutzerfreundliches Tool für Pokémon-Fans.',
          },
        },
      },
    },
    en: {
      privacy: {
        policy: 'Privacy policy',
        imprint: 'Imprint',
      },
      talk: {
        btn: 'Lets talk!',
        btn1: 'Get in touch!',
      },
      About: {
        heading: 'About Me',
        intro:
          'I am a German-speaking Frontend Developer based in Delitzsch, Germany. Driven by the nearly limitless possibilities that the IT world offers.',
        sections: {
          passion:
            'I have a strong passion for learning new technologies and thrive on tackling challenges with creative solutions. With a keen eye for detail and a commitment to delivering high-quality work, I continuously seek opportunities to expand my skill set and contribute effectively to projects.',
          profession:
            "In my profession, programming isn't just about writing code; it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.",
        },
      },
      Skills: {
        intro:
          'I have gained experience in building projects with different frontend technologies and concepts.',
      },
      Contact: {
        heading: 'Contact',
        intro: 'Got a problem to solve?',
        description:
          'Contact me through this form. I look forward to hearing from you, knowing your ideas, and contributing to your projects with my work. Got a problem to solve? Get in touch!',
        errors: {
          names: 'Name must be at least 2 characters long.',
          email: 'Please enter a valid email address.',
          massage: 'Please enter Massage',
          privacy: 'You must accept the privacy policy to proceed',
        },
        form: {
          namePlaceholder: 'Enter your name',
          emailPlaceholder: 'Enter your email address',
          messagePlaceholder: 'Enter your message',
          submitButton: 'Send Message',
          submitting: 'Submitting...',
          submitted: 'Message sent',
          submit: 'Send',

          privacyPolicy: {
            firstpart: 'I have read the',
            link: ' privacy policy',
            lastpart: 'and agree to the processing of my data.',
          },
        },
      },
      Portfolio: {
        heading: 'Portfolio',
        intro:
          'Explore a selection of my work here - interact with projects to see my skills in action.',
        projects: {
          join: {
            name: 'Join',

            skills: ['HTML', 'CSS', 'Firebase'],
            description:
              'Task manager inspired by the Kanban System. Create and organize tasks using drag-and-drop functions, assign users and categories.',
          },
          pollo: {
            name: 'El Pollo Loco',

            skills: ['HTML', 'CSS', 'JavaScript'],
            description:
              'El Pollo Loco is a game where a Mexican makes his way through a scorching desert, collecting bottles and bravely fighting off chickens. ',
          },
          pokedex: {
            name: 'Pokedex',
            skills: ['HTML', 'CSS', 'JavaScript', 'API'],
            description:
              'A dynamic Pokédex that fetches data like names, types, abilities, and images in real time from the PokeAPI and renders it on my website. The goal is an interactive and user-friendly tool for Pokémon fans.',
          },
        },
      },
    },
  };
}
