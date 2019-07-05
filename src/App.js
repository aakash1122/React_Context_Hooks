import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContext from "./contexts/ThemeContext";
import ThemeToogle from "./components/ThemeToogle";
import AuthContextProvider from "./contexts/AuthContext";
import ErrorBoundary from "./ErrorBoundary";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <AuthContextProvider>
          <ErrorBoundary>
            <ThemeToogle />
            <Navbar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
          </ErrorBoundary>
        </AuthContextProvider>
      </ThemeContext>
    </div>
  );
}

export default App;
