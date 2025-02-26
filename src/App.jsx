import './App.css'
import brozLogo from './assets/images/broz-logo.jpeg'

function App() {

  return (
    <div className='container'>
      <div className='top-container'>
        <img className="logo bomb-cursor" src={brozLogo} alt='logo'/>
      </div>
      <div>
      <div className='bottom-container'>
        <div className="slider" style={{
          "--height": "50px",
          "--width": "150px",
          "--quantity": "10"
          }}>
          <div className='list'>
            <div className='item rocket-cursor' style={{"--position": 1}}><p>COMING SOON</p></div>
            <div className='item unicorn-cursor' style={{"--position": 2}}><p>COMING SOON</p></div>
            <div className='item rocket-cursor' style={{"--position": 3}}><p>COMING SOON</p></div>
            <div className='item unicorn-cursor' style={{"--position": 4}}><p>COMING SOON</p></div>
            <div className='item rocket-cursor' style={{"--position": 5}}><p>COMING SOON</p></div>
            <div className='item unicorn-cursor' style={{"--position": 6}}><p>COMING SOON</p></div>
            <div className='item rocket-cursor' style={{"--position": 7}}><p>COMING SOON</p></div>
            <div className='item unicorn-cursor' style={{"--position": 8}}><p>COMING SOON</p></div>
            <div className='item rocket-cursor' style={{"--position": 9}}><p>COMING SOON</p></div>
            <div className='item unicorn-cursor' style={{"--position": 10}}><p>COMING SOON</p></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
