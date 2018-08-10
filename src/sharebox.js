import React from "react";
import Menu from "./menu";

const options = [
  { name: "Status", link: "#" },
  { name: "Images", link: "#" },
  { name: "Videos", link: "#" },
  { name: "Audio", link: "#" },
  { name: "Files", link: "#" },
  { name: "Link", link: "#" },
  { name: "Polls", link: "#" }
];

export default function PostBox(props) {
  const user = props.user;
  const post = props.post;

  return (
    <div>
      <Menu menuOptions={options} className="postTypes" />
      <form>
        <input type="text" placeholder="Share what's new..." />
        <input type="submit" value="Share" />
      </form>
    </div>
  );
}
