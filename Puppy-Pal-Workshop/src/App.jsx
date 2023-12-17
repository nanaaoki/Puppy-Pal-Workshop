import { puppyList } from "./data.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  console.log("puppies: ", puppies);

  return (
    <div className="App">
      <div className="grid1">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
              className="puppyList"
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
      <div className="grid2">
        {featuredPup && (
          <div className="featuredPup">
            <h2 className="featuredName">{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
