import React, { useState } from 'react';

export const FilterContext = React.createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState({});

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
