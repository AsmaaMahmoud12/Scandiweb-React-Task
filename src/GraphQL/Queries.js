import gql from "graphql-tag"

export const LOAD_PRODUCTS = gql`
 {
    category{
      products{
        id,
        name,
        gallery,
        category,
        brand,
        description,
        attributes{
          name,
          type,
          items{
            displayValue
          }
        }
        prices{
          amount,
          currency
        },
        inStock
      } 
    },
  }
`



export const LOAD_CATEGORIES = gql`
  {
    category{
      products{
        category
      }
    }
  }
`