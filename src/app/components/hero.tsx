import Image from 'next/image';
import { SparklesText } from './SparklesText';
import { Button } from '@nextui-org/react';

const Hero: React.FC = () => {
  const aboutMeContent = 
    "Pursuing my Bachelor's in Computer Engineering from Vishwakarma University. " +
    "I am a seasoned Full Stack Developer, well-versed in the intricacies of web development and Python. " +
    "Beyond my coding prowess, I delve into the realms of cloud computing, with a keen interest in AWS. " +
    "My journey includes mastering the nuances of Java, adding depth to my programming toolkit. " +
    "Dedicated to crafting innovative solutions, I am committed to staying on the cutting edge of technology and contributing to impactful projects. " +
    "Let's embark on a journey of digital transformation together! ";

  const profilePicUrl = "/images/Selfie.jpg";

  return (
    <div id="about" className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 items-start p-4 md:p-20 gap-6 bg-black text-white dark:text-white">
      {/* Left Side - Text Content */}
      <div className="col-span-1 space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-4xl mb-4 text-white dark:text-white max-w-4xl rounded-lg border-4 md:border-8 border-indigo-500/100 text-center bg-indigo-500 font-bold">
          <SparklesText text="ABOUT ME" />
        </h2>
        <p className="text-sm md:text-lg text-black dark:text-white">{aboutMeContent}</p>
        <ul
          className="list-disc text-left mb-4 ml-4 text-indigo-500 animate__animated animate__slideInRight text-sm md:text-base"
        >
          <li>From: Pune, India</li>
          <li>Age: 21</li>
          <li>Gender: Male</li>
        </ul>
        <div className="d-grid gap-2 d-md-flex flex justify-start">
        <Button
          as="a"
          href="https://umar-sk-07.github.io/Resume/"
          color="secondary"
          variant="shadow"
          className="bg-indigo-500 p-4 rounded-lg font-bold pb-10"
        >
          MY RESUME
        </Button>
      </div>
      </div>

      {/* Right Side - Image */}
      <div className="col-span-1 flex justify-center items-center">
        <div className="max-w-xs md:max-w-md">
          <Image
            src={profilePicUrl}
            alt="Profile Picture"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
