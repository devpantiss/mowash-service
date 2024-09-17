// import axios from "axios";

// // Create an axios instance with a base URL
// export const http = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
// });

// http.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.clear();
//       window.location.href = "/signin";
//     }
//     return Promise.reject(error);
//   }
// );
