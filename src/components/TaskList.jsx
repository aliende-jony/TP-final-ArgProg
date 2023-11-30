import { Checkbox } from "./Checkbox/Checkbox";

const TaskList = ({ list, eliminarTarea }) => {
  return list.map((item, key) => {
    return (
      <div key={key}>
        <Checkbox item={item} eliminarTarea={() => eliminarTarea(key)} />
      </div>
    );
  });
};

export { TaskList };

