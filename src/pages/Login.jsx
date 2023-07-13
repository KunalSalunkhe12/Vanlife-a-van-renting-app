import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("token", data.token);
    const response = redirect("/host");
    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
};

const Login = () => {
  const message = useActionData();
  const navigation = useNavigation();

  return (
    <div className="min-h-screen bg-primary grid place-content-center">
      <h1 className="text-xl md:text-3xl font-bold my-10">
        Sign in to your account
      </h1>
      {message && <p className="text-red-500">{message}</p>}
      <Form method="POST" className="flex flex-col gap-6" replace>
        <input
          className="p-2 outline-none rounded-md"
          name="email"
          type="email"
          placeholder="Email address"
          value="fake@email.com"
          readOnly
        />
        <input
          className="p-2 outline-none rounded-md"
          name="password"
          type="password"
          placeholder="Password"
          value="p123"
          readOnly
        />
        <button
          disabled={navigation.state === "idle" ? false : true}
          className="bg-orange p-2 text-white font-medium rounded-md"
        >
          {navigation.state === "idle" ? "Sign in" : "Signing in..."}
        </button>
      </Form>
    </div>
  );
};

export default Login;
