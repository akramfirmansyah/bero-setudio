import axios from "axios";
import Image from "next/image";

function Test({ id }) {
  return (
    <div>
      <p>Path: {id}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
//   const BASEURL = process.env.BASEURL
  
//   // get data Album

//   const getTeams = await axios.get(BASEURL+"/teams");
//   const dataTeams = getTeams.data;

  // Context
  const id = context.params

  return {
    props: { id }, // will be passed to the page component as props
  };
}

export default Test;
