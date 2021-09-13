import React from "react";
import HornedBeasts from "./HornedBeasts";
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

    return (
      
        <main>
          {
            this.propsHornedData.map((selectedBeastItem) => {
              return (
                <HornedBeasts
                  imageUrl={selectedBeastItem.image_url}
                  title={selectedBeastItem.title}
                  description={selectedBeastItem.description}
                  keyword={selectedBeastItem.keyword}
                  horns={selectedBeastItem.horns}
                  displayModal={this.props.displayModal}
                  select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
                />
              
             ) })
          }

        


export default Main;
