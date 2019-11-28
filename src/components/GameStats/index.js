import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { connect } from "react-redux";

const GameStats = props => {
  const renderStats = ({ description, value }) => {
    return (
      <Card className="col-md-2 box">
        <CardBody className="text-center">
          <p className="card-text font-weight-semibold mb-0">{description}</p>
          <p className="lead text-center color-theme-1">{value}</p>
        </CardBody>
      </Card>
    );
  };

  const renderCorrectPlays = () => {
    const value = props.results.filter(isCorrect => isCorrect).length;
    return renderStats({ description: "Acertos", value });
  };

  const renderWrongPlays = () => {
    const value = props.results.filter(isCorrect => !isCorrect).length;
    return renderStats({ description: "Erros", value });
  };

  const renderAllPlays = () => {
    const value = props.results.length;
    return renderStats({ description: "Total", value });
  };

  return (
    props.results.length > 0 && (
      <div className="game-stats-wrapper">
        {renderCorrectPlays(true)}
        {renderWrongPlays(false)}
        {renderAllPlays()}
      </div>
    )
  );
};

const mapStateToProps = ({ cards }) => {
  const { results } = cards;
  return { results };
};

export default connect(
  mapStateToProps,
  {}
)(GameStats);
