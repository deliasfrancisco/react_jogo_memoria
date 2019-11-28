import React, { Component } from "react";
import { connect } from "react-redux";
import { handlePlay } from "./../../../redux/cards/actions";
import AOS from "aos";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AOS.init({
      duration: 700
    });
  }

  render() {
    return (
      <li
        key={this.props.card.cardNumber + 4165}
        className="card"
        onClick={() => {
          this.props.handlePlay(this.props);
        }}
      >
        {!this.props.card.visible && <div className="card-background" />}

        {this.props.card.visible && (
          <h1 className="card-content" data-aos="flip-left">
            {this.props.card.cardNumber}
          </h1>
        )}
      </li>
    );
  }
}

const mapStateToProps = ({ form }) => {
  return { };
};

export default connect(
  mapStateToProps,
  { handlePlay }
)(Card);
