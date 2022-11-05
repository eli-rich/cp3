import { useState, useReducer, useEffect } from 'react';
import dynamic from 'next/dynamic';
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false });
import { marked } from 'marked';
import EditorSubmit from '../components/EditorSubmit';
import NavBar from '../components/layout/NavBar';

import 'react-markdown-editor-lite/lib/index.css';

export default function Editor() {
  const [value, setValue] = useState('# Welcome to Markdown!\n*This* is **how** ~you~ use it.');
  const [open, toggleOpen] = useReducer((open) => !open, false);
  const [page, setPage] = useState<'home' | 'ourbeef'>('home');
  const [obmd, setOBMD] = useState('');
  const [hmd, setHMD] = useState('');

  useEffect(() => {
    fetch('/api/latest?page=home')
      .then((res) => res.json())
      .then((json) => setHMD(json.data))
      .catch(console.error);
    fetch('/api/latest?page=ourbeef')
      .then((res) => res.json())
      .then((json) => setOBMD(json.data))
      .catch(console.error);
  }, []);

  function saveHome() {
    setPage('home');
    return save('Home');
  }
  function saveOurBeef() {
    setPage('ourbeef');
    return save('Our Beef');
  }
  async function save(page: string) {
    toggleOpen();
    // const newMD = document.querySelector('textarea')?.value;
  }
  function handleEditorChange({ html, text }: { html: string; text: string }) {
    setValue(text);
  }

  return (
    <>
      <EditorSubmit open={open} toggleOpen={toggleOpen} page={page} content={value} />
      <NavBar />
      <div className='translate-y-20' id='editorContainer'>
        <div className='grid grid-rows-2 grid-cols-3 grid-flow-col mb-3 mt-2 w-3/4 md:w-1/2 lg:w-1/4 place-content-start items-start gap-y-1 gap-x-4'>
          <h1 className='text-xl justify-self-start mr-5 mx-auto'>Load: </h1>
          <h1 className='text-xl justify-self-start mr-5 mx-auto'>Save: </h1>
          <button
            onClick={() => {
              setValue(hmd);
            }}
            className='btn btn-primary btn-sm text-white w-24'
          >
            Home
          </button>
          <button onClick={saveHome} className='btn btn-success btn-sm text-white w-24'>
            SAVE HOME
          </button>
          <button
            onClick={() => {
              setValue(obmd);
            }}
            className='btn btn-primary btn-sm text-white w-24'
          >
            Our Beef
          </button>
          <button onClick={saveOurBeef} className='btn btn-success btn-sm text-white w-24'>
            SAVE OUR BEEF
          </button>
        </div>
        <div className='h-full'>
          <MdEditor
            style={{ height: '100%' }}
            value={value}
            view={{ menu: true, md: true, html: false }}
            canView={{ menu: true, md: true, html: true, fullScreen: false, hideMenu: true, both: false }}
            renderHTML={(text) => marked.parse(text)}
            onChange={handleEditorChange}
          />
        </div>
      </div>
    </>
  );
}
