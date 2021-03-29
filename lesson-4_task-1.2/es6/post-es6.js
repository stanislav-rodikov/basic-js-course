'use strict';

/*
* 1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
*     наследования -> механика наследования),
*     а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
*        типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
*     б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
*        помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
*        свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
*        Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
*        highlighted значение true.
*/
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = false;
    }
}

const post = new Post('John', 'Lorem ipsum', new Date().toLocaleDateString());
const attachedPost = new AttachedPost('Alex', 'Lorem ipsum', new Date().toLocaleDateString());

console.log(post);
console.log(attachedPost);

post.edit('Hello');

attachedPost.edit('Hello');
attachedPost.makeTextHighlighted();

console.log(post);
console.log(attachedPost);
