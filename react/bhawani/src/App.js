import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./store";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./components/posts/Index";

function App() {
  return (
    <Provider store={Store}>
      <div style={{ height: "10vh" }}>
        <Header />
      </div>
      <div style={{ height: "90vh" }}>
        <Index />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
