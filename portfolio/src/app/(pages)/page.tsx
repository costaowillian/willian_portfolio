import HomeBanner from "@/components/HomeBanner/HomeBanner";

export default function Home() {
  return (
    <div className="container">
      <section className="mx-4 sm:mx-0">
        <HomeBanner size="lg" />
        <p className="text-primary">Home Works</p>
      </section>
    </div>
  );
}
