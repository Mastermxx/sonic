import React from 'react';
import { useSearchParams } from 'react-router-dom';

interface FilterPanelProps {
    maxLoadOptions: string[];
    drawersOptions: string[];
  }

const FilterPanel: React.FC<FilterPanelProps> = ({ maxLoadOptions, drawersOptions }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedMaxLoad = searchParams.getAll("maxLoad");
  const selectedDrawers = searchParams.getAll("drawers");

  const updateSearchParams = (key: string, value: string) => {
    const currentValues = searchParams.getAll(key);
    if (currentValues.includes(value)) {
      searchParams.delete(key);
      currentValues.filter((v) => v !== value).forEach((v) => searchParams.append(key, v));
    } else {
      searchParams.append(key, value);
    }
    setSearchParams(searchParams);
  };

  const handleFilterChange = (filterType: 'maxLoad' | 'drawers', value: string) => {
    updateSearchParams(filterType, value);
  };

  return (
    <div className="filter flex flex-col gap-2">
      <h3>Filter by Max Load</h3>
      {maxLoadOptions.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedMaxLoad.includes(option)}
            onChange={() => handleFilterChange('maxLoad', option)}
          />
          {option}
        </label>
      ))}

      <h3>Filter by Number of Drawers</h3>
      {drawersOptions.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedDrawers.includes(option)}
            onChange={() => handleFilterChange('drawers', option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default FilterPanel;
