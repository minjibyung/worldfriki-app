import React, { useState, useEffect } from 'react'
import { Series2 } from './components/pages/series/Series2'

function App() {

  return (
    <>
    <Routes>
     <Route path="/Series2" element={<Series2 />} />
     </Routes>
    </>
  );
}

export default App