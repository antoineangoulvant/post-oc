export class Post {
    title: string;
    content: string;
    loveIts: number;
    createAt: Date;

    constructor(title: string, content: string, loveIts: number) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.createAt = new Date();
    }
}
