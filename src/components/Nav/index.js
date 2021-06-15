import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory, contactSelected, setContactSelected } = props;
  // callback fx
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
    // array with single element, direct hook to rerender component on changes to value of this state
    // if currentCategory changes, component rerenders so change in document.title is visible to user
  }, [currentCategory]);

  console.log("category", currentCategory);
  console.log("props", props);
  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            📸
          </span>
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {/* when map over anything in JSX, outermost element must have key attribute */}
          {/* and return only a single JSX element */}
          {categories.map((category) => (
            // SHORT CIRCUIT EXPRESSSION
            // as long as ${currentCategory.name === category.name, navActive will be returned
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && "navActive"
              }`}
              key={category.name}
            >
              {/* callback fx declaration to selectively render, not auto */}
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
