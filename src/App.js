import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import { Route , Routes } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Profile from './components/profile';
import Content from './components/content';
import { useState , createContext } from 'react';

export const UsernameContext = createContext();

function App() {
  const platformName = `"Platform Name"`;
  const [username , setUsername] = useState("");

  const handleUsername = (newUsername) => {
    setUsername(newUsername);
  }
  return (
    <div className="App">
      <UsernameContext.Provider value={{username, setUsername}}>
        <NavigationBar platformName={platformName}/>
        <Routes>
          <Route path="/learning/" element={<Home platformName={platformName} username={username}/>}/>
          <Route path="/learning/about" element={<About platformName = {platformName}/>}/>
          <Route path="/learning/profile" element={<Profile handleUsername={handleUsername}/>} />
          <Route path="/learning/content" element={<Content />} />
        </Routes>
      </UsernameContext.Provider>
    </div>
  );
}

export default App;
