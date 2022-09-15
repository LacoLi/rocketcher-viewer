import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Pages from 'pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mbsaga" element={<Pages.MBSaga />} />
        <Route path="/:username" element={<Pages.Main />} />
      </Routes>
    </div>
  );
}

export default App;
