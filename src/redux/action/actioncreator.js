import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../api/api";

export const actiongetFoodcreator = createAsyncThunk('getfoodData', () => getData('best-foods', 16))

