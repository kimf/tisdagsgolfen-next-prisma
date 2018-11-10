```
const MoviesList = () => (
  <Query query={ movies }>
    {
      ({ movies }) => movies.map((movie) => {
        return <MovieListEntry movie={ movie } />;
      })
    }
  </Query>
);

const LikeMovie = ({ movieId }) => (
  <Mutation mutation={ likeMovieMutation }>
    {
        (likeMovie, data) => {
            return (
              <button onClick={ likeMovie({ id: movieId })}>Like Movie!</button>
            );
        }
    }

    <AfterMutation>
      Yay! You already liked this movie!
    </AfterMutation>
  </Mutation>
);
```
