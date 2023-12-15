import axios from "axios";
import useMock from "./useMock";

const mockRequest = true;
const BASE_URL = "http://localhost:5000/api/v1";

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

if (mockRequest) {
  useMock(client);
}

export const fetchAllCharacters = async () => {
  return await client.get("/all-characters");
};
