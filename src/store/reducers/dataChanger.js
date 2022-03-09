const initialState = [];
const dataChanger = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_WEATHER_DATA': {
            return action.payload;
        }
        default: return state;
    }
}
export default dataChanger;