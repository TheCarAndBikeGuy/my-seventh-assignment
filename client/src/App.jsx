import { useEffect, useState } from "react";

export default function App() {
  const [game, setGame] = useState([]);
  const [form, setForm] = useState({
    name: "",
    creator: "",
    rating: 0,
  });

  useEffect(() => {
    getGame();
  }, []);

  async function getGame() {
    const response = await fetch("http://localhost:8080/game");
    const data = await response.json();
    setGame(data);
  }

  function handleChange(event) {
    console.log("typing happened");
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("form is entered");
    console.log(form);
    await fetch("http://localhost:8080/game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setForm({ name: "", creator: "", rating: 0 });
    getGame();
  }

  return (
    <div>
      <h2>What is your favourite game?</h2>

      <h2>Add Your Favourite Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          tabIndex={0}
          title="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          name="creator"
          placeholder="Creator"
          tabIndex={0}
          title="Creator"
          onChange={handleChange}
          value={form.creator}
        />
        <input
          name="rating"
          placeholder="Rating Out Of 10"
          tabIndex={0}
          title="Rating Out Of 10"
          type="number"
          onChange={handleChange}
          value={form.rating}
        />
        <button className="btn">Submit</button>
      </form>

      <h2>🎮Games🎮</h2>
      <p>Here Are Your Replies!</p>
      {game.map(function (game) {
        return (
          <h3 className="game" key={game.name}>
            {game.name} - {game.creator} - {game.rating}/10
          </h3>
        );
      })}
    </div>
  );
}
