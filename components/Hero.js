import CategoryHero from "./CategoryHero";
import ProductsHero from "./ProductsHero";
import VideoHero from "./VideoHero";


export default function Hero() {
    return (
        <div className="hero w-100 h-auto">
            <VideoHero />
            <CategoryHero />
            <ProductsHero />
        </div>
    )
}