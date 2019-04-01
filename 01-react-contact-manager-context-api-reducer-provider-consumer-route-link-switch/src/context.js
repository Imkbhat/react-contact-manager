import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Kiran Bhat",
        email: "kbs@gmail.com",
        phone: "9745XXXXXXX"
      },
      {
        id: 2,
        name: "Alia Bhat",
        email: "alia@gmail.com",
        phone: "9745XXXXXXX"
      },
      {
        id: 3,
        name: "Nandini Bhat",
        email: "nandini@gmail.com",
        phone: "9745XXXXXXX"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
