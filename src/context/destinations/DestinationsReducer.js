const destinationsReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_DESTINATION_INFO':
      return {
        ...state,
        isDestinationInfoShown: action.payload
      };
    case 'SET_DESTINATION_ID':
      return {
        ...state,
        destinationId: action.payload
      };
    default:
      return state;
  }
};

export default destinationsReducer;
