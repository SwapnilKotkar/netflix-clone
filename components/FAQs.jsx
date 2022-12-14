import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const FAQs = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    console.log(e);
    const { value } = e.target;
    setEmail(value);
  };

  const FAQData = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netlfix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center border-t-8 border-[#303030] p-10 md:p-20 bg-black">
        <div className="w-full">
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="w-full py-10 flex justify-center">
            <div className="w-full lg:w-2/3">
              {FAQData.map((currentObj, index) => (
                <div key={index} className=" bg-[#303030] mb-2 text-2xl">
                  <details closed>
                    <summary className="text-[1rem] md:text-lg lg:text-xl px-6 py-2 md:py-4 border-b-2 border-black cursor-pointer">
                      {currentObj.question}
                    </summary>
                    <div>
                      <p className="text-[1rem] md:text-lg lg:text-xl p-6">
                        {currentObj.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="lg:w-2/3">
              <h6 className="pb-4 text-sm md:text-xl text-center">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h6>
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[70%] md:w-[75%] bg-white px-2 py-2 md:py-4 text-black"
                  placeholder="Email address"
                  value={email}
                  onChange={handleChange}
                />
                <button className="bg-[#e50914] w-[30%] md:w-[25%] flex justify-center items-center">
                  <span className="text-sm md:text-md lg:text-xl">
                    Get Started
                  </span>
                  <span className="text-xl md:text-2xl">
                    <RiArrowRightSLine />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
