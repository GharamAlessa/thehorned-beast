import React from "react";
import Form from "react-bootstrap/Form";
import data from "../assets/data.json";

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
  }
  filtered = (event) => {
    let NumHorn = parseInt(event.target.value);
    let FilterData = data.filter((i) => {
      if (i.horns === NumHorn) {
        return NumHorn;
      } else if (NumHorn === 0) {
        return data;
      }
    });
    this.props.Callback(FilterData);
  };

  render() {
    return (
      <div>
        <Form className="selectForm">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Number Of Horns</Form.Label>
            <Form.Control as="select" custom onChange={this.filtered}>
              <option value="0">All</option>
              <option value="1">1</option>
              <option  value="2">2</option>
              <option  value="3">3</option>
              <option  value="100">100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SelectForm;