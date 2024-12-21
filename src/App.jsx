import ToDoList from "./Components/ToDoList";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" component={ToDoList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Routes>
    </div>
  );
};

export default App;
