import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Summary from './Summary/Summary.jsx'
import Square from './Square/Square.jsx'

function Board(props) {

  const { board } = props
  
  const ResetGame=()=>{
    window.location.reload(false);
 }

  return (
    <Fragment>
      <div>
      <div id="board" className="mt-4 d-flex flex-wrap">
        {
          board.map((symbol, i) => <Square key={i} index={i} symbol={symbol} />)
          
        }
      </div>
      <button className="btn btn-primary buttn" onClick={()=>ResetGame()}>Reset</button>
      </div>
      <Summary />

    </Fragment>
  )
}

export default connect(({ board }) => ({ board }))(Board)