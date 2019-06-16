import { Component, 
         ViewChild, 
         ViewChildren, 
         AfterViewInit, 
         ViewContainerRef, 
         TemplateRef, 
         QueryList } from '@angular/core';
import { MessageDirective } from '../message.directive';

@Component({
  selector: 'app-vc-demo2',
  templateUrl: './vc-demo2.component.html',
  styleUrls: ['./vc-demo2.component.scss']
})
export class VcDemo2Component implements AfterViewInit {

  constructor() { }

  @ViewChildren(MessageDirective)
	private msgList: QueryList<MessageDirective>;

	@ViewChild('msgTemp')
	private msgTempRef: TemplateRef<any>;

	ngAfterViewInit() {
		console.log('--- @ViewChildren + Directive ---');
		console.log("this.msgList.length: " + this.msgList.length);
		this.msgList.forEach(messageDirective =>
			messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));
	}

}
