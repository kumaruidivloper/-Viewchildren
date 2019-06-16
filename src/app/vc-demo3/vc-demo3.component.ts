import { Component, 
         ViewChildren, 
         AfterViewInit, 
         QueryList, 
         ElementRef } from '@angular/core';

@Component({
  selector: 'app-vc-demo3',
  templateUrl: './vc-demo3.component.html',
  styleUrls: ['./vc-demo3.component.scss']
})
export class VcDemo3Component implements AfterViewInit {
  @ViewChildren('pname')
	persons: QueryList<ElementRef>;

	ngAfterViewInit() {
		console.log('--- @ViewChildren + ElementRef ---');
		this.persons.forEach(el => console.log(el.nativeElement.innerHTML));
	}
  constructor() { }

}
