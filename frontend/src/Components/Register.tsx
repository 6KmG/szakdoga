import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthService from "../Services/AuthService";

interface RegisterFormInputs {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    AuthService.register(data.username, data.email, data.password)
    //   .then((response) => {
    //     alert(response.data.message); // Replace with proper success handling
    //   })
      .catch((error) => {
        alert(
          error.response?.data?.message || error.message || "Registration failed"
        ); // Replace with proper error handling
      });
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", {
                required: "This field is required!",
                minLength: {
                  value: 3,
                  message: "The username must be between 3 and 20 characters.",
                },
                maxLength: {
                  value: 20,
                  message: "The username must be between 3 and 20 characters.",
                },
              })}
              className="form-control"
            />
            {errors.username && (
              <div className="invalid-feedback d-block">
                {errors.username.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "This field is required!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "This is not a valid email.",
                },
              })}
              className="form-control"
            />
            {errors.email && (
              <div className="invalid-feedback d-block">{errors.email.message}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "This field is required!",
                minLength: {
                  value: 6,
                  message: "The password must be between 6 and 40 characters.",
                },
                maxLength: {
                  value: 40,
                  message: "The password must be between 6 and 40 characters.",
                },
              })}
              type="password"
              className="form-control"
            />
            {errors.password && (
              <div className="invalid-feedback d-block">
                {errors.password.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
