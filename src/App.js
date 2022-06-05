import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './app/actions';

function App() {
	// const { counter, isLogged } = useSelector((state) => state);
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<h1>Hello, World</h1>
			<button onClick={() => dispatch(increment(5))}>+</button>
			<h2>The count is: {counter}</h2>
			<button onClick={() => dispatch(decrement(5))}>-</button>
			{isLogged ? <p>yes</p> : <p>No</p>}
		</div>
	);
}

export default App;
