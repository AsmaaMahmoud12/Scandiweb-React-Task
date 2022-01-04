import { CATEGORIES } from "../constants";

export const categoryList = (category) => {
    return {
      type: CATEGORIES,
      payload: {
        category
      }
    };
  };
