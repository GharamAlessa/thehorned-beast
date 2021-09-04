import React from "react";
import HonerdBeast from "./HornedBeast";
import HonndData from "./assets/HornedBeast.json";
class Main extends React.Component {
  filling() {
    return HonndData.map((animal) => {
      return (
        <HonerdBeast
          img={animal.image_url}
          describtion={animal.description}
          title={animal.title}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <>{this.filling()} </>
      </div>
    );
  }
}
export default Main;
