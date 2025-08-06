import axios from "axios";

const ACCESS_KEY = "2IYa2OicbJ89ZLsehgRAq-7dFzJp5T6HyX7MaDpLkuE";

export const fetchImages = async (query, page = 1, perPage = 12) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
