import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, page doesn't exist.</p>
      <p>
        <i>Error : {error.statusText || error.message}</i>
      </p>
    </div>
  );
}
