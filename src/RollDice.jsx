import react,{Component} from 'react';
import Footer from './Footer';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Die from './Die'
import './RollDice.css';



class RollDice extends Component{
    constructor(props){
        super(props);
        this.state={
            firstNum:this.genRandNum(),
            secondNum:this.genRandNum(),
            numOfDie:1,
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
    changeNumofDieto1=()=>{
        this.setState(()=>{return {numOfDie:1} });
    }

    
    changeNumofDieto2=()=>{
        this.setState(()=>{return {numOfDie:2} });
    }
    render(){
        return(<div>

            <div className="first-div">
          
                <h1>RollDicee</h1>

                <div  className="drop-down">
                <DropdownButton  id="dropdown-basic-button" title="Number of Dice">
                    
                    
                    {/* problem is how are you gonna do this with the same handling function --
                    maybe we can use the target property in the synthetic object that is passed when 
                    onClick event is fired  
                    */}
                    <Dropdown.Item onClick={this.changeNumofDieto1} href="#/action-1">1 Die</Dropdown.Item>
                    <Dropdown.Item onClick={this.changeNumofDieto2} href="#/action-2">2 Dice</Dropdown.Item>
                </DropdownButton>
                </div>   
         
                
            </div>
            <div className="DieContainer">
              
              { (this.state.numOfDie===2)?
                <>
                <Die num={this.state.firstNum} rolling={this.state.rolling}/>
              
                <Die num={this.state.secondNum} rolling={this.state.rolling}/></>
              :
              <Die num={this.state.firstNum} rolling={this.state.rolling}/>
            }
            </div>
            <h3>
            {/* <button className="roll-dice-btn" onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling?'Rolling...':'Roll Dice!!!'}
            </button> */}

            <Button className="roll-dice-btn" variant="outline-dark" onClick={this.roll} disabled={this.state.rolling} >
            {this.state.rolling?'Rolling...':'Roll Dice!!!'}           
            </Button>
            </h3>
            <Footer className="credit-btn"/>
        </div>);
    }
    
}
export default RollDice;