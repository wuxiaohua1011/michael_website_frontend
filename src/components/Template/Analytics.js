import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';
import ReactGA from "react-ga4";

const { NODE_ENV, REACT_APP_GA_TRACKING_ID } = process.env;

// if (NODE_ENV === 'production') {
//   ReactGA.initialize(REACT_APP_GA_TRACKING_ID);
// }

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production') {
      try {
        ReactGA.initialize(REACT_APP_GA_TRACKING_ID);
      } catch
      {
        console.log("Unable to start");
      }
    }
  }, [pathname]);

  return null;
};

export default Analytics;
