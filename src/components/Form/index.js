import React, { Component } from "react";
import { connect } from "react-redux";
import StartButton from "./StartButton";

const PlayForm = props => {
  const { startGame } = props;

  const handleStartGame = () => {
    startGame();
  };

  return (
    <div className="container">
      <div className="row">
        <StartButton
          className="btn btn-primary"
          onClick={handleStartGame}
          value="Iniciar"
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ form }) => {
  return { };
};

export default connect(
  mapStateToProps,
  { }
)(PlayForm);
