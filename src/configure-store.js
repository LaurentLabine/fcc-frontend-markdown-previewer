import { createStore } from 'redux';
import { markdownReducer } from './previewer/reducer';

export const store = createStore(markdownReducer);
