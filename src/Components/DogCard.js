import React from "react";


class DogCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt="dog pic" src={this.props.dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.clickHandler}>Bark</button>
          {this.state.clicked ? <h2>Bark!</h2> : null}
        </span>
      </div>
    );
  }

}


export default DogCard;
