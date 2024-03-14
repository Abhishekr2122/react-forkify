import styled from "styled-components";
import { useRecipe } from "../Context/RecipeProvider";
import { BiError } from "react-icons/bi";

const StyledListContainer = styled.div`
  /* border: 1px solid yellow; */
  height: 89vh;
  width: 25vw;
  overflow: scroll;
  display: flex;
`;

const StyledList = styled.div``;

function List({ data }) {
  return (
    <StyledList>
      {data?.recipes.map(function (citem, i) {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "25px",
              height: "10%",
              cursor: "pointer",
            }}
            key={i}
          >
            <div>
              <img
                src={citem.image_url}
                alt="not found"
                style={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "60px",
                }}
              />
            </div>

            <div style={{ width: "100%" }}>
              <h3
                style={{
                  color: "tomato",
                  fontSize: "12px",
                }}
              >
                {citem.title}
              </h3>
              <h4
                style={{
                  color: "black",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {citem.publisher}
              </h4>
            </div>
          </div>
        );
      })}
    </StyledList>
  );
}

function ErrorMessage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "10px",
      }}
    >
      <BiError style={{ color: "tomato", height: "60px", width: "60px" }} />
      <p>{`No recipes found for your query! Please try again ;)`}</p>
    </div>
  );
}

export default function SearchList() {
  const { searchRecipe, isLoading, finalQuery } = useRecipe();
  const { data, results } = searchRecipe;
  console.log(results);
  console.log("This is the data in the list component", data?.recipes);
  if (isLoading) {
    return (
      <StyledListContainer>
        <p>loading.....</p>
      </StyledListContainer>
    );
  }

  if (!finalQuery) {
    return null;
  }

  return (
    <StyledListContainer>
      {results > 0 ? <List data={data} /> : <ErrorMessage />}
    </StyledListContainer>
  );
}
