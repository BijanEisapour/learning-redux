import { FETCH_POSTS, ADD_POST } from '../actions/types';

const initialState = {
	items: [],
	item: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				items: action.payload
			};
		case ADD_POST:
			return {
				...state,
				items: [ action.payload, ...state.items ]
			};
		default:
			return state;
	}
}
