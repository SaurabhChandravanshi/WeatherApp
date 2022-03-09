const initialState = { lat: '28.6139', lon: '77.2090' }

const locationChanger = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_LOCATION': {
            return action.payload;
        }
        default: return state;
    }
}

export default locationChanger