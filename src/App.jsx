import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";

import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes?limit=10")
        .then((res) => res.json())
      .then ((data) => setQuotes(data.quotes || []))
      .catch(() => setQuotes([]));}, []);

  return (
    <div style={{ padding: 16 }}>
      {quotes.map((q) => (
        <h1 key={q.id} >
          {q.quote}
        </h1>))} </div>
  );
}


export default App
