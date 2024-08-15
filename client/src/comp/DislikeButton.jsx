import { useState } from "react";

export default function DislikeButton() {
  const [dislikes, setDislikes] = useState(0);
  return <button className="dislikeBtn" onClick={() => setDislikes(dislikes + 1)}>{dislikes}</button>;
}
