import { fetchUser } from "../utils/FetchLocalStorage";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
};
