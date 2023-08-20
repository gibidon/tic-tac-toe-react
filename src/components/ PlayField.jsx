import fieldStyles from "./PlayField.module.css"
import PropTypes from "prop-types"
import { string } from "prop-types"

export default function PlayField({ value, updateVal }) {
	return (
		<button className={fieldStyles.PlayField} onClick={updateVal}>
			{value}
		</button>
	)
}

PlayField.propTypes = {
	value: string || null,
	updateVal: PropTypes.func.isRequired,
}
