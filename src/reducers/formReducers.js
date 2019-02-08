import {STEP_NEXT, STEP_PREV} from '../actions'

export default function board(state = [], action) {
    switch (action.type) {
        case STEP_NEXT:
            return {
                step: state.step + 1
            }

        case STEP_PREV:
            return {
                step: state.step - 1
            }

        default:
            return state
    }
}