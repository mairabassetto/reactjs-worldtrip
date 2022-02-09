import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { Icons } from "../components/Icons";
import { Slides } from "../components/Slides";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Icons />
      <Divider />
      <Slides />
    </>
  )
}