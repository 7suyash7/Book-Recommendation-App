import "./styles.css";
import React from "react";
import booksDB from "./data";

class App extends React.Component {
  state = {
    set: "Action"
  };

  setGenre = (book) => {
    this.setState({ set: book });
  };

  render() {
    return (
      <div className="App">
        <h1>Book Recommendations</h1>
      <p>
          This app will recommend you some good books based on your favourite genre. All these books have been read and selected by me.
        </p>
        <div>
          {Object.keys(booksDB).map((book) => (
            <button onClick={() => this.setGenre(book)}>{book}</button>
          ))}
        </div>

        <hr />
        <div>
          <ul>
            {booksDB[this.state.set].map((item) => (
              <li>
                {item.name}
                <span>{item.review}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
