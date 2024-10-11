import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/images/ML_badge.png",
    },
    {
      title: "Valley of Life",
      src: "/images/Cybersecurity.png",
    },
    {
      title: "Sala behta hi jayega",
      src: "/images/AWS.png",
    },
  ];

  return (
    <section id="certificates">
      <FocusCards cards={cards} />
    </section>
  );
}
