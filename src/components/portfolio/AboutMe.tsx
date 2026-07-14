import ChatReplyBubble from "../ChatReplyBubble";
import ProfileCard from "../profileCard";

const AboutMe = () => {
  const profileData = {
    name: "Kaustubh Gharat",
    title: "Software Engineer",
    bio: "",
    avatarUrl: "/photo.jpg",
    intro: "Hello! 👋 I'm Kaustubh, an MS Computer Science student at Northeastern University and a ::JN Tata Scholar::.\n\nI currently work on ::biomedical NLP:: at the Barabasi Lab, fine-tuning SciBERT and running GPT-4 pipelines over 1M+ documents. Before this, I was a ::Software Developer at Oracle::, where I built UI screens and Spring Boot microservices for financial products.\n\nOn the side, I build things like a voice-driven robot simulator, a self-healing 6G network, and an AI crypto wallet. I also led a ::$25,000 IEEE-funded research project:: using drones 🚁 for crop health monitoring, with 2 published papers and a patent filed.\n\nI like working across the stack: frontend, backend, ML, and ::AI agents::. ✨"
  };

  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="pt-2">
        <ProfileCard
          photoUrl={profileData.avatarUrl}
          name={profileData.name}
          isVerified={true}
          description={profileData.bio}
        />
      </div>
      <div className="overflow-hidden"> {/* Add this class here */}
        <ChatReplyBubble reply={profileData.intro} />
      </div>
    </div>
  );
};

export default AboutMe;
