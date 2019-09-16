import React, { Component, } from 'react';
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';
import { Container, } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = { menus: [], };

  componentDidMount() {
    // Menu make a call to our rails server to get Items
      axios.get("/api/menus")
        .then( res => {
          this.setState({ menus: res.data, });
        })
        .catch( err => {
          console.log(err);
        })
  }

  addItem = (name) => {
    // Menu make api call to rails server to add item
    // Menu update state
    axios.post('/api/menus', { name })
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: [...menus, res.data], });
    })
  }

  updateMenu = (id) => {
    // Menu make api call to update Menu
    // Menu update state
    axios.put(`/api/menus/${id}`)
    .then( res => {
      const menus = this.state.menus.map( t => {
      if (t.id === id)
        return res.data;
      return t;
    });
    this.setState({ menus, });
  })
  }

  deleteMenu = (id) => {
    // Menu make api call to delete Menu
    // Menu remove it from state
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: menus.filter(m => m.id !== id), })
    })
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <MenuForm addItem={this.addItem} />
        <br />
        <br />
        <MenuList
          Menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
      </Container>
    );
  }
}

export default App;
