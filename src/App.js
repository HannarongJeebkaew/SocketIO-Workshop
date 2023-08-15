import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Ipping from './conponents/Ping';

; // เชื่อมต่อกับเซิร์ฟเวอร์ Socket.io

function App() {


  return (
    <Ipping></Ipping>
  );
}

export default App;