import React from 'react';

export default props => {
  return (
    <div>
      <h1>Im aheader</h1>
      {props.children}
      <h1>Im afooter</h1>
    </div>
  );
};
