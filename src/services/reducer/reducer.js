import { MAKE_CATEGORY, GET_CATEGORY } from "../Constant"


const intialState = {
    product: {
        isLoaded: false,
        items: [],
        error: null
    },
    catTypeProduct: {
        isLoaded: false,
        items: [],
        error: null,
        start: true
    }
}

export default function Productreducer(state = intialState, action) {
    switch (action.type) {
        case MAKE_CATEGORY:
            return {
                ...state,
                product: action.data
            }
        case GET_CATEGORY:
            return {
                ...state,
                catTypeProduct: action.data
            }
        default:
            return state
    }
}