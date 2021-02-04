import './App.css';

//without this it wont apply styles
import 'bootstrap/dist/css/bootstrap.min.css';

import RollDice from './RollDice';

function App() {
	return (
		<div className="App">
			<RollDice className="rollDiceContainer" />
		</div>
	);
}

export default App;
