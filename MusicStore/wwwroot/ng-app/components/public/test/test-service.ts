import * as ng from 'angular2/core';

@ng.Injectable()
export class TestService {
    public color: String;

    constructor(){
        this.color = 'black';
    }
} 