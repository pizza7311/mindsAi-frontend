import { AiFillDelete } from "react-icons/ai";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";

interface Props {
  isDone: boolean;
  title: string;
}

const TodoItem = ({ isDone = false, title }: Props) => {
  return (
    <div className="bg-blue-100 shadow rounded-4xl h-12 m-2 flex">
      <div className="p-2 justify-center flex-none hover:cursor-pointer">
        {isDone ? (
          <FaRegCircleCheck size={"30"} color="green"></FaRegCircleCheck>
        ) : (
          <FaRegCircle color="gray" size={"30"}></FaRegCircle>
        )}
      </div>
      <div className="py-2 grow">
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className="p-2 mr-1 flex-none hover:cursor-pointer hover:text-red-500">
        <AiFillDelete size={"30"} />
      </div>
    </div>
  );
};

export default TodoItem;
