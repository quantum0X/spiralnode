import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  return (
    <div className="max-w-5xl justify-center m-auto  px-8" >
      <Navbar />
      {/* <Post /> */}
      <Outlet />
    </div>
  );
}

export default App;
