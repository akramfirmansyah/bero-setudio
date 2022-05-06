import axios from "axios";

function Test({ dataUsers, dataAlbum }) {
  return (
    <ul>
      {dataUsers.map((user) => (
        <li key={user.id}>Username: {user.username}, email: {user.email}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  // get data User
  const getUsers = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const dataUsers = getUsers.data;

  // get data Album
  const getAlbum = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  const dataAlbum = getAlbum.data;

  return {
    props: { dataUsers, dataAlbum }, // will be passed to the page component as props
  };
}

export default Test;  