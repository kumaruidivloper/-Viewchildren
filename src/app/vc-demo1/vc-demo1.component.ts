import { Component, 
         ViewChildren, 
         AfterViewInit, 
         ViewContainerRef, 
         QueryList,
         ElementRef } from '@angular/core';
import { WriterComponent } from '../writer/writer.component';

@Component({
  selector: 'app-vc-demo1',
  templateUrl: './vc-demo1.component.html',
  styleUrls: ['./vc-demo1.component.scss']
})
export class VcDemo1Component implements AfterViewInit {

  constructor() { }

  @ViewChildren(WriterComponent)
	writers1: QueryList<WriterComponent>;

	@ViewChildren(WriterComponent, { read: ElementRef })
	writers2: QueryList<ElementRef>;

	@ViewChildren(WriterComponent, { read: ViewContainerRef })
	writers3: QueryList<ViewContainerRef>;

	allWritersVisible = false;

	ngAfterViewInit() {
		console.log('--- @ViewChildren + Component ---');
		this.writers1.changes.subscribe(list => {
			list.forEach(writer => console.log(writer.writerName + ' - ' + writer.bookName));
		});
		console.log(this.writers1.length);
		console.log("Result with ElementRef:");
		this.writers2.forEach(el => console.log(el));

		console.log("Result with ViewContainerRef:");
		this.writers3.forEach(vref => console.log(vref));
	}
	onShowAllWriters() {
		this.allWritersVisible = (this.allWritersVisible === true) ? false : true;
	}

}
