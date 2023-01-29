import AnimatedRoutes from "./Component/AnimatedRoutes";
import Bar from "./Component/Bar";
import './css/style.css'
function App() {
  return (
    <div className="App">
      <Bar />
      <AnimatedRoutes intial={false} />
    </div>
  );
}

export default App;
