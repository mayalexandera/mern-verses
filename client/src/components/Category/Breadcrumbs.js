import React from "react";
import { withRouter } from "react-router";

function Breadcrumbs(props: MyComponentProps) {
  console.log(props);
  const query = props.location.pathname;
  const pathnameLength = query.length;
  console.log(query.slice(1, pathnameLength).split("/"));
  return <div>{query}</div>;
}

export default withRouter(Breadcrumbs);
