import axios from "./axiosConfig";

export const fetchSessions = async () => {
  try {
    const response = await axios.get("/session");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSession = async (session) => {
  try {
    const response = await axios.post("/session", session);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSession = async (id, session) => {
  try {
    const response = await axios.put(`/session/${id}`, session);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSession = async (id) => {
  try {
    const response = await axios.delete(`/session/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
