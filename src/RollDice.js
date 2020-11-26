import React, {Component} from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component{
  static defaultProps = {
    dieVal: ['one','two','three','four','five','six']
  }
  constructor(props){
    super(props);
    this.state = {
      val1: 'one',
      val2: 'one',
      rolling: false,
      shaking: '',
      sum: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    let die1 = Math.round(Math.random()*6)
    let die2 = Math.round(Math.random()*6)
    let sum = die1 + die2 + 2;
    this.setState({
      val1: this.props.dieVal[die1],
      val2: this.props.dieVal[die2],
      rolling: true,
      shaking: 'shaking',
      cursor: 'progress',
      sum: sum
    })
    //wait one second then set rolling to false
    setTimeout(() => {
      this.setState ({rolling: false, shaking: '', cursor: ''})
    },1000)
  }
  render(){
    return(
      <div className='roll-dice'>
        <div className='dice'>
        <Die val={this.state.val1} shaking={this.state.shaking}/>
        <Die val={this.state.val2} shaking={this.state.shaking}/>
        </div>

        <button id={this.state.cursor} onClick={this.handleClick} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling' : 'Roll Dice'}
        </button>
        <h5 style={{alignSelf: 'center'}}>You rolled: {this.state.sum}</h5>
      </div>
    )
  }
}
export default RollDice