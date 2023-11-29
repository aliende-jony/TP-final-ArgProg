import { Checkbox } from "./Checkbox/Checkbox";

const TaskList = ({ list }) => {
  return list.map((item, key) => {
    return (
      <div key={key}>
        <Checkbox item={item}/>
      </div>
    );
  });
};

export { TaskList };
