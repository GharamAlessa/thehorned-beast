import React from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.description}</Modal.Body>
          <img className="imgModal" src={this.props.image_url} />
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
