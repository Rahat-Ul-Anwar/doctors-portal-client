import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || '/';

  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      }).catch(error => console.error(error));
  };
  return (
    <div className="h-[800px] flex justify-center items-center p-4">
      <div className="w-96">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="text"
              className="input input-bordered w-full"
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "password id required",
                minLength : {value: 6, message:'password must be 6 characters and longer'}
              })}
            />
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>
          <label className="label">
            <span className="label-text">Forget password?</span>
          </label>

          <input
            type="submit"
            value="Log In"
            className="btn btn-primary w-full"
          />
        </form>
        <small>
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-primary">Create new account</Link>
        
        </small>
        <div className="divider">OR</div>
          <button className="uppercase btn btn-outline w-full">
            Continue with Google
          </button>
      </div>
    </div>
  );
};

export default Login;
