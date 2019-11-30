import * as React from 'react';
import * as ReactDOM from 'react-dom';
import YourComponent from '../src/component/YourComponent';

const Demo = () => {
  /* tslint:disable */
  const compProps = {
    name: 'jc',
  }
  return (
    <div>
      <YourComponent {...compProps} />
    </div>
  );
}

ReactDOM.render(<Demo />, document.getElementById('App'));