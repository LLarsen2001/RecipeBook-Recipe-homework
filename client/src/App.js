import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes, Link } from 'react-router-dom'
import AllCrudPage from './AllCrudPage'
import Recipebooks from './RecipeBooks';
import RecipebookForm from './RecipeBooks/RecipebookForm';
import RecipebookList from './RecipeBooks/RecipebookList';
import RecipebookShow from './RecipeBooks/RecipebookShow';






const RoutesMainContanier = () => {
  return (
    <div>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/allCrudPage'>allcrudpage</Link>
        <Link to='/recipebooks'>recipe books</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <p>Home</p>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RoutesMainContanier />} >
          <Route index element={<Home />} />
          <Route path='/allCrudPage' element={<AllCrudPage />} />
          <Route path='recipebooks' element={<Recipebooks />}>
            <Route index element={<RecipebookList />} />
            <Route path='/recipebooks/new' element={<RecipebookForm />} />
            <Route path='/recipebooks/:id/edit' element={<RecipebookForm />} />
            <Route path='/recipebooks/:id' element={<RecipebookShow />} />
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
