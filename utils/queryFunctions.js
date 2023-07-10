export const getMovies = async () => {
  const data = await fetch(" http://localhost:3200/movies");
  const posts = await data.json();

  return posts;
};
