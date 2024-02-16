import React from "react";
import { useState, useEffect } from "react";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    if (nickname.trim() && newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), nickname, text: newComment },
      ]);
      setNewComment("");
      setNickname("");
    } else alert("Please enter both nickname and comment");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>Add a comment</button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.nickname}</strong>
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
