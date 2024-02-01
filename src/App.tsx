import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Component2, Greeting , Footer} from './components/appcontext.jsx';
import DictionaryApiExample from  './components/word'
export const UserContext = React.createContext();
export const UserLanguage = React.createContext();

export function App() {
  const [user, setUser] = useState('Jesse Hall');
  const [language, setLanguage] = useState('FR');

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option value="FR">Francais</option>
        <option value="EN">English</option>
        <option value="AR">Arabic</option>
      </select>
      <UserContext.Provider value={user}>
        {/* <Component2 /> */}
      </UserContext.Provider>
      <UserLanguage.Provider value={language}>
        <Greeting />
        <Footer />
      </UserLanguage.Provider>
      <DictionaryApiExample/>
    </>
  );
}
