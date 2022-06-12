import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Welcome from "./components/Welcome";

export const CredentialContext = React.createContext();

const App = () => {
  const credentialState = React.useState(null);
  return (
    <CredentialContext.Provider value={credentialState}>
      <div class="bg-slate-50">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>

        <Footer />
      </div>
    </CredentialContext.Provider>
  );
};

export default App;
