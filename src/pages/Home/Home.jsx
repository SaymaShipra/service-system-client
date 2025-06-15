// import React from "react";
// import Banner from "../../components/Banner";
// import Stat from "../../components/Stat";
// import Choose from "../../components/Choose";
// import Partners from "../../components/Partners";

// import Service from "../Service";

// const Home = () => {
//   const servicesPromise = fetch("http://localhost:3000/services").then((res) =>
//     res.json()
//   );
//   return (
//     <div>
//       <Banner />
//       <Service servicesPromise={servicesPromise} />
//       <Stat />
//       <Partners />
//       <Choose />
//     </div>
//   );
// };

// export default Home;

// src/pages/Home/Home.jsx
// import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Stat from "../../components/Stat";
import Choose from "../../components/Choose";
import Partners from "../../components/Partners";
import Service from "../Services";

const Home = () => {
  // const [services, setServices] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:3000/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching services:", error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div>
      <Banner />
      {/* <Service services={services} loading={loading} /> */}
      <Stat />
      <Partners />
      <Choose />
    </div>
  );
};

export default Home;
