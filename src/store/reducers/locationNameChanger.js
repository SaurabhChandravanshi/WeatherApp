const initialState = 'New Delhi'

const locationNameChanger = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_LOCATION_NAME': {
            return action.payload;
        }
        default: return state;
    }
}
export default locationNameChanger;