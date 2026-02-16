import React from "react";
import { useSEO } from "../../seo/useSEO";
import HeadTitle from "../../Components/Head/HeadTitle";
import NotFoundSection from "../../Components/NotFound/notfound";

function NotFoundPage(){
     useSEO({
        title: "error 404 - Not Found | Resometa",
        description:
          "Resometa privides best online marketing services and strategies that transform your business. Our expert team uses the latest tools and techniques to deliver high-quality results that captivate your audience and drive engagement."
      });
    return(
        <>
            
            <NotFoundSection />
        </>
    );
}

export default NotFoundPage;