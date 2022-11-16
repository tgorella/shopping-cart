import React, {useState} from 'react'
import Counter from './counter'

const CountersList = () => {
	const initialState = [
		{id: 1, value: 0, name: 'Ненужная вещь'}, 
		{id: 2, value: 4, name: 'Ложка'}, 
		{id: 3, value: 10, name: 'Вилка'},
		{id: 4, value: 0, name: 'Тарелка'},
		{id: 5, value: 0, name: 'Набор минималиста'},
	]

	const [counters, setCounters] = useState(initialState);
	const handleDelete = (id) => {
	setCounters(counters.filter(counter => counter.id !== id))
	}

	const handleReset = () => {
	setCounters(initialState)
	}

	const handleIncrement = (id) => {
		const upadatedCounters = counters.map((counter) =>	{
			if (counter.id === id) {
				counter.value += 1
			}
			return counter
		})
		setCounters(upadatedCounters)
	}

	const handleDecrement = (id) => {
		const upadatedCounters = counters.map((counter) =>	{
			if (counter.id === id && counter.value > 0) {
				counter.value -= 1
			}
			return counter
		})
		setCounters(upadatedCounters)
	}

	return (
	<>
	{counters.map(count => <Counter 
	key={count.id} 
	{...count}
	onDelete={handleDelete}
	onIncrement={handleIncrement}
	onDecrement={handleDecrement} />)}
	<button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
	</>
		)
}

export default CountersList