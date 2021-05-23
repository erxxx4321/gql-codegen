import gql from "graphql-tag";

export const GET_RECIPE = gql`
  query recipe($input: RecipeInput!) {
    article {
      recipe(input: $input) {
        id
        title
        imageUrl
      }
    }
  }
`;
