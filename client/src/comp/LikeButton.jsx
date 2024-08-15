import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return <button className="likeBtn" onClick={() => setLikes(likes + 1)}>{likes}</button>;
}
