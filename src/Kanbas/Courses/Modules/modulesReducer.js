import { createSlice } from "@reduxjs/toolkit";
// import db from "./index";


const initialState = {
  // modules: db.modules,
  // modules: { name: "", description: "" },
  modules: [],
  module: { name: "", description: "" },
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    resetModule: (state) => {
        state.module = { name: "", description: "" };
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule, resetModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;