import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
        <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 backgroundMain">
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div
              id="campaigninfo"
              className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"
            >
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                Crypto Forage
                <br className="hidden md:block" />
                Crowd Funding
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat at odit quia consequuntur impedit totam illum quidem
                consectetur neque in inventore eligendi labore, quod doloribus
                corrupti laboriosam enim itaque harum.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707 5.293l-5-5a1 1 0 00-1.414 1.414L7.586 6 3.293 10.293a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414z" />
                </svg>
              </a>
            </div>
            <div
              id="campaignform"
              className="w-full max-w-xl xl:px-8 xl:w-5/12"
            >
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Campaign
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="title"
                      className="inline-block mb-1 font-medium"
                    >
                      Title
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({ ...campaign, title: e.target.value })
                        
                      }
                      placeholder="title"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="title"
                      name="title"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="description"
                      className="inline-block mb-1 font-medium"
                    >
                      Description
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({ ...campaign, description: e.target.value })
                      }
                      placeholder="description"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="description"
                      name="description"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="amount"
                      className="inline-block mb-1 font-medium"
                    >
                      Target Amount
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({ ...campaign, amount: e.target.value })
                      }
                      placeholder="amount"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="amount"
                      name="amount"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="deadline"
                      className="inline-block mb-1 font-medium"
                    >
                      Deadline
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({ ...campaign, deadline: e.target.value })
                      }
                      placeholder="Date"
                      required
                      type="date"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="deadline"
                      name="deadline"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      onClick={(e) => createNewCampaign(e)}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none newColor"
                    >
                      Create Campaign
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Create your Campaign for raise fund
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <svg
        className="absolute bottom-0 left-0 w-full h-24 text-black"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,160L30,176C60,192,120,224,180,229.3C240,235,300,213,360,186.7C420,160,480,128,540,117.3C600,107,660,117,720,133.3C780,149,840,171,900,165.3C960,160,1020,128,1080,117.3C1140,107,1200,117,1260,117.3C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default Hero;
