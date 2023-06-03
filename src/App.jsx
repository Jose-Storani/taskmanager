
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <main className="bg-zinc-800 min-h-screen">
      <div  className="container m-auto  p-5">
      <Form  />
      <TaskList />
      </div>
      
    </main>
  );
}

export default App;
