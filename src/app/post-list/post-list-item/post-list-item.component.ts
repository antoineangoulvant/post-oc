import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/model/post';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
    @Input() post: Post;

    constructor() { }

    onUpVote() {
        this.post.loveIts++;
    }

    onDownVote() {
        this.post.loveIts--;
    }
}
