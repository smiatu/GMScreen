import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home/Home";
import Calendar from "./components/Calendar/Calendar";
import Links from "./components/Links/Links"
import Roller from "./components/Roller/Roller";

import './App.scss';

function App() {
  return (
    <div className="App">
      <nav>
        <div>navbar placeholder</div>
        <Link to="/">Home</Link>
        <Link to="calendar">Calendar</Link>
        <Link to="links">Links</Link>
        <Link to="roller">Roller</Link>
      </nav>
      <header className="App-header">
        <h1>Ekran Mistrza Gry</h1>
      </header>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="calendar" element={ <Calendar/> } />
        <Route path="links" element={ <Links/> } />
        <Route path="roller" element={ <Roller/> } />
      </Routes>
      <footer>
        Magia była kiedyś nielegalna, a teraz jest legalna. Spaczeń jest nielegalny, ale może kiedyś też stanie się legalny. Obecnie nie może być używany, chyba że w służbie cesarskiej, cokolwiek to znaczy. Prawo stosuje się jedynie po to, aby przynosiło korzyść prawodawcom. Jeżeli istnieje prawo, które czegoś zakazuje, zawsze zadaję sobie pytanie: "Kto je uchwalił?" Nigdy nie myl prawa ze sprawiedliwością, to zupełnie odrębne sprawy.
        David Ferring, Zrodzony z cienia
      </footer>
    </div>
  );
}

export default App;
