import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import reducer from '../reducers/index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export async function createStore () {
    const state = {
        step: 1
    }

    return reduxCreateStore(reducer, state, applyMiddleware(thunk, logger))
}