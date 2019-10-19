import { Component, OnInit } from '@angular/core';
import { Post } from 'src/model/post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public posts: Post[] = [];

    constructor() {
        this.posts.push(new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
            ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
            'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 5));
        this.posts.push(new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
            ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
            'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', -5));
        this.posts.push(new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
            ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
            'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 0));

        console.log(this.posts);
    }
}
