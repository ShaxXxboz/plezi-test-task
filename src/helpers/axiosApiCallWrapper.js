import axios from "axios";

/**
 * Create an Axios Client with defaults
 */

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

/**
 * Request Wrapper with default success/error actions
 */
export const apiCall = function (method, route, params = {}, body = null) {
  const onSuccess = function (response) {
    return response.data;
  };

  return client({
    method,
    url: route,
    data: body,
    params: { ...params, api_key: process.env.REACT_APP_API_KEY },
  }).then(onSuccess);
};
