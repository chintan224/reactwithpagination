import { UserList } from "./components/userlist";
import { Details } from "./components/details";
import PageData from "./PageData";
import ObservableDemo from './components/Myobservable.js';
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {

    return (
        <div className="App">
            <BrowserRouter >
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/userList">User List</Link>
                        <Link className="nav-link" to="/pageData">Page Data</Link>
                        <Link className="nav-link" to="/observable">My Observable</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/userList" element={<UserList/>}></Route>
                    <Route path="/details/:id" element={<Details/>}></Route>
                    <Route path="/pageData" element={<PageData/>}></Route>
                    <Route path="/observable" element={<ObservableDemo/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App;