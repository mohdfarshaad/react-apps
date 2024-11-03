import { useState } from "react";
import { Button, Card, Input } from "./components";
import CheckBox from "./components/CheckBox";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (newTodo?.trim()) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo("");
    }
  };

  const markTodoAsDone = (todoToRemove) => {
    try {
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo !== todoToRemove)
      );
    } catch (error) {
      console.error("Error marking todo as done:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white h-screen w-full bg-black/90">
      <h1 className="text-3xl font-semibold mb-2">Todo</h1>
      <div className="flex flex-col md:flex-row">
        <Card>
          <Input
            type="text"
            label="Add Todo"
            value={newTodo}
            onValueChange={setNewTodo}
          />
          <Button label="Add" onClick={addTodo} />
        </Card>

        <Card>
          <h1 className="mb-2">Todos</h1>
          {todos?.map((todo, i) => (
            <CheckBox
              key={i}
              value={todo}
              label={todo}
              onValueChange={() => {
                markTodoAsDone(todo);
              }}
            />
          ))}
        </Card>
      </div>
    </div>
  );
}

export default App;
