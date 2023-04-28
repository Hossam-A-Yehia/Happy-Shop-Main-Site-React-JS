import axios from "axios";

const BASE_URL = "https://e-commerce-back-end-psi.vercel.app/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjFhM2E4NjdjYzg3NDcxZTgzOTAxMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDQ0NDczNSwiZXhwIjoxNjgwNzAzOTM1fQ.w8f0vLqMO8qbaWksHO7yfM50AJREKgMlnDogQssn_20";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
