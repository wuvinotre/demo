import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { State } from "./types";

const getState = (store: RootState): State => store.main;

export const getAllCharacter = createSelector(getState, (state) => state.character ?? []);

export const getLoading = createSelector(getState, (state) => state.loading);
