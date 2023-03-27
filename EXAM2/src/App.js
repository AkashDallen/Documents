
import './App.css';
import { Route,Switch,BrowserRouter} from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' component={Delete} exact></Route>
        <Route path='/addbooks' component={Add} exact></Route>
        <Route path='/desc' component={Description} exact></Route>
        <Route path='/editbooks' component={Edit} exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;