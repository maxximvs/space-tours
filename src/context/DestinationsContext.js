import { createContext, useState } from 'react';
import destinationsData from '../data/destinationsData';

const DestinationsContext = createContext();

export const DestinationsProvider = ({ children }) => {
  const [destinations, setDestinations] = useState(destinationsData);

  return (
    <DestinationsContext.Provider
      value={{
        destinations: destinations
      }}
    >
      {children}
    </DestinationsContext.Provider>
  );
};

export default DestinationsContext;
