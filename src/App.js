import React, { PureComponent } from "react";
import Header from "./Dashboard/Header/Header";
import SearchBar from "./Dashboard/Searchbar/SearchBar";
import EmojiResult from "./Dashboard/Emoji/EmojiResult";
import Filter from "./Dashboard/Emoji/Filter";

export class App extends PureComponent {
  state = {
    filteredEmojis: Filter("", 20),
  };

  handleSearchChange = (event) => {
    this.setState({
      filteredEmojis: Filter(event.target.value, 20),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar handleSearchChange={this.handleSearchChange} />
        <EmojiResult emojisData={this.state.filteredEmojis} />
      </div>
    );
  }
}

export default App;
