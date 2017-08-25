import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'app',
    templateUrl: './src/app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    public myTime: Date = new Date();
    public min: Date = new Date();
    public max: Date = new Date();
    public hourStep: number = 1;
    public minuteStep: number = 1;
    public showMeridian: boolean = true;
    public showSeconds: boolean = false;
    public readonlyInput: boolean = false;
    public mousewheel: boolean = false;
    public arrowkeys: boolean = false;

    private _hourStep = 1;
    private _minuteStep = 1;

    get hStep() {
        return this._hourStep;
    }
    set hStep(value: number) {
        this._hourStep = (value >= 1) ? value : 1;
    }

    get mStep() {
        return this._minuteStep;
    }
    set mStep(value: number) {
        this._minuteStep = (value >= 1) ? value : 1;
    }

    constructor() {

        this.min.setHours(0);
        this.min.setMinutes(0);
        this.max.setHours(23);
        this.max.setMinutes(59);
    }

    changed(time: Date): void {
        this.myTime = time;
        console.log('Time changed to: ' + this.myTime);
    }
}
