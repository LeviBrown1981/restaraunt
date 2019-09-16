import React, { Component, } from 'react';
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';
import { Container, } from "semantic-ui-react";

class App extends Component {
  state = { menus: [], };

  componentDidMount() {
    // Menu make a call to our rails server to get Items
  }

  addItem = (name) => {
    // Menu make api call to rails server to add item
    // Menu update state
  }

  updateMenu = (id) => {
    // Menu make api call to update Menu
    // Menu update state
  }

  deleteMenu = (id) => {
    // Menu make api call to delete Menu
    // Menu remove it from state
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <MenuForm addItem={this.addItem} />
        <br />
        <br />
        <MenuList
          menus={this.state.menus}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </Container>
    );
  }
}

export default App;
