import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const navigate = useNavigate();

  const handleLogin: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      await AuthService.login(data.username, data.password);
      navigate("/");
      window.location.reload();
    } catch (error: any) {
      const resMessage =
        (error.response && error.response.data?.message) ||
        error.message ||
        "Login failed";
      alert(resMessage); // Replace with proper error UI as needed
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleSubmit(handleLogin)}>
          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              {...register("username", {
                required: "This field is required!",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long.",
                },
              })}
            />
            {errors.username && (
              <div className="invalid-feedback d-block">
                {errors.username.message}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "This field is required!",
                minLength: {
                  value: 3,
                  message: "Password must be at least 6 characters long.",
                },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback d-block">
                {errors.password.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
