import { useState } from "react"
import PlayField from "./components/ PlayField"
import "./App.css"

const App = () => {
	const [fields, updateFields] = useState(Array(9).fill(null))
	const [playerNow, setPlayerNow] = useState(true)

	function checkWinner(fields) {
		const successOptions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]
		for (let i = 0; i < successOptions.length; i++) {
			const [a, b, c] = successOptions[i]
			if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
				return fields[a]
			}
		}
		return null
	}

	function updateValue(index) {
		const winnerNow = checkWinner(fields)
		if (winnerNow) {
			console.log("Winner has already been found! Press the button to start over")
			return
		}
		if (!fields[index]) {
			const newFields = [...fields]
			newFields[index] = playerNow ? "X" : "O"
			setPlayerNow(!playerNow)
			updateFields(newFields)
		}
	}

	const fieldElems = fields.map((el, i) => (
		<PlayField key={i} value={el} updateVal={() => updateValue(i)} />
	))

	let winnerCalculated = checkWinner(fields)

	return (
		<div className="container">
			<div className="status"></div>
			<div>Сейчас ходят: {playerNow ? "Крестики" : "Нолики"}</div>
			<div className="gameBoard">{fieldElems}</div>
			{winnerCalculated && (
				<div>
					Победитель: {winnerCalculated} .Нажмите кнопку чтобы начать заново
				</div>
			)}

			<div>
				<button
					onClick={() => {
						updateFields(Array(9).fill(null))
						setPlayerNow(true)
					}}
				>
					Начать снова
				</button>
			</div>
		</div>
	)
}

export default App
