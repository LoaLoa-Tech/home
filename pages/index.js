import loadable from "@loadable/component";
import Head from "next/head";
import { Fragment } from "react";

import Banner from "../components/Banner";
import Ecom from "../components/Ecom";
import WhyUs from "../components/WhyUs";
import CustomPrice from "../components/CustomPrice";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Tạo web bán hàng miễn phí</title>
        <meta
          name="description"
          content="Làm hài lòng khách hàng của bạn. Đơn giản để tạo lập và phát triển."
        />
      </Head>
      <Banner />
      <Ecom />
      <WhyUs />
      <CustomPrice />
    </Fragment>
  );
}
