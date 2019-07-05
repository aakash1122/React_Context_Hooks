import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { id: 1, title: "You dont know Js" },
    { id: 2, title: "Head First node" },
    { id: 3, title: "Java script is love" },
    { id: 4, title: "React native is the new hype" },
    { id: 5, title: "Vue is awesome" }
  ]);

  return (
    <BookContext.Provider value={books}>{props.children}</BookContext.Provider>
  );
};

export default BookContextProvider;
