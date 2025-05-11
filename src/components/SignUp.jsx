import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
const SignUp = (props) => {
  const { toggler, settoggler, users, setusers } = props;
  // console.log(props)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    
    data.id = nanoid()
    // console.log(nanoid)
    // console.log("Registered form ka data----->", data);
    // const copyusers = [...users];
    // copyusers.push(data)
    // setusers(copyusers)

    setusers([...users, data])
      reset()
  };
  console.log(users)



  return (
    <div className="w-screen min-h-screen bg-gray-800 text-white flex items-center justify-center p-4 overflow-x-hidden">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-5xl font-semibold text-center">
          Let's start the journey
        </h2>

        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            {...register("email", {
              required: "E-Mail is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            type="email"
            placeholder="John@doe.example.com"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            type="password"
            placeholder="*****"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
        >
          Sign Up
        </button>

        {/* Switch to Sign In */}
        <small className="block text-center mt-4">
          Already have an account?{" "}
          <button
            // onClick={() => settoggler(false)}

            onClick={() => settoggler(!toggler)}
            type="button"
            className="text-blue-400 hover:underline focus:outline-none"
          >
            Sign In
          </button>
        </small>
      </form>
    </div>
  );
};

export default SignUp;
