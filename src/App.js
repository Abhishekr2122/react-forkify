import RecipeProvider from "./Context/RecipeProvider";
import Header from "./components/Header";
import SearchList from "./components/SearchList";

function App() {
  return (
    <div className="App">
      <RecipeProvider>
        <Header />
        <SearchList />
      </RecipeProvider>
    </div>
  );
}

export default App;
