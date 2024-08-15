import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LikeButton from "./comp/LikeButton";
import DislikeButton from "./comp/DislikeButton";
import { ImagesPage } from "./comp/Images";
import { HomePage } from "./comp/HomePage";
import { FactsPage } from "./comp/Facts";

export default function App() {
  const [games, setGames] = useState([]);
  const [form, setForm] = useState({
    name: "",
    creator: "",
    rating: 0,
  });

  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    const response = await fetch("http://localhost:8080/games");
    const data = await response.json();
    setGames(data);
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
    await fetch("http://localhost:8080/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setForm({ name: "", creator: "", rating: 0 });
    getGames();
  }

  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <nav>
            <Link className="home" to="/home">Home</Link> 
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/images" element={<ImagesPage />} />
            <Route path="/facts" element={<FactsPage />} />
          </Routes>
          </nav>
        </div>
      </BrowserRouter>
      <h2>What is your favourite game?</h2>

      <h2>Add Your Favourite Game</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="name"
          name="name"
          placeholder="Name"
          tabIndex={0}
          title="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          className="creator"
          name="creator"
          placeholder="Creator"
          tabIndex={0}
          title="Creator"
          onChange={handleChange}
          value={form.creator}
        />
        <input
          className="rating"
          name="rating"
          placeholder="0"
          tabIndex={0}
          title="Rating Out Of 10"
          type="number"
          onChange={handleChange}
          value={form.rating}
        />
        <button className="submit" tabIndex={0} title="Submit">
          Submit
        </button>
      </form>

      <p>Here Are Your Replies!</p>
      {games.map(function (games) {
        return (
          <h3 className="games" key={games.name}>
            {games.name} - {games.creator} - {games.rating}/10 <LikeButton />
            <DislikeButton />
          </h3>
        );
      })}
    </div>
  );
}
