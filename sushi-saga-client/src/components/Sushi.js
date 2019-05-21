import React, { Fragment } from 'react'

class Sushi extends React.Component {


  sushiEatenAlert = () => {
    this.props.handleEatenSushi(this.props.sushi, this.props.sushi.id)


  }
render() {

  return (
    <div className="sushi" key={this.props.sushi.id}>
      <div className="plate"
           onClick={this.sushiEatenAlert}>
        {
          /* Tell me if this sushi has been eaten! */
          this.props.eatenId.includes(this.props.sushi.id)  ? console.log("TRUE") : <img src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
  }
}

export default Sushi
