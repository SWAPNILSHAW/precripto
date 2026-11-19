import React from "react";
import { Banner, Header, Speciality, TopDoctors,Support } from "../assets/index";

const Home = () => {
  return (
    <section>
      <Header />
      <Speciality />
      <TopDoctors />
      <Banner/>
      <Support/>
    </section>
  );
};

export default Home;
