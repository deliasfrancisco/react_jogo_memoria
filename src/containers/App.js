import React, { Component } from "react";
import { connect } from "react-redux";
import NotificationContainer from "./../components/Common/ReactNotifications/NotificationContainer";
import PlayForm from "../components/Form";
import Cards from "./../components/Cards/index";
import GameStats from "./../components/GameStats/index";
import { fetchRanking } from "../redux/ranking/actions";
import TopNav from "../components/TopNav";
import Ranking from "../components/Ranking";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchRanking();
  };

  render() {
    return (
      <div className="container">
        <TopNav />
        <NotificationContainer />
        <PlayForm />
        <Cards />
        <GameStats />
        <Ranking />
      </div>
    );
  }
}

const mapStateToProps = ({ cards }) => {
  const { results } = cards;
  return { results };
};

export default connect(
  mapStateToProps,
  { fetchRanking }
)(App);
