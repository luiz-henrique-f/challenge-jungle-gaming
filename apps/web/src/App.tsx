import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="dark bg-background">
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant={"secondary"}>Click me</Button>
      </div>
    </div>
  );
}

export default App;
