import RecipeProvider from "./Context/RecipeProvider";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SearchList from "./components/SearchList";

function App() {
  return (
    <div className="App">
      <RecipeProvider>
        <Header />
        <div style={{ display: "flex", gap: "1rem" }}>
          <SearchList />
          <MainContainer />
        </div>
      </RecipeProvider>
    </div>
  );
}

export default App;
