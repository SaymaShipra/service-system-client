// import React from "react";
// import Banner from "../../components/Banner";
// import Stat from "../../components/Stat";
// import Choose from "../../components/Choose";
// import Partners from "../../components/Partners";

// import Service from "../Service";

// const Home = () => {
//   const servicesPromise = fetch("https://service-system-server.vercel.app/services").then((res) =>
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
import FeaturedServices from "../../components/FeaturedServices";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedServices />
      {/* <Service services={services} loading={loading} /> */}
      <Stat />
      <Partners />

      <Choose />
    </div>
  );
};

export default Home;
