import { ActionTypes } from "../types";

const initialValues = {
    dummyBuilders:[]
};

export default (state = initialValues, action) => {
  switch (action.type) {

    case ActionTypes.CLEAR:
      return initialValues;
    default:
      return state;
  }
};
