import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Friends from './Component/Friends/Friends';
import NotFound from './Component/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import FriendDetail from './Component/FriendDetail/FriendDetail';
import Posts from './Component/Posts/Posts';
import Postdetail from './Component/PostDetail/Postdetail';
import Country from './Component/Country/Country';
import Countrydetail from './Component/Country Detail/Countrydetail';


function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>home</Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friends/friend/:friendid' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postid' element={<Postdetail></Postdetail>}></Route>
        </Route>
        <Route path='/country' element={<Country></Country>}></Route>
        <Route path='country/:countryname' element={<Countrydetail></Countrydetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
