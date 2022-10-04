import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-app',
  templateUrl: './section-app.component.html',
  styleUrls: ['./section-app.component.css']
})
export class SectionAppComponent implements OnInit {

 typedTextSpan: string = "";
 cursorSpan: any;

 textArray = ["seu corte", "suas luzes", "sua progressiva", "sua barba"];
 typingDelay = 200;
 erasingDelay = 100;
 newTextDelay = 2000; // Delay between current and next text
 textArrayIndex = 0;
 charIndex = 0;

  constructor() { }

  ngOnInit(): void {
  //  if(this.textArray.length) setTimeout(this.type, this.newTextDelay + 250);
  }

  type() {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      this.typedTextSpan += this.textArray[this.textArrayIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(this.type, this.typingDelay);
    }
    else {
      this.cursorSpan.classList.remove("typing"); // remove typing
      setTimeout(this.erase, this.newTextDelay);
    }
  }

  erase() {
    if (this.charIndex > 0) {
      if(!this.cursorSpan.classList.contains("typing")) this.cursorSpan.classList.add("typing"); // if no typing class add typing
      this.typedTextSpan = this.textArray[this.textArrayIndex].substring(0, this.charIndex-1);
      this.charIndex--;
      setTimeout(this.erase, this.erasingDelay);
    }
    else {
      this.cursorSpan.classList.remove("typing"); // remove typing
      this.textArrayIndex++;
      if(this.textArrayIndex>=this.textArray.length) this.textArrayIndex=0;
      setTimeout(this.type, this.typingDelay + 1100);
    }
  }

}
