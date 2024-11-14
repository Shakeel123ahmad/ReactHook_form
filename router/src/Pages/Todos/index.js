import Navigator from "../../components/NavBar";
import axios from 'axios';
import TodoList from "../../components/TodoList/";
const Todos = () => {
  return ( 

<>
<Navigator/>
<h1 className="text-center my-20">Todos Page</h1>

<TodoList/>
</>

   );
}
 
export default Todos;


