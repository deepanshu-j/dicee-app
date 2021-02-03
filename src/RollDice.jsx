import react,{Component} from 'react';
import Die from './Die'
import './RollDice.css';

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state={
            firstNum:this.genRandNum(),
            secondNum:this.genRandNum(),
            rolling:false
        };
        // this.roll =this.roll.bind(this);
    }
    genRandNum=(min=1,max=6)=>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    roll=()=>{
        this.setState(
            (prevState)=>{
                return {firstNum:this.genRandNum(),secondNum:this.genRandNum(),rolling:true}
            }
        );

        //after .75 sec rolling will be made false
        //simultaneously we want the dices to giggle
        ///so the class holding animation show depend on this same property of state
        ///i.e rolling

        ////And important thing to remember is that if props are changed then the children are rerendered
        ////without any explicit thing like setState

        setTimeout(()=>{
        this.setState({rolling:false});
        } , 750);

    }


    render(){
        return(<div>
            <h1 >
                RollDice
            </h1>

            <h2 className="DieContainer">
              
                <Die num={this.state.firstNum} rolling={this.state.rolling}/>
              
                <Die num={this.state.secondNum} rolling={this.state.rolling}/>

            </h2>
            <h3>
            <button className="roll-dice-btn" onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling?'Rolling...':'Roll Dice!!!'}
            </button>
            </h3>

        </div>);
    }
    
}
export default RollDice;