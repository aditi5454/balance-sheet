import { GET_BALANCE_DATA_URL } from "../constants/endpoint";

export const getBalanceSheetData = async () => {
  try {
    const response = await fetch(GET_BALANCE_DATA_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};
