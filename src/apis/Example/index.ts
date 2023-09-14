import { AxiosResponse } from "axios";
import server from "src/utils/api";

export const exampleApi = {
  fetchItems: async () => {
    const { data }: AxiosResponse<any[]> = await server.main.get(`items`);
    return data;
  },
};
