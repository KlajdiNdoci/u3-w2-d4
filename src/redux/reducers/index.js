import myReducer from "../store";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: myReducer,
});
export default store;
