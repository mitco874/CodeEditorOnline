import React from 'react';
import ReactDOM from 'react-dom/client';
import { PracticeCodeEditor } from './Components/CodeEditorComponents/PracticeCodeEditor/PracticeCodeEditor';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PracticeCodeEditor/>
  </React.StrictMode>
);
