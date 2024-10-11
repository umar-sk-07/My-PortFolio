import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Machine Learning Badge",
      src: "/images/ML_badge.png",
      link: "https://www.credly.com/badges/aa0ca7bb-6ae8-447f-b532-8dd08a96d456/print", // Add the link here
    },
    {
      title: "CyberSecurity Threats Vectors and Mitigation",
      src: "/images/Cybersecurity.png",
      link: "https://www.coursera.org/account/accomplishments/verify/NSGS36RVUB8P", // Add the link here
    },
    {
      title: "Introduction To AWS",
      src: "/images/AWS.png",
      link: "https://www.coursera.org/account/accomplishments/verify/NT8CFY1VR65U", // Add the link here
    },
  ];

  return (
    <section id="certificates">
      <FocusCards cards={cards} />
    </section>
  );
}
