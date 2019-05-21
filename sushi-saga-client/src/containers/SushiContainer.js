import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const renderSushis = (props) => {
  return props.displayedSushis.map(sushi => {
    return <Sushi sushi={sushi} eatenId={props.eatenId} eatenBoolean={props.eatenBoolean} handleEatenSushi={props.handleEatenSushi}/>
  })
}

const SushiContainer = (props) => {

  return (
    <Fragment>
    <div className="belt">
    {
      renderSushis(props)
    }
    <MoreButton  handleMoreSushi={props.handleMoreSushi}/>
    </div>
    </Fragment>
  )
}


export default SushiContainer
