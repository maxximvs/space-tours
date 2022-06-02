import { createContext, useReducer, useEffect } from 'react';
import destinationsData from '../../data/destinationsData';

import destinationsReducer from './DestinationsReducer';

const DestinationsContext = createContext();

export const DestinationsProvider = ({ children }) => {
  // const [destinations, setDestinations] = useState(destinationsData);
  // const [isDestinationInfoShown, setIsDestinationInfoShown] = useState(false);
  // const [destinationId, setDestinationId] = useState('');

  const initialState = {
    destinations: destinationsData,
    isDestinationInfoShown: false,
    destinationId: ''
  };

  const [state, dispatch] = useReducer(destinationsReducer, initialState);

  useEffect(() => {
    state.destinations.forEach((destination) => {
      if (destination.id === state.destinationId) {
        dispatch({ type: 'SHOW_DESTINATION_INFO', payload: true });
      }
    });
  }, [state.destinationId]);

  const toggleDestinationInfo = () => {
    dispatch({
      type: 'SHOW_DESTINATION_INFO',
      payload: !state.isDestinationInfoShown
    });
  };

  const clickHandler = (id) => {
    toggleDestinationInfo();
    dispatch({ type: 'SET_DESTINATION_ID', payload: id });
  };

  return (
    <DestinationsContext.Provider
      value={{
        destinations: state.destinations,
        isDestinationInfoShown: state.isDestinationInfoShown,
        destinationId: state.destinationId,
        toggleDestinationInfo: toggleDestinationInfo,
        clickHandler: clickHandler
      }}
    >
      {children}
    </DestinationsContext.Provider>
  );
};

export default DestinationsContext;
