
import { Formtodo } from './FormTodo';
import { TaskList } from './TaskList';
function Container () {
  return (
    <div className="Container">
       Soy el container!
      <Formtodo/>
      <TaskList/>
    </div>
  )
};

export {Container};
