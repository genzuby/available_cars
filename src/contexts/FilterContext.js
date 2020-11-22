import React, { useState } from 'react';

export const FilterContext = React.createContext();

export function FilterProvider({ id, children }) {
  const [filter, setFilter] = useState({});

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
