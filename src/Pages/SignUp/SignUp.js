import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex justify-center items-center p-4">
      <div className="w-96">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              {...register("name", {
                required: "name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-error">{errors?.name.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-error">{errors?.email.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              {...register("password", {
                required: "password is required",
                  minLength: { value: 6, message: "password must be 6 characters long" },
                  pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:"password must be strong" 
                
                    }
                
              })}
              className="input input-bordered w-full"
            />

            {errors.password && (
              <p className="text-error">{errors?.password.message}</p>
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
          All ready have an account? please,
          <Link to="/login" className="text-primary">
            Log In
          </Link>
        </small>
        <div className="divider">OR</div>
        <button className="uppercase btn btn-outline w-full">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
