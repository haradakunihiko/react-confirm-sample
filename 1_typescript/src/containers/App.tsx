import * as React from 'react';
import { confirm } from '../components/Confirmation';
import { confirm as confirmComplex } from '../components/ComplexConfirmation';
import { Button } from 'react-bootstrap';

const App = () => {
  const [message, setMessage] = React.useState('');

  const handleOnClick = async () => {
    if (await confirm({confirmation: 'Are your sure?'})) {
      setMessage('yes');
    } else {
      setMessage('no');
    }
  };

  const handleOnClickComplex = () => {
    confirmComplex({ message: 'hello' }).then(
      ({ button, input }) => {
        setMessage('proceed! pressed:' + button + ' input:' + input);
      },
      () => {
        setMessage('cancel!');
      }
    );
  };

  return (
    <div>
      <Button size="lg" onClick={handleOnClick}>
        simple
      </Button>
      <Button size="lg" onClick={handleOnClickComplex}>
        complex
      </Button>
      <div>{message}</div>
    </div>
  );
};

export default App;
