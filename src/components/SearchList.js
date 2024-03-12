import { useRecipe } from "../Context/RecipeProvider";

function List() {}

export default function SearchList() {
  const { searchRecipe, isLoading } = useRecipe();
  const { data, results } = searchRecipe;

  if (isLoading) {
    return (
      <div>
        <p>loading.....</p>
      </div>
    );
  }

  return <div></div>;
}
