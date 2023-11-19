import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCharacters } from "../../services/services";

export const getAllCharacter = createAsyncThunk(
  "main/getAllCharacter",
  async (_) => {
    const res = await fetchAllCharacters();
    return res.data;
  }
);
