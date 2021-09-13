import React from "react";
import HornedBeasts from "./HornedBeast";
import data from "../assets/data.json";
import SelectForm from "./SelectForm";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newData: data,
    };
  }
  handle = (item) => {
    this.setState({ newdata: item });
    console.log("sam", item);
  };

  render() {
    let arr = this.state.newData.map((horn) => {
      return (
        <HornedBeasts
          title={horn.title}
          description={horn.description}
          image_url={horn.image_url}
          handleClose={this.props.handleClose}
        />
      );
    });
    return (
      <main>
        <SelectForm Callback={this.handle} />
        {arr}
      </main>
    );
  }
}

export default Main;
