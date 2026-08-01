import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import StatusMessage from "../Alert/StatusMessage";
import {useMutation} from "@tanstack/react-query";
import registerUser from "../../api/user/registerAPI.js";

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  username: Yup.string().required("Username is required"),
});

const Registration = () => {
  const navigate = useNavigate();
  // Mutation for user registration
  const mutation = useMutation({mutationFn: registerUser})
  const errorMessage = mutation.error?.response?.data?.message || mutation.error?.message;
  // Formik setup for form handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Form values:", values);
      // Wait for the registration request to finish before redirecting.
      await mutation.mutateAsync(values)
      setTimeout(() => {
          navigate("/login");
      }, 3000);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 m-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Create an account to get free access for 3 days. No credit card
          required.
        </p>

        {/* alerts */}
        {mutation.isPending && (
          <StatusMessage type="loading" message="Registering user..." />
        )}
        {mutation.isError && (
          <StatusMessage type="error" message={errorMessage} />
        )}
        {mutation.isSuccess && (
          <StatusMessage type="success" message="User registered successfully!" />
        )}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Username input field */}
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...formik.getFieldProps("username")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              placeholder="John Doe"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 mt-1">{formik.errors.username}</div>
            )}
          </div>

          {/* Email input field */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              placeholder="you@example.com"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 mt-1">{formik.errors.email}</div>
            )}
          </div>

          {/* Password input field */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 mt-1">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            // disabled={mutation.isPending}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {mutation.isPending ? "Registering..." : "Register"}
          </button>
        </form>
        {/* {errorMessage && (
          <div className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )} */}
        <div className="text-sm mt-2">
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
