interface TodoListProps {
  title: string;
  done: boolean;
}

const TodoList = ({ title, done }: TodoListProps) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default TodoList;
