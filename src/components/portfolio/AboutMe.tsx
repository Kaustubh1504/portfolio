import ChatReplyBubble from "../ChatReplyBubble";
import ProfileCard from "../profileCard";

const AboutMe = () => {
  const profileData = {
    name: "Kaustubh Gharat",
    title: "Software Engineer",
    bio: "",
    avatarUrl: "/photo.jpg",
    intro: "Hello! 👋 I'm a recent engineering graduate from Mumbai with a passion for turning creative ideas into reality. 🚀\n\nMy journey has involved making financial software ::more user-friendly:: at Oracle, and contributing to an ::innovative project:: that uses drones 🚁 to monitor crop health for farmers. I thrive on unique challenges, like helping build an app for a Hollywood director that brings true crime stories to life through ::immersive augmented reality::.\nUltimately, I'm driven to build things that solve real-world problems and create ::meaningful experiences:: for people. ✨"
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
