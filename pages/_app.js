// Import global styles
import "../styles/globals.css";

// Internal imports
import { NavBar, Footer } from "../Components";
import  {CrowdFundingProvider}  from "../Context/CrowdFunding";

export default function App({ Component, pageProps }) {
  return (
    <>
      
      <CrowdFundingProvider>
             <NavBar />
        
   
        <Component {...pageProps} />
        
      
        <Footer />
      </CrowdFundingProvider>
    </>
  );
}
