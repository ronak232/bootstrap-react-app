// import { useEffect, useState } from "react";
// import Data from "../Components/data.json";

// export default function Product(url, urlLoader) {
//   const [response, setResponse] = useState({});
//   const [loading, setloading] = useState(true);

//   const fetchJson = async () => {
//     let responseData = await fetch(Data);
//     let data = await responseData.json();
//     console.log(data);
//     setResponse(data);
//     setloading(false);
//   };

//   useEffect(() => {
//     fetchJson();
//   },[]);
//   return { response, loading };
// }
