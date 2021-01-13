const initState = {
	count:0
}

const Reducer = (state = initState , action) => {
	if (action.type === 'INCRESE') {
		return{
			count:state.count + 1
		}
	}else if (action.type === "DESCRESE") {
		return{
			count: state.count - 1
		}
	}
	return state;
}

export default Reducer