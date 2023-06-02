const initialState = {
    counter: 1
}

const counterReducer = (state=initialState, action) => {
    if (action.type == 'INCREASE') {
        return {...state, counter: state.counter+1}
    }
    else if (action.type == 'DECREASE') {
        return {...state, counter: state.counter-1}
    }
    return state
}

export const increaseCounter = () => ({type: "INCREASE"})

export default counterReducer