import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="min-h-screen bg-primary grid place-content-center">
      <h1 className="text-2xl md:text-5xl font-bold">
        Error: {error?.message}
      </h1>
      <pre className="text-xl md:text-3xl font-medium my-5 text-center">
        {error?.status} - {error?.statusText}
      </pre>
    </div>
  );
};

export default Error;
