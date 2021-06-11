import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;
  // callback fx
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
    // array with single element, direct hook to rerender component on changes to value of this state
    // if currentCategory changes, component rerenders so change in document.title is visible to user
  }, [currentCategory]);

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
            <a data-testid="about" href="about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* when map over anything in JSX, outermost element must have key attribute */}
          {/* and return only a single JSX element */}
          {categories.map((category) => (
            // SHORT CIRCUIT EXPRESSSION
            // as long as ${currentCategory.name === category.name, navActive will be returned
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              {/* callback fx declaration to selectively render, not auto */}
              <span
                onClick={() => {
                  setCurrentCategory(category);
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
