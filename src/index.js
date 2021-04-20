import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
import {books} from './Books';
import Book from './Book';
//stateless function
//Always retunr JSX

// function Greeting() {
//   return <h1>Hello, this is Ayush and Welcome to my web development journey</h1>
// }

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world!!!")
//   );
// };

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}



ReactDOM.render(<BookList />, document.getElementById("root"));
