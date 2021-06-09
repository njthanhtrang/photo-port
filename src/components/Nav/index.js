import React from "react";

function Nav() {
  const categories = [
    {
        // key is often parentheses
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  function categorySelected(name) {
      console.log(`${name} clicked`);
  }

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            📸
          </span>
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* when map over anything in JSX, outermost element must have key attribute */}
          {/* and return only a single JSX element */}
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
                {/* callback fx declaration to selectively render, not auto */}
              <span onClick={() => categorySelected(category.name)} >{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
