import axios from "axios";

interface GetUsersParams {
  department?: string;
}

export const getUsers = async ({ department }: GetUsersParams) => { 
  try {
    const exampleParam = department || "all"; 
    const response = await axios.get(
      `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${exampleParam}`,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(response.data); 
    return response.data; 
  } catch (error) {
    console.error("Ошибка при получении пользователей:", error);
    return null; 
  }
};
