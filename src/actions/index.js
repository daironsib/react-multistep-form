export const STEP_PREV = 'STEP_PREV'
export const STEP_NEXT = 'STEP_NEXT'

export function stepPrev() {
    console.log('stepPrev')
    return (dispatch) => {
        dispatch({type: STEP_PREV})
    }
}

export function stepNext() {
    console.log('stepNext')
    return (dispatch) => {
        dispatch({type: STEP_NEXT})
    }
}