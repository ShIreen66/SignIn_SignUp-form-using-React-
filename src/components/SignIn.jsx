import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignIn = (props) => {
  const { toggler, settoggler, users } = props;
  // console.log(props)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    const isPresent = users.find((user) => user.email === data.email && user.password === data.password)

    console.log("Login form ka data", data);

    if(isPresent){
      toast.success("User Already Exists!")
    } else {
      toast.error("User not found!")
    }
    reset()
  };
  return (
    <div className="w-screen min-h-screen bg-gray-800 text-white flex items-center justify-center p-4 overflow-auto">
      <form
        onSubmit={handleSubmit(submitHandler)}
        action=""
        className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-5xl font-semibold text-center">
          Get back to the journey
        </h2>

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
          Sign In
        </button>

        {/* Switch to Sign Up */}
        <small className="block text-center mt-4">
          Don't have an account?{" "}
          <button
            // onClick={() => settoggler(true)}
            onClick={() => settoggler(!toggler)}
            type="button"
            className="text-blue-400 hover:underline focus:outline-none"
          >
            Sign Up
          </button>
        </small>
      </form>
    </div>
  );
};

export default SignIn;
