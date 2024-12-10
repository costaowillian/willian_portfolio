import HomeBanner from "@/components/HomeBanner/HomeBanner";
import NavBar from "@/components/Navbar/NavBar";

export default function Home() {
  return (
    <>
      <div className="sm:hidden">
        <NavBar />
      </div>

      <div className="container">
        <section className="mx-4 sm:mx-0">
          <HomeBanner size="lg" />

          <div className="hidden sm:flex">
            <NavBar />
          </div>

          <p className="text-primary">Home Works</p>
        </section>
      </div>
    </>
  );
}
