import { route, Route } from "preact-router";
import { useEffect, useState } from "preact/hooks";

type Props = {}

const Redirect = (props: Props) => {
  useEffect(() => {
    console.log('Redirect component');
    route("/")
  }, [])

  return (
    <div>Redirect</div>
  )
}

export default Redirect;
