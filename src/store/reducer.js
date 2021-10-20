// combineReducers用于合并多个reducer
import { combineReducers } from 'redux-immutable';
import { reducer as RecommendReducer } from '@/pages/discover/c-page/recommend/store'

const cReducer = combineReducers({
    recommend: RecommendReducer
})
export default cReducer;