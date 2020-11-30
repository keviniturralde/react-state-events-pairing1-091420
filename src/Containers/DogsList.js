import React, { Component } from "react";
import DogCard from '../Components/DogCard'
import {apiResponse} from '../api'


class DogsList extends Component {

  renderDogs = () => {
    return apiResponse.map(dogObj=> <DogCard key={dogObj.id} dog={dogObj}/>)
  }

  render() {
    return <div className="list">
      {this.renderDogs()}
      </div>;
  }
}

export default DogsList;
