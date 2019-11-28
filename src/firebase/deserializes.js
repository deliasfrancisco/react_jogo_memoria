import { map, toPairs } from "lodash";

export const deserializeArray = value => {
  try {
    return map(toPairs(value), obj => ({
      key: obj[0],
      ...obj[1]
    }));
  } catch (err) {
    console.log("Erro :: deserializeArray :: ", err);
    return [];
  }
};

export default {
  deserializeArray
};
