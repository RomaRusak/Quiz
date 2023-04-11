import moviesInitialState from "../initialStates/moveisInitialState"

const moviesReducer = (initialState = moviesInitialState, action) => {
    switch (action.type) {
        case 'UPDATE_BEST_RESULT_MOVIES':
            return {...initialState, bestResult:  action.bestResult}
        default:
            return initialState
    }
}

export default moviesReducer