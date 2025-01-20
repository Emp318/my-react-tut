import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const handleNameChange = () => {
    const names = ['Sarah', 'Adam', 'Jackson', 'Simeon'];
    const int =  Math.floor(Math.random() * names.length);
    return names[int];
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>
          Hello {handleNameChange()}!
        </p>
      </div>
    </>
  )
}

export default App
