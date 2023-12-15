import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import characterMock from "./mock.json";

const useMock = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios);

  mock.onGet(/all-characters/).reply(200, characterMock);
};

export default useMock;
