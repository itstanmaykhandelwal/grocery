import { Button } from "@/components/ui/button";
import Slider from "./_components/Slider";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_utils/GlobalApi";
import ProductList from "./_components/ProductList";
import Image from "next/image";
import Footer from "./_components/Footer";

export default async function Home() {

    const sliderList = await GlobalApi.getSliders();

    const categoryList = await GlobalApi.getCategoryList();

    const productList = await GlobalApi.getAllProducts();
    return (
        <div className="my-0 mx-7 p-5 md:p-6 px-16">
           <Slider sliderList={sliderList}/>
           <CategoryList categoryList={categoryList}/>
           <ProductList productList={productList}/>
           <Image src="/footer.jpg" width={500} 
           height={300} alt="banner"
           className="w-full h-[400px] object-contain"/>
           <Footer/>
        </div>
    );
}

