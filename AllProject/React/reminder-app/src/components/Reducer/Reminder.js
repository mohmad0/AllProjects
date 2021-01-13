import { ADD_REMINDER , REMOVE_REMINDER , CLEAR_REMINDER } from '../Types';

import { bake_cookie , read_cookie } from 'sfcookies';

/*
	This For Store Date In Cooke Of Browser
	bake_cookie("reminders" , reminders)

	This For Take Date That Be Stor In Cooke And Add It In State
	state = read_cookie("reminders")
*/


const Reminder = (state = [] , action) => {

	let reminders = null;

	read_cookie("reminders") ? state = read_cookie("reminders") : state = ''

	if (action.type === ADD_REMINDER ) {

		reminders = [...state, {text:action.text, date:action.date , id:Math.random()}]

		bake_cookie("reminders" , reminders)

		console.log("From Reminder" , reminders)

		return reminders

	} else if (action.type === REMOVE_REMINDER) {
		reminders = state.filter(reminder => reminder.id !== action.id)

		bake_cookie("reminders" , reminders)

		console.log("From Reminder" , reminders)

		return reminders

	} else if (action.type === CLEAR_REMINDER) {
		reminders = []

		bake_cookie("reminders" , reminders)

		return reminders
	}
	else{
		return state
	}
}

export default Reminder