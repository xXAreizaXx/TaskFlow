"use client";

// NextJS
import dynamic from "next/dynamic";

// Assets
import LoaderAnimation from "@assets/animations/loader.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Loader = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Lottie animationData={LoaderAnimation} loop={true} />
        </div>
    );
};

export default Loader;