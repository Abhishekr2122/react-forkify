import RecipeProvider from "./Context/RecipeProvider";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <RecipeProvider>
        <Header />
      </RecipeProvider>
    </div>
  );
}

export default App;
