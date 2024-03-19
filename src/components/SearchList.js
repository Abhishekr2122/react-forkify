import styled from "styled-components";
import { useRecipe } from "../Context/RecipeProvider";
import { BiError } from "react-icons/bi";

const StyledListContainer = styled.div`
  /* border: 1px solid yellow; */
  height: 89vh;
  width: 25vw;
  overflow: scroll;
  display: flex;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledList = styled.div`
  margin-top: 4px;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 20px;
  height: 8%;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background-color: #f9f5f3;
    transition-duration: 0.5s;
  }
`;
function List({ data, pagesArr }) {
  return (
    <StyledList>
      {data?.recipes.map(function (citem, i) {
        return (
          <ListContainer key={citem.id}>
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
                  fontSize: "13px",
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
          </ListContainer>
        );
      })}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {pagesArr}
      </div>
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
  const pages = Math.trunc(data?.recipes?.length / 10) + 1;
  const pagesArr = [];

  for (let i = 0; i < pages; i++) {
    pagesArr.push(
      <button
        key={i}
        style={{
          backgroundColor: "transparent",
          border: "1px solid tomato",
          borderRadius: "40px",
        }}
      >
        {i + 1}
      </button>
    );
  }

  if (isLoading) {
    return (
      <StyledListContainer>
        <p
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            color: "tomato",
          }}
        >
          loading.....
        </p>
      </StyledListContainer>
    );
  }

  if (!finalQuery) {
    return null;
  }

  return (
    <StyledListContainer>
      {results > 0 ? (
        <List data={data} pagesArr={pagesArr} />
      ) : (
        <ErrorMessage />
      )}
    </StyledListContainer>
  );
}
