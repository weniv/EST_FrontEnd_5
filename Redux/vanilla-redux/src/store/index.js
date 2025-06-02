// src/store/index.js
// createStore에 줄이 쳐집니다.  
// 다만 교육용으로는 createStore가 좋다 판단해 사용하도록 하겠습니다.
import { createStore } from 'redux'

// 상수
const PRICE = 17500

// 액션 타입
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// 액션 생성자
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

// 초기 상태
const initialState = {
  count: 0,
  unitPrice: PRICE,
  totalPrice: 0
}

// Reducer
function counterReducer(state = initialState, action) {
  console.log('🔄 Reducer 호출:', action.type, state)
  
  switch (action.type) {
    case INCREMENT:
      const newCountInc = state.count + 1
      return {
        ...state,
        count: newCountInc,
        totalPrice: newCountInc * state.unitPrice
      }
    
    case DECREMENT:
      const newCountDec = Math.max(0, state.count - 1)
      return {
        ...state,
        count: newCountDec,
        totalPrice: newCountDec * state.unitPrice
      }
    
    default:
      return state
  }
}

// Store 생성
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store