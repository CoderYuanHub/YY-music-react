// combineReducers用于合并多个reducer
import { combineReducers } from 'redux-immutable';
import { reducer as RecommendReducer } from '@/pages/discover/c-page/recommend/store';
import { reducer as PlayerReducer } from '@/pages/player/store';
import { reducer as RankingReducer } from '@/pages/discover/c-page/top/store'

const cReducer = combineReducers({
    recommend: RecommendReducer,
    player: PlayerReducer,
    ranking: RankingReducer
})
export default cReducer;