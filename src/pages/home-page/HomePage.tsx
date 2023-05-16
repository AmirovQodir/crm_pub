import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./home-styles.scss";
import siteLogoPath from "../../../assets/images/logo.png";
import { withGuest } from "../../features/auth/hocs";

export const HomePage: FC = withGuest(() => {
  return (
    <Fragment>
      <Helmet>
        <title>Welcome!</title>
      </Helmet>
      <div className="wrapper">
        {/* <img alt="logo" src={siteLogoPath} className="logo" /> */}
        <div className="title">Sign in to your account</div>
        <div className="home">
            <Outlet></Outlet>
        </div>
      </div>
    </Fragment>
  );
});
