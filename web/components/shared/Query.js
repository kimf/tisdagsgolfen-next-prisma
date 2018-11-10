import React from "react";
import { Query as ApolloQuery } from "react-apollo";

import LoadingAndErrorIndicator from "./LoadingAndErrorIndicator.js";

const Query = ({ query, children, ...rest }) => (
  <ApolloQuery query={query} {...rest}>
    {({ data, error, loading }) => (
      <LoadingAndErrorIndicator error={error} loading={loading}>
        {children(data)}
      </LoadingAndErrorIndicator>
    )}
  </ApolloQuery>
);

export default Query;
