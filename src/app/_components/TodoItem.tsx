import { AiFillDelete } from "react-icons/ai";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";

interface Props {
  id: number;
  complete: boolean;
  title: string;
  handleDelete: (id: number) => void;
  handleComplete: (id: number) => void;
}

const TodoItem = ({
  id,
  complete = false,
  title,
  handleDelete,
  handleComplete,
}: Props) => {
  return (
    <div
      className={`bg-blue-100 hover:bg-blue-300 shadow rounded-4xl h-12 m-2 flex ${
        complete ? "opacity-50" : ""
      }`}
    >
      <div
        className={`p-2 justify-center flex-none hover:cursor-pointer`}
        onClick={() => handleComplete(id)}
      >
        {complete ? (
          <FaRegCircleCheck size={"30"} color="green"></FaRegCircleCheck>
        ) : (
          <FaRegCircle color="gray" size={"30"}></FaRegCircle>
        )}
      </div>
      <div className="py-2 grow">
        <h2 className={`text-xl ${complete ? "line-through" : ""}`}>{title}</h2>
      </div>
      <div className="p-2 mr-1 flex-none">
        <button
          className="hover:cursor-pointer hover:text-red-500"
          onClick={() => handleDelete(id)}
        >
          <AiFillDelete size={"30"} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
