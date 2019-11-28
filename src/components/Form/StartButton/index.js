import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame } from "../../../redux/cards/actions";

const StartButton = props => {
  const { className, startGame, value } = props;

  const handleStartGame = e => {
    e.preventDefault();
    startGame();
  };

  return (
    <div className="col-md-1 text-centered start-button">
      <button className={className} onClick={handleStartGame}>
        {props.cards.length > 0 ? `Re${value.toLowerCase()}` : value}
      </button>
    </div>
  );
};

const mapStateToProps = ({ cards }) => {
  return { cards: cards.cards };
};

export default connect(
  mapStateToProps,
  { startGame }
)(StartButton);
