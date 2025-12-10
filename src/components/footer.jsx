//import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footerlogoimg">
          <img className="footerlogo" src="/images/logo-desgin.png" />
        </div>
        <div className="infosection">
          <div className="operhourinfo">
            <div className="operhourstitle">
              <h3>Operation Hours</h3>
            </div>
            <p>
              Saturday - Sunday:
              <br />
              9:00am - 5:00pm
            </p>
            <p>
              Monday - Friday: <br />
              9:00am - 8:00pm
            </p>
          </div>
          <div className="locationinfo">
            <h3 className="locationtitle">Locations</h3>

            <div className="addressgroup">
              <p>
                123 High Street <br />
                Grand Falls, NL
                <br />
                1-098-765-4321
              </p>
              <br />

              <hr />

              <p>
                123 Main Street
                <br />
                St.Johns, NL
                <br />
                1-709-456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
