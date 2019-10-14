import { throttle } from 'lodash'

// loads the state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

//saves the state to localStorage
export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log('save state err ', err)
  }
}

//sync local storage with redux store
//throttle to at most 1 timer per sec
export const syncStoreLocal = (store: any) => {
  store.subscribe(
    throttle(() => {
      saveState({
        state: store.getState()
      })
    }, 1000)
  )
}
