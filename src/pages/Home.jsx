import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  const textVariants = {
    hidden: { x: "100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <>
      <motion.div
        className="sm:flex items-center max-w-screen-xl mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="sm:w-1/2 p-10" variants={imageVariants}>
          <div className="image object-center text-center">
          <img src="/assets/aboutuspic.webp" alt="Company Logo" />

          </div>
        </motion.div>
        <motion.div className="sm:w-1/2 p-5" variants={textVariants}>
          <div className="text">
            <span className="text-gray-500 border-b-2 border-[--Purple] uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
               <span className="">Pfeifer Bros.</span>
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif'}} className="text-gray-700">
              Meet the driving force behind Pfeifer Bros. – Jakob and Mikel
              Pfeifer. As proud graduates of SMU, these two visionary brothers
              bring a wealth of knowledge and expertise to the world of web
              development. Specializing in full-stack development, Jakob and
              Mikel combine their passion for technology with a commitment to
              excellence.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <section className="">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="font-heading mb-8 bg-[--Purple] text-white px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest  uppercase title-font text-center">
                Why choose us?
              </h2>
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-center text-gray-900 sm:text-4xl">
               Needing a website? Needing guidance? Pfeifer Bros. has you covered!
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif'}} className="mt-4 max-w-2xl text-lg text-center text-gray-500 mx-auto">
              Transforming visions into vibrant websites. With a passion for innovation and deep software expertise, Pfeifer Bros. delivers exceptional, user-friendly, digital experiences. Choose us for tailored, cutting-edge, web development.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/503163/api-settings.svg" alt="API Icon" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Integrate APIs</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                  Seamlessly connect and enhance your digital ecosystem with our expert API integration services.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div
                      className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg"/ >

                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Free Consultation!
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">Unlock the potential of your ideas with a free consultation from Pfeifer Bros. Let's discuss your vision and explore how our expertise can elevate your digital presence. Schedule your consultation today, and let's turn your goals into reality.
                  </dd>
                </div>
                <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/416639/website-ui-web.svg"/ >
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Website Performance Optimization
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Boost your website's speed and efficiency with our Performance Optimization services. Elevate user experience, enhance loading times, and optimize overall functionality.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/494032/communication-2.svg"/ >

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Reliable Communication
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Experience reliable communication at its' best. Pfeifer Bros. ensures seamless and transparent interactions, providing a trustworthy partnership for your business needs.
                        </dd>
                    </div>
                {/* Add more items as needed */}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
