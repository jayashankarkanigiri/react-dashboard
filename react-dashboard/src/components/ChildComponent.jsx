// components/ChildComponent.jsx
import React from 'react';

const ChildComponent = ({ updateParentState }) => {
  // Call updateParentState from some event
  const handleClick = () => {
    updateParentState({ childData: 'Data from Child' });
  };

  return (
    <div>
      <button onClick={handleClick}>Update Parent State</button>
    </div>
  );
};

export default ChildComponent;
