import React, { Component } from 'react'




export default class Pic extends Component {
  constructor(props) {

    super(props);
    this.state = {
        start: true,
    }

  }
  
  render() {
    
      return (
            <div onClick={this.props.onClick} className='answer-img-con'>
                <img 
                src={require(`./a-img/${this.props.img}`)} 
                alt='answer' 
                className='answer-img' 
                style={{width:'6rem', height:'6rem' }}/>
                <p className="name"> {this.props.name} </p>
            </div>                 
      )
    }

}



