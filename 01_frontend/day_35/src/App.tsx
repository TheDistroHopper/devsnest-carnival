import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfiles } from './actions';
import './App.css';
import NavBar from './Componenst/navabar/navbar';
import Thread from './Componenst/thread/thread';

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() =>{ dispatch(fetchProfiles());}, [])
  return (<>
      <div className="app">
        <NavBar/>
        <Thread/>
      </div>
  </>
  );
}

export default App;

