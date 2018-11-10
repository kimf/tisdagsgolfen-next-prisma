const LoadingAndErrorIndicator = ({ loading, error, children }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return children;
};

export default LoadingAndErrorIndicator;
