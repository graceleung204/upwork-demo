import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <div className="flex justify-center py-12">
        <ProfileCard />
      </div>
    </main>
  );
}