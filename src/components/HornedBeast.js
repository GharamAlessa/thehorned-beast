import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class HonerdBeast extends React.Component {
  state = { counter: 0 };
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
          src={this.props.img}
          alt={this.props.description}
          title={this.props.title}
        />
        <Card.Body>
          <Card.Title> {this.props.title}</Card.Title>
          <Card.Text>{this.props.describtion}</Card.Text>
          <Card.Text>votes= {this.state.counter}</Card.Text>

          
        </Card.Body>
      </Card>
    );
  }
}
export default HonerdBeast;