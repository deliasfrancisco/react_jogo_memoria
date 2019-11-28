import { database } from "../index";
import { deserializeArray } from "./../deserializes";

export const fetchRanking = () =>
  new Promise(resolve =>
    database
      .ref("ranking")
      .on("value", snapshot => resolve(deserializeArray(snapshot.val())))
  );
