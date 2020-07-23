import React, { Component } from 'react'

class Botao extends Component{
    render(){
      return(
        <div>
          <button onClick={this.props.actionBtn} > {this.props.butName} </button>
        </div>
      )
    }
  }

export default Botao