import axios from "axios";

const requestURL = "https://riabooksapi.azurewebsites.net/books";

export function getData(setCardList) {
  return axios
    .get(requestURL)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log("Failed with error: ", error);
    });
}
