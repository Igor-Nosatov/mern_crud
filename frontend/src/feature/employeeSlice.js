import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const employeeState = {
  updateState: false,
  loading: false,
  employeeList: [],
  error: "",
  response: "",
};

export const fetchEmployee = createAsyncThunk(
  "employee/fetchEmployee",
  async () => {
    const response = await axios.get("http://localhost:8002/api/items");
    return response.data.response;
  }
);

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (data) => {
    const response = await axios.post("http://localhost:8002/api/items", {
      name: data.name,
      position: data.position,
    });
    return response.data.response;
  }
);

export const removeEmployee = createAsyncThunk(
  "employee/removeEmployee",
  async(data) => {
    const response = await axios.delete(
      `http://localhost:8002/api/items/${data}`
    );
    return response.data.response;
  }
);

export const modifiedEmployee = createAsyncThunk(
  "employee/modifiedEmployee",
  async(data) => {
    const response = await axios.put(
      `http://localhost:8002/api/items/${data.id}`,
       {
        name:data.name,
        position:data.position,
       }
    )
    return response.data.response;
  }
);

extraReducers:(builder) => {
  builder
}


export default employeeSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearReponse } =
  employeeSlice.actions;
