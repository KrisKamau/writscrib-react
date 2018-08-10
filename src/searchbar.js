import React from "react";

export default function SearchBar(props) {
  return (
    <div className="search">
      <form>
        <input type="text" placeholder="Search anything!" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
