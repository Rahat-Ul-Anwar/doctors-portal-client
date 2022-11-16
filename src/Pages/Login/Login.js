import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
 const handleLogin = (data) => console.log(data);
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
              {...register("email")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="text"
              className="input input-bordered w-full"
              {...register("password")}
            />
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
          <Link className="text-primary">Create new account</Link>
                  <div className="divider">OR</div>
                  
                  <button className="uppercase btn btn-outline w-full">Continue with Google</button>
        </small>
      </div>
    </div>
  );
};

export default Login;
