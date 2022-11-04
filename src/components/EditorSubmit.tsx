import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import errorSVG from '../../public/status/error.svg';
import successSVG from '../../public/status/success.svg';
import lockSVG from '../../public/status/lock.svg';
interface SubmitProps {
  open: boolean;
  toggleOpen: () => void;
  page: 'home' | 'ourbeef';
  content: string;
}

type StatusTitle = 'Success' | 'Error' | 'Enter Your Password';
type StatusMessage = 'Warning: this will overwrite the following page:' | 'The page has been updated.' | string;

export default function EditorSubmit({ open, toggleOpen, page, content }: SubmitProps) {
  const [success, setSuccess] = useState<true | false | null>(null);
  const [errMessage, setErrmessage] = useState<string>('Unknown Error');
  const [statusTitle, setStatusTitle] = useState<StatusTitle>('Enter Your Password');
  const [statusMessage, setStatusMessage] = useState<StatusMessage>('Warning: this will overwrite the following page:');

  const modalClass = open ? ' modal-open' : '';
  const pageText = page === 'home' ? 'Home' : 'Our Beef';

  const passwordInput = useRef<HTMLInputElement>(null);

  async function save() {
    let result;
    try {
      result = await fetch('/api/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page,
          content,
          password: passwordInput.current?.value,
        }),
      });
      result = await result.json();
    } catch (e) {
      result = (e as Error).message;
    }
    if (result.hasOwnProperty('error')) {
      setErrmessage(result.error);
      setSuccess(false);
    } else setSuccess(true);
  }

  function close() {
    toggleOpen();
    setSuccess(null);
  }

  useEffect(() => {
    if (success) {
      setStatusTitle('Success');
      setStatusMessage('The page has been updated.');
    } else if (success === false) {
      setStatusTitle('Error');
      setStatusMessage(errMessage);
    } else {
      setStatusTitle('Enter Your Password');
      setStatusMessage('Warning: this will overwrite the following page:');
    }
  }, [success]);

  const closeBTN = () => (
    <button className='btn btn-secondary text-white' onClick={close}>
      Close
    </button>
  );

  const saveBTN = () => (
    <>
      <input
        placeholder='Password'
        className='input input-bordered w-full max-w-xs'
        type='password'
        autoComplete='none'
        ref={passwordInput}
      />
      <button onClick={toggleOpen} className='btn btn-secondary text-white'>
        Cancel
      </button>
      <button onClick={save} className='btn btn-accent text-white'>
        Save
      </button>
    </>
  );
  const lockIMG = () => <Image src={lockSVG} width='40' height='40' alt='' />;
  const successIMG = () => <Image src={successSVG} width='40' height='40' alt='' />;
  const errorIMG = () => <Image src={errorSVG} width='40' height='40' alt='' />;

  return (
    <>
      <div className={`modal${modalClass}`} id='modal-save'>
        <div className='modal-box'>
          <div>
            {(success === null && lockIMG()) || (success && successIMG()) || (success === false && errorIMG())}
            <h3 className='font-bold text-xl'>{statusTitle}</h3>
          </div>
          <div className='py-4 text-bold rounded-lg p-1 mt-2 text-lg'>
            <p>{statusMessage}</p>
            {success === null ? (
              <>
                <br />
                <p className='font-bold'>{pageText}</p>
              </>
            ) : null}
          </div>
          <div className='modal-action'>{success == null && success !== true ? saveBTN() : closeBTN()}</div>
        </div>
      </div>
    </>
  );
}
