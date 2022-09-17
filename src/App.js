import './styles/global.css'
import Home from './sections/Home';
import Features from './sections/Features'
function App() {
  return (
    <>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
    </head>
    <div >
    <Home />  
    <Features />
  </div></>
  );
}

export default App;
