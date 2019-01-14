import React, { Component } from "react";

class PokeList extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <ul>
        {pokemon.map(item => {
          return (
            <li key={item.id}>
              <img src={item.url} alt="" />
              <h2>{item.name}</h2>
              <ul>
                {item.types.map((type, i) => {
                  return <li key={i}>{type}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PokeList;