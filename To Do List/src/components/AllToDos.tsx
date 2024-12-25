interface AllTodosProps {
    tasks: Task[];
    onToggleComplete: (id: string) => void;
    onDelete: (id: string) => void;
  }


const AllTodos : React.FC<AllTodosProps> = ({tasks, onToggleComplete, onDelete}) => {
  return (
  <div>
    {
        
    }
  </div>
);
};
export default AllTodos;
