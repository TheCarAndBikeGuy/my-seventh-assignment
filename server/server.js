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

app.get("/game", async function (request, response) {
  const data = await db.query(`SELECT * FROM game`);
  response.json(data.rows);
});

app.post("/game", async function (request, response) {
  const name = request.body.name;
  const creator = request.body.creator;
  const rating = request.body.rating;
  await db.query(
    `INSERT INTO game (name, creator, rating) VALUES ($1, $2, $3)`,
    [name, creator, rating]
  );
  response.json("games POST endpoint");
});

app.listen(8080, () => console.log("Server is running on 8080"));
