import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:8080";

interface UserData {
  username: string;
  email?: string;
  password: string;
}

interface AuthResponse {
  username: string;
  email: string;
  accessToken: string;
  roles?: string[];
}

const register = (username: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post<AuthResponse>(`${API_URL}`, {
    username,
    email,
    password,
  });
};

const login = (username: string, password: string): Promise<AuthResponse> => {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  return axios
    .post<AuthResponse>(`${API_URL}/req/login`, params, {
      withCredentials: true, // Napokig szenvedtem vele, mire rájöttem xd
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

// const login = (username: string, password: string) => fetch("http://localhost:8080/req/login", {
//   method: "POST",
//   credentials: "include",
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: new URLSearchParams({
//     username,
//     password,
//   }),
// })

const logout = (): Promise<AuthResponse> => {
  const params = new URLSearchParams();
  localStorage.removeItem("user");
  return axios
    .post<AuthResponse>(`${API_URL}/logout`, params, {
        withCredentials: true,
      }
    ).then((response) => response.data);
};

const getCurrentUser = (): AuthResponse | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;