import { useState, useEffect } from "react";
import {
  //baseURL,
  //homeBannerImg,
  // homeArtwork1,
  // homeArtwork2,
  // homeArtwork3,
  // member1,
  // member3,
  //member4,
  // member5,
  // member6,
  // tokenIcon,
  // bridgeIcon,
  //vaultIcon,
  // exchangeIcon,
  // traf,
  // surreal,
  // meconcash,
  // polygon_logo,
  // harmony_logo,
  welcomeScreenHome,
} from "../../../images";
import brandLogos from "static/home/brand-logos";
// import { Link } from "react-router-dom";
// import TeamCard from "../../base/team-card";
//import PatnersSection from './patners.section';

const style = {
  // height: '100%',
  width: "100%",
};

const Home = (props) => {
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    document.title = "Crypto Family | Home";
  }, []);

  return (
    <div style={style}>
      <section className="hero is-fullheight has-background-primary2dark mb-0">
        <div className="hero-body" style={{ overflow: "hidden" }}>
          <div className="container">
            <div className="py-6 is-hidden-desktop"></div>
            <div className="columns is-vcentered">
              <div
                className="column has-text-centered-mobile"
                data-aos="fade-right"
              >
                <h1 className="title has-text-light-purple is-2 mb-5">
                  Welcome to the Crypto Family
                </h1>
                <h1 className="subtitle has-text-white is-4">
                  Crypto Family has rebranded to Orcania. <br />
                  We have moved to{" "}
                  <a
                    href="https://www.orcania.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      textDecoration: "underline",
                    }}
                  >
                    Orcania.io
                  </a>
                </h1>
                <div
                  className="columns is-mobile has-background is-centered-a is-multiline"
                  style={{ width: "80%" }}
                >
                  {brandLogos.slice(0, 6).map((e) => (
                    <div className="column is-mobile" key={e.id}>
                      <figure className="image is-32x32 ">
                        <img src={e.logo} alt="" />
                      </figure>
                    </div>
                  ))}
                </div>
                <div
                  className="columns is-mobile has-background is-centered-a is-multiline"
                  style={{ width: "80%" }}
                >
                  {brandLogos.slice(6, 12).map((e) => (
                    <div className="column is-mobile" key={e.id}>
                      <figure className="image is-32x32 ">
                        <img src={e.logo} alt="" />
                      </figure>
                    </div>
                  ))}
                </div>
                <br />
              </div>

              <div className="column">
                <img
                  src={welcomeScreenHome}
                  alt=""
                  data-aos="fade-left"
                  width="auto"
                  height="auto"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
