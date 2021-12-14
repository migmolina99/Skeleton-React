import React from "react";
import Articles from "./components/Articles";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Skeleton Screem</h1>
      </header>
      <section className="content">
        <Articles />
        <Profile />
      </section>
    </div>
  );
}

export default App;
