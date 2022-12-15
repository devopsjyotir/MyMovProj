import Client from "./api";
import axios from "axios";

export const GetUserList = async () => {
  try {
    let response = await axios.get("http://localhost:3001/api/users/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddUser = async (data) => {
  try {
    let response = await axios.post(
      "http://localhost:3001/api/users/",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UpdateUserList = async (id) => {
  try {
    let response = await axios.put(`http://localhost:3001/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};