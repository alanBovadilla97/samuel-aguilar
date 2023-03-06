import Footer from "src/components/footer/Footer";
import IntroImage from "src/components/intro/IntroImage";
import Services from "src/components/services/Services";
import ContactMe from "../components/contactMe/ContactMe";

// -------------------------------------------------------------------------

export default function Index() {
  return(
    <>
      <IntroImage />
      <Services />
      <ContactMe />
      <Footer />
    </>
  );
};
