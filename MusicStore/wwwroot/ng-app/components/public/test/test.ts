import * as ng from 'angular2/core';
import { DOM } from 'angular2/src/platform/dom/dom_adapter';
import { TestService } from '../test/test-service';

@ng.Component({
  selector: 'test',
  template: '<div #content [ngClass]="classes"><ng-content></ng-content></div>',
  styleUrls: ['./ng-app/components/public/test/test.css']
})
export class Test implements ng.OnChanges, ng.AfterViewInit {
    private _PROP_CLASSES = ['color', 'state'];
    classes : Object;
    elementRef : ng.ElementRef;
    renderer: ng.Renderer;
    testService: TestService;

    @ng.Input() color : String;
    @ng.Input() state : String;

    @ng.ViewChild('content') contentElement : ng.ElementRef;

    constructor(elementRef: ng.ElementRef, renderer: ng.Renderer, testService: TestService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.testService = testService;
        this.classes = {};
    }

    ngOnChanges(changeRecord){
        for (let i = 0; i < this._PROP_CLASSES.length; i++) {
            if(changeRecord[this._PROP_CLASSES[i]]){
                this.setClasses();
                break;
            }
        }
    }

    ngAfterViewInit(){
        this.color = this.testService.color;
        this.setClasses();

        this.renderer.setElementStyle(this.contentElement.nativeElement , 'padding', '10px');
        DOM.setAttribute(this.contentElement.nativeElement, 'data-test', 'data from DOM');
    }

    setClasses() {
        let _classes = {},
        _prop_class;
    
        for (let i = 0; i < this._PROP_CLASSES.length; i++) {
        _prop_class = this._PROP_CLASSES[i];

        if(this[_prop_class]) { 
            _classes[_prop_class + '-' + this[_prop_class]] = true; }
        }

        this.classes = _classes;
    }
}