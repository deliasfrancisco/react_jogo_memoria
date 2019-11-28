import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card/index";

class Cards extends Component {
  render() {
    const { cards } = this.props.cards;
    return (
      cards.length > 0 && (
        <ul className="cards-container card">
          {cards.map(card => (
            <Card card={card} />
          ))}
        </ul>
      )
    );
  }
}

const mapStateToProps = ({ cards }) => {
  return { cards };
};

export default connect(
  mapStateToProps,
  {}
)(Cards);
