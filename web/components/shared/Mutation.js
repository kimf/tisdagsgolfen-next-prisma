import React from "react";
import { Mutation as ApolloMutation } from "react-apollo";
import AfterMutation from "./AfterMutation";
import LoadingAndErrorIndicator from "./LoadingAndErrorIndicator";

// If you are using ReactHotReloader, you will need to compare against the following constant instead of AfterMutation.
// RHL wraps components to accomplish its goal, so normal type comparisons will not work
const AfterMutationType = <AfterMutation />.type;

const renderChildren = (children, mutationFn, data) => {
  let afterMutation;

  React.Children.forEach(children, child => {
    if (child.type === AfterMutation) {
      afterMutation = child;
    }
  });

  if (afterMutation && data) {
    return afterMutation;
  }

  const newMutationFn = variables => {
    return mutationFn({ variables });
  };
  return children(newMutationFn, data);
};

const Mutation = ({ mutation, children, ...rest }) => (
  <ApolloMutation mutation={mutation} {...rest}>
    {(mutationFn, { loading, error, data }) => (
      <LoadingAndErrorIndicator loading={loading} error={error}>
        {renderChildren(children, mutationFn, data)}
      </LoadingAndErrorIndicator>
    )}
  </ApolloMutation>
);

export default Mutation;
