//fetching actions
export const fetchIngredients = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/ingredients')
        .then(r => {
            return r.json()
        })
        .then(json => {
            dispatch({ type: 'GET_INGREDIENTS', payload: json })
        })
    }
}

export const updateSmoothieIngredients = (ingData) => {
    return {
        type: 'ADD_TO_SMOOTHIE', 
        payload: ingData
    }
}