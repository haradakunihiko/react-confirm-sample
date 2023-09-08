import * as React from 'react';
import { confirm, confirmComplex } from '../util/confirm';
import { Alert } from 'react-bootstrap';

const handleOnClick = async () => {
  if (await confirm('Are your sure?')) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

const handleOnClickComplex = () => {
  confirmComplex({ message: 'hello' }).then(({ button, input }) => {
    console.log('proceed! pressed:' + button + ' input:' + input);
  }, () => {
    console.log('cancel!');
  });
}

const App = () => {
  return (
    <div>
      <Alert variant="primary" transition={false} className="h1">
        Please note that interactions with the sample dialogs output details to the console.<br />
        Review the console output while interacting with the dialogs to observe the behavior and outcomes
      </Alert>
      <button onClick={handleOnClick}>simple</button>
      <button onClick={handleOnClickComplex}>complex</button>
    </div>
  );
}

export default App;
