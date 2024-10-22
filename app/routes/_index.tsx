import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = ({}: LoaderFunctionArgs) => {
  //             ^?
  return null;
};

export const action = () => {
  //             ^?
  return null;
};

export default function Index() {
  return <h1>Hello world</h1>;
}
