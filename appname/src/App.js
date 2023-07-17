import logo from './logo.svg';
import './App.css';

function App() {
  const courses=["php","python","Reactjs"]
  return (
 <div classname="app">
  <body>
     {courses.map((item)=><h1>{item}</h1>)}
  </body>
 </div>
  );
}

export default App;
