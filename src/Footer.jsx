import react,{useState} from 'react';
import './RollDice.css'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Footer() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button className="credit-btn"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
         Credit😂
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
          Made with ❤ by Deepanshu Johar
          <br/>
          Inspired By Colt steele's Project
          </div>
        </Collapse>
      </>
    );
  }
  
export default Footer; 