import React from "react";

function MenuItem(props) {
  const optionName = props.menuOption.name;
  const optionLink = props.menuOption.link;

  return (
    <li>
      <a href={optionLink}>{optionName}</a>
    </li>
  );
}

export default function Menu(props) {
  const options = [];

  props.menuOptions.forEach(option => {
    options.push(<MenuItem menuOption={option} key={option.name} />);
  });
  return (
    <div className={props.classname}>
      <ul>{options}</ul>
    </div>
  );
}
