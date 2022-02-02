import React from "react";
import Header_3 from "../components/Header_3";



export default function MissingPage() {
  return (<>
    <Header_3 />
    <div className="main" style={{
      backgroundImage: "url(public/images/404.png)", backgroundPosition: "center",
      backgroundSize: "cover"
    }}>
    </div>
  </>)
}