// import React in every component file
import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import "./App.css";

// JSX
function App() {
  // initial value of contactSelected is false, prevent ContactForm from showing initially
  // Gallery and About displays instead
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
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
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {/* 
          if(!contactSelected) {
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </> 
          } else {
              <ContactForm></ContactForm>
          } */}
          {/* ternary operator, if contactSelected false, show Gallery and About */}
          {!contactSelected ? (
            // React fragments, <React.Fragment></React.Fragment>
            <>
              {/* category selected by user, pass from Gallery component */}
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
