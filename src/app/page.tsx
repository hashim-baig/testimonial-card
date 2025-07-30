import TestimonialCard from "@/components/organisms/TestimonialCard";

export default function Home() {
  return (
      <>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-[#D2D6DB] to-[#F9FAFB]">
                <TestimonialCard
                    imgUrl={`/profile-thumbnail.png`}
                    name={"Sarah Dole"}
                    username={"@sarahdole"}
                    testimonial={"I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"}
                />
          </div>
      </>
  );
}
