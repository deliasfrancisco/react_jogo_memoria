import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { toggleModal } from "../../redux/ranking/actions";

const TopNav = props => {
  return (
    <nav className="navbar fixed-top">
      <a className="navbar-logo" href="/">
        <h2>Jogo da Memória</h2>
      </a>
    </nav>
  );
};

const mapStateToProps = ({ ranking }) => {
  return { isOpen: ranking.isOpen };
};

export default connect(
  mapStateToProps,
  { toggleModal }
)(TopNav);
