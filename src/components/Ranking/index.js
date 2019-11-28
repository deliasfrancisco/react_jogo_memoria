import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import { fetchRanking, toggleModal } from "../../redux/ranking/actions";

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: []
    };
  }

  handleCloseModal = () => {
    this.props.toggleModal({ isOpen: false });
  };

  render() {
    const descending = (a, b) => {
      const { score: scoreA } = a;
      const { score: scoreB } = b;

      if (scoreA > scoreB) return 1;
      else if (scoreA < scoreB) return -1;
    };

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.props.toggleModal(false);
        }}
        wrapClassName="modal-right"
        backdrop="static"
      >
      </Modal>
    );
  }
}
const mapStateToProps = ({ ranking }) => {
  return { isOpen: ranking.isOpen, ranking: ranking.ranking };
};

export default connect(
  mapStateToProps,
  { toggleModal, fetchRanking }
)(Ranking);
