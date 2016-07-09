import * as ng from 'angular2/core';
import { Http } from 'angular2/http';
import { AlbumTile } from '../album-tile/album-tile';
import * as models from '../../../models/models';

import { Test } from '../test/test';
import { TestService } from '../test/test-service';

@ng.Component({
  selector: 'home',
  templateUrl: './ng-app/components/public/home/home.html',
  directives: [AlbumTile, Test],
  providers: [TestService]
})
export class Home {
    public mostPopular: models.Album[];
    color: String;
    state: String;

    constructor(http: Http, testService: TestService) {
        // http.get('/api/albums/mostPopular').subscribe(result => {
        //     this.mostPopular = result.json();
        // });

        testService.color = 'green';

        this.color = 'blue';
        this.state = 'disabled';
    }
}
