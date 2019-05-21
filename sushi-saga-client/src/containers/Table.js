import React, { Fragment } from 'react'

const placeHolderArray = [1,2,3,4]

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  console.log("TABLE: ", props);



  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
