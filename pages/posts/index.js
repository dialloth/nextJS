import React, { useEffect } from "react";
import Layout from "../components/layout";
import Image from "next/image";

export default function Index() {
  useEffect(() => console.log("index page did mount"));

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Image
          src="/images/maison.jpeg"
          height={144}
          width={144}
          alt="nature"
          title="Here is my home"
        />
      </div>
    </div>
  );
}
