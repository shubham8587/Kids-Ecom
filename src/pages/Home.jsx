import { Link } from "react-router-dom";
import KidsHeroSlider from "../pages/KidsHeroSlider";
import ShopCategories from "../pages/ShopCategories";
import BrandsKidsSection from "../pages/BrandsKidsSection";
import OffersSlider from "../pages/OffersSlider";
import TrendingStyles from "../pages/TrendingStyles";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Home() { 
    return (
        <>
            {/* Header */} 

         <Header />

            {/* Slider */}

            <div>
                <KidsHeroSlider />
            </div>

            {/* <div>
                <LookingForNew />
            </div> */}
               <div>
                <ShopCategories />
            </div>

            {/* Offer */}
            <div>
            <OffersSlider />
            </div>

            <div>
                <TrendingStyles />
            </div>

            {/* <div>
          <SpecialOff />
            </div> */}

            
            <div>
                <BrandsKidsSection />
            </div>

            <div>
                <Footer />
            </div>

        </>
    );
}

export default Home;