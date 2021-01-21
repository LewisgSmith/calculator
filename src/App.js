import logo from './logo.svg';
import './App.css';
import CalcButton from './calcButton.js';
import CalcResult from './calcResult.js';
var result = 0;

function testFunction(){
  console.log("reacts")
}

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}



function Calculator() {
  return (
    <div className="Calculator">
      <CalcResult value = {result}/>
      <table>
      <tbody>
        <tr>
      <th><CalcButton value = {1} onClick={testFunction}/></th>
      <th><CalcButton value = {2}/></th>
      <th><CalcButton value = {3}/></th>
        </tr>
        <tr>
      <th><CalcButton value = {4}/></th>
      <th><CalcButton value = {5}/></th>
      <th><CalcButton value = {6}/></th>
        </tr>
        <tr>
      <th><CalcButton value = {7}/></th>
      <th><CalcButton value = {8}/></th>
      <th><CalcButton value = {9}/></th>
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default App;
