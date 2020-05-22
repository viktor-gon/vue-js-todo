const loadData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await data.json();
};

export default loadData;
