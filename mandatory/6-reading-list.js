/**

The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    read: false,
  },
  {
    title: "Creative Visualization",
    author: "Shakti Gawain",
    read: true,
  },
  {
    title: "Language of Emotions",
    author: "Karla McLaren",
    read: true,
  },
  {
    title: "Jude the Obscure",
    author: "Thomas Hardy",
    read: false,
  },
  {
    title: "Captivate",
    author: "Vanessa van Edwards",
    read: true,
  },
];

for (i = 0; i < books.length; i++) {
  console.log(`${books[i].title} by ${books[i].author}`);
}
