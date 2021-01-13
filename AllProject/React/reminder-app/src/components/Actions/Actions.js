import { ADD_REMINDER , REMOVE_REMINDER , CLEAR_REMINDER } from '../Types';

export const Add_reminder = (text, date) => {
	const action = {
		type: ADD_REMINDER,
		text,
		date
	}

	console.log("Add" , action)
	return action
}

export const Remove_reminder = (id) => {
	const action = {
		type: REMOVE_REMINDER,
		id
	}

	console.log("Remove" , action)
	return action
}

export const Clear_reminder = () => {
	const action = {
		type: CLEAR_REMINDER
	}

	return action
}