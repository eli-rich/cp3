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
  }
  function handleEditorChange({ html, text }: { html: string; text: string }) {
    setValue(text);
  }

  return (
    <>
      <EditorSubmit open={open} toggleOpen={toggleOpen} page={page} content={value} />
      <NavBar />
      <div className='translate-y-20' id='editorContainer'>
        <div className='mb-3 mt-2 grid w-3/4 grid-flow-col grid-cols-3 grid-rows-2 place-content-start items-start gap-x-4 gap-y-1 md:w-1/2 lg:w-1/4'>
          <h1 className='mx-auto mr-5 justify-self-start text-xl'>Load: </h1>
          <h1 className='mx-auto mr-5 justify-self-start text-xl'>Save: </h1>
          <button
            onClick={() => {
              setValue(hmd);
            }}
            className='btn-primary btn-sm btn w-24 text-white'
          >
            Home
          </button>
          <button onClick={saveHome} className='btn-success btn-sm btn w-24 text-white'>
            SAVE HOME
          </button>
          <button
            onClick={() => {
              setValue(obmd);
            }}
            className='btn-primary btn-sm btn w-24 text-white'
          >
            Our Beef
          </button>
          <button onClick={saveOurBeef} className='btn-success btn-sm btn w-24 text-white'>
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
