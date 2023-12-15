import { State } from "../types";
import reducer, { mainActions } from "../slice";
import characters from "../../../services/mock.json";

describe("Main Slice", () => {
  const initialState: State = {
    loading: "none",
  };

  it("should return the initial state", () => {
    const state = reducer(initialState, { type: "unknown" });
    expect(state).toEqual(initialState);
  });

  describe("getAllCharacter", () => {
    it("should handle getAllCharacter.pending", () => {
      const state = reducer(
        initialState,
        mainActions.getAllCharacter.pending("")
      );
      expect(state.loading).toEqual("loading");
    });

    it("should handle empty getAllCharacter.fulfilled ", () => {
      const state = reducer(
        initialState,
        mainActions.getAllCharacter.fulfilled(characters, "")
      );
      expect(state.loading).toEqual("success");
      expect(state.character).toEqual(characters);
    });
  });
});
