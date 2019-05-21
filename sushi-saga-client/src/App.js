import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    displayedSushis: [],
    eatenSushi: [],
    money: 100,
    eatenBoolean: false,
    eatenId: []
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({sushis: data, displayedSushis: data.slice(0, 4)}))
  }

  handleMoreSushi = () => {
    const indexA = this.state.displayedSushis[this.state.displayedSushis.length - 1].id
    const indexB = indexA + 4
    const newSushis = this.renderFourNewSushi(indexA, indexB)
    this.setState( { displayedSushis: newSushis } )
  }

  renderFourNewSushi = (indexA, indexB) => {
    return this.state.sushis.slice(indexA, indexB)
  }

  handleEatenSushi = (sushi, id) => {
    const newDisplay = this.state.displayedSushis.filter(s => s.id !== sushi.id);
    this.handleBrokeCustomer(sushi, id)

  }

  setEatenSushiState = (sushi, id) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      money: this.state.money - sushi.price,
      eatenBoolean: !this.state.eatenBoolean,
      eatenId: [...this.state.eatenId, id]
    } )
  }

  handleBrokeCustomer = (sushi,id) => {
    this.state.money > sushi.price ? this.setEatenSushiState(sushi,id) : alert("Nope")
  }


  render() {
    console.log("EATEN_IDS: ", this.state.eatenId);
    // console.log("EATEN: ", this.state.eatenSushi);
    return (
      <div className="app">
      <SushiContainer
      handleMoreSushi={this.handleMoreSushi}
      displayedSushis={this.state.displayedSushis}
      handleEatenSushi={this.handleEatenSushi}
      eatenBoolean={this.state.eatenBoolean}
      eatenId={this.state.eatenId}
      money={this.state.money}
      />
      <Table eatenSushi={this.state.eatenSushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;
