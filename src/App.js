import React from "react";
import Navbar from "./navigation/Navbar";
import "./App.css";
import LoginForm from "./login/LoginForm";
import GridBook from "./Grid/BookGrid";
// import ListBook from "./List/BookList";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState({});

  const [users] = useState([
    {
      id: 11,
      name: "Amjad",
      email: "amjad@mail.com",
      password: "BytMig123",
      avtar:
        "https://image.shutterstock.com/z/stock-vector-isolated-avatar-of-an-afro-american-man-vector-illustration-2012367269.jpg",
      books: [
        {
          id: 1,
          title: "book 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
          isRead: true,
        },
        {
          id: 2,
          title: "book 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
        },
        {
          id: 3,
          title: "book 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
        },
      ],
    },
    {
      id: 22,
      name: "John",
      email: "john@mail.com",
      password: "BytMig123",
      avtar:
        "https://pngset.com/images/cartoon-man-avatar-person-face-head-glasses-transparent-png-186572.png",
      books: [
        {
          id: 1,
          title: "Vue 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
          isRead: true,
        },
        {
          id: 2,
          title: "React 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
        },
        {
          id: 3,
          title: "TypeScript 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
        },
      ],
    },
    {
      id: 33,
      name: "Joakim",
      email: "joakim@mail.com",
      password: "BytMig123",
      avtar:
        "https://image.shutterstock.com/z/stock-vector-young-afro-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-723829372.jpg",
      books: [
        {
          id: 1,
          title: "Tailwind 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
          isRead: true,
        },
        {
          id: 2,
          title: "Java 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
        },
        {
          id: 3,
          title: "Python 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
        },
      ],
    },
  ]);

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        name={admin.name}
        avtar={admin.avtar}
        email={admin.email}
      />
      <div className="container">
        <div>
          {!isLoggedIn ? (
            <div className="lonin">
              <LoginForm
                setIsLoggedIn={setIsLoggedIn}
                users={users}
                setAdmin={setAdmin}
              />
            </div>
          ) : (
            <div className="book-container">
              {admin.books.map((book) => (
                <GridBook
                  key={book.id}
                  title={book.title}
                  description={book.description}
                  imgURL={book.imgURL}
                  isRead={book.isRead}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
