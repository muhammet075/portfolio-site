import Hero from "../components/hero";
import Websitelist from "../components/websitelist";
import Logolist from "../components/logolist";


function HomePage() {
  return( 
    <div className="container">
      <Hero/>
      <Websitelist/>
      <Logolist/>
    </div>
  )
}

export default HomePage