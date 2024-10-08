import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("ahhhhh");
});

// Not Too sure if this is correct
app.get("/likes", async function (request, response) {
  const likesData = await db.query(`SELECT * FROM likes WHERE game_id = $1`, [
    request.body.game_id,
  ]);
  response.json(likesData.rows);
});

app.post("/likes", async function (request, response) {
  const game_id = request.body.game_id
  await db.query(`INSERT INTO likes (game_id) VALUES ($1)`, [game_id]);
  response.json("likes POST endpoint")
});

app.get("/games", async function (request, response) {
  const data = await db.query(`SELECT * FROM games`);
  response.json(data.rows);
});

app.post("/games", async function (request, response) {
  const name = request.body.name;
  const creator = request.body.creator;
  const rating = request.body.rating;
  await db.query(
    `INSERT INTO games (name, creator, rating) VALUES ($1, $2, $3)`,
    [name, creator, rating]
  );
  response.json("games POST endpoint");
});

app.listen(8080, () => console.log("Server is running on 8080"));
