import React from "react";
import HornedBeasts from "./HornedBeast";
class Main extends React.Component {
  render() {
    let arr = this.props.bests.map(horn => {
      return (
        <HornedBeasts
          title={horn.title}
          description={horn.description}
          image_url={horn.image_url}
          handleClose={this.props.handleClose}
        />
      );
    });
    return <main>{arr}</main>;
  }
}

export default Main;
