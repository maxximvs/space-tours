import { createContext, useState, useEffect } from 'react';
import destinationsData from '../data/destinationsData';

const DestinationsContext = createContext();

export const DestinationsProvider = ({ children }) => {
  const [destinations, setDestinations] = useState(destinationsData);
  const [isDestinationInfoShown, setIsDestinationInfoShown] = useState(false);
  const [destinationId, setDestinationId] = useState('');

  useEffect(() => {
    destinations.forEach((destination) => {
      if (destination.id === destinationId) {
        setIsDestinationInfoShown(true);
      }
    });
  }, [destinationId]);

  const toggleDestinationInfo = () => {
    setIsDestinationInfoShown((prevState) => !prevState);
  };

  const clickHandler = (id) => {
    toggleDestinationInfo();
    setDestinationId(id);
  };

  return (
    <DestinationsContext.Provider
      value={{
        destinations: destinations,
        isDestinationInfoShown: isDestinationInfoShown,
        setIsDestinationInfoShown: setIsDestinationInfoShown,
        destinationId: destinationId,
        setDestinationId: setDestinationId,
        toggleDestinationInfo: toggleDestinationInfo,
        clickHandler: clickHandler
      }}
    >
      {children}
    </DestinationsContext.Provider>
  );
};

export default DestinationsContext;
