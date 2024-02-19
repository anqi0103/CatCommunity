import { useState, useEffect } from "react";
import "./App.css";

type Cat = {
  id: number;
  image_url: string;
  breed: string;
  name: string;
  age: string;
  location: string;
  status: string;
  information: string;
};

function App() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/cats")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCats(data);
      });
  }, []);

  return (
    <>
      <h1>Cat Community</h1>
      <div className="card">
        {cats.map((cat) => (
          <div key={cat.id}>
            <h2>{cat.name}</h2>
            <p>{cat.information}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
