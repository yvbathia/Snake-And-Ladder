import { snakesOrLaddr } from "../constants";

export const calculateNextValue = (input) => {
  let result = input;
  snakesOrLaddr.forEach((value) => {
    if (input in value) {
      result = value[input];
    }
  });
  
  return result;
};
