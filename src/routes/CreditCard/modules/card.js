
export const UPDATE_CC_NUMBER = 'UPDATE_CC_NUMBER'


export const formatCard = (e, dispatch) => {
  var number = e.target.value.replace(/\s+/g, '');

  dispatch({
    type: UPDATE_CC_NUMBER,
    text: number
  });

  if(number) {
    var number = number.match(new RegExp('.{1,4}', 'g')).join("  ");
    e.target.value = number;
  }
}

const ACTION_HANDLERS = {
  [UPDATE_CC_NUMBER]    : (state, action) => {
    var newState = Object.assign({}, state);
    newState.creditCardNumber = action.text;
    console.log('number', newState.creditCardNumber);
    return newState;
  }
}

const initialState = {
  creditCardNumber: ''
};

export default function cardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
