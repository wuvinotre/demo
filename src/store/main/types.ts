export type Character = {
  _id: string;
  name: string;
  age: string;
  race: string;
  gender: string;
  height: string;
  job: string;
  rank: string;
  status: string;
};

type Status = "none" | "loading" | "success";

export type State = {
  character?: Character[];
  loading: Status;
};
