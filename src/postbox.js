import React from "react";
import Menu from "./menu";

const options = [
  { name: "React", link: "#" },
  { name: "Comment", link: "#" },
  { name: "Boost", link: "#" },
  { name: "Social Share", link: "#" }
];

export default function PostBox(props) {
  const user = props.user;
  const post = props.post;

  return (
    <div>
      <h1>{user}</h1>
      <p>{post}</p>
      <Menu menuOptions={options} className="responses" />
    </div>
  );
}
