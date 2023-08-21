import axios from "axios";

const baseUrl = "https://restaurant-api.dicoding.dev";

async function postToApi(data) {
  try {
    const response = await axios.post(`${baseUrl}/review`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.data.error) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: response.data.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function getListRestaurants() {
  try {
    const response = await axios.get(`${baseUrl}/list`);
    return response.data.restaurants;
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function getDetailRestaurant(id) {
  try {
    const response = await axios.get(`${baseUrl}/detail/${id}`);
    return response.data.restaurant;
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export { postToApi, getListRestaurants, getDetailRestaurant };
