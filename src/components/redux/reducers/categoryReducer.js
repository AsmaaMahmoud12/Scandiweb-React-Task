import { CATEGORIES } from "../constants";

const initState = {
    categories: 'all',
}

const categoryReducer = (state = initState, action) => {
    switch (action.type){
        case CATEGORIES:
            return{
              ...state,
              categories:  Object.values(action.payload)
            }
          default:
            return state
    }
}

export default categoryReducer