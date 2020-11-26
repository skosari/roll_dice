import React, {Component} from 'react'
import './Die.css'

class Die extends Component{
  constructor(props){
    super(props);
  }
  static defaultProps = {
    val: 'one'
  }  
  render(){
    
    return(
      <div className={`Die ${this.props.shaking}`}>
        <i className={`fas fa-dice-${this.props.val}`}></i>
      </div>
    )
  }
}
export default Die