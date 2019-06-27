import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'To-Do-List';

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'check',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svgIcons/check.svg')
    );
    iconRegistry.addSvgIcon(
      'uncheck',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svgIcons/uncheck.svg')
    );
  }

  ngOnInit(): void {
  }
}

