import  * as React from 'react';

import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Modal from 'react-bootstrap/Modal'
import { confirmable, ConfirmDialog, ContextAwareConfirmation } from 'react-confirm';
import { ThemeContext } from '../context/context';

export interface Props {
  message: string
}

export interface Res {
  button: number,
  input: string,
}

const ComplexConfirmation: ConfirmDialog<Props, Res> = ({

  show,
  proceed,
  dismiss,
  cancel,
  message,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleOnClick = (index: number) => {
    return () => {
      proceed({
        button: index,
        input: inputRef.current && inputRef.current.value || '',
      });
    }
  }

  return (
    <ThemeContext.Consumer>
      {
        (theme) => (
          <div className="static-modal">
            <Modal animation={false} show={show} onHide={dismiss}>
              <Modal.Header>
                <Modal.Title>theme: {theme}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {message}
              </Modal.Body>
              <Modal.Footer>
                <FormControl type="text" ref={inputRef} />
                <Button onClick={cancel}>Cancel</Button>
                <Button className='button-l' onClick={handleOnClick(1)}>1st</Button>
                <Button className='button-l' onClick={handleOnClick(2)}>2nd</Button>
                <Button className='button-l' onClick={handleOnClick(3)}>3rd</Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
      }
    </ThemeContext.Consumer>
  )
}


export default ContextAwareConfirmation.createConfirmation(confirmable(ComplexConfirmation));
