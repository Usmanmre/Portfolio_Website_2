import React from 'react'
import client1 from "../Images/client1.png";
import client2 from "../Images/client2.png";


const Testimonials = () => {
  return (
    <div>
      <section id='reviews' className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <h1 className="text-3xl font-medium title-font text-white mb-12 text-center ">
              See How We’ve{" "}
              <span className="text-yellow-500 underline font-bold">
                Made a Difference
              </span>{" "}
            </h1>
    <div className="flex flex-wrap  -m-4">
      <div className="p-4 md:w-1/2   w-full">
        <div className="h-full bg-slate-900 p-8 rounded">
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-yellow-500 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
          <p className="leading-relaxed text-slate-300 mb-6">
                    Usman is THE guy for anything you need! If I have a project
                    type I'm unsure he works on, I ask him, and he's always
                    happy to jump in and help! As long as Usman is willing to
                    work with me, he's my guy!!!.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={client1}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4 items-start">
                      <span className="title-font font-medium text-white">
                        Angelena
                      </span>
                      <span className="text-gray-500 text-sm">Coach</span>
                    </span>
          </a>
        </div>
      </div>


      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-slate-900 p-8 rounded">
         <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-yellow-500 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-slate-300 mb-6">
                  If you are looking for someone to design your brand logo
                    with guidelines, this is your guy. I am so super satisfied
                    with the amazing experience and his exceptional delivery.
                    Will def. be ordering here again. You are amazing and thanks
                    for the amazing help and sick results. Thanks!
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={client2}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4 items-start">
                      <span className="title-font font-medium text-white">
                      Alexander
                      </span>
                      <span className="text-gray-500 text-sm">Entrepreneur</span>
                    </span>
          </a>
        </div>
      </div>

      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-slate-900 p-8 rounded">
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-yellow-500 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-slate-300 mb-6">
                  Speedy delivery, excellent quality and service, I would highly recommend his talents to anyone looking for excellence in their final product delivery! Five stars all the way for my experience here!! Thank YOU!!

                  </p>
                  <a className="inline-flex items-center">
                  <div className="bg-yellow-600 rounded-full p-2 inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <span className="flex-grow flex flex-col pl-4 items-start">
                      <span className="title-font font-medium text-white">
                      Nadene joy
                      </span>
                      <span className="text-gray-500 text-sm">Entrepreneur</span>
                    </span>
          </a>
        </div>
      </div>

      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-slate-900 p-8 rounded">
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-yellow-500 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-slate-300 mb-6">
                  Usman did a great job on my project. He was very responsive
                    and helpful. I will definitely work with him again for my
                    design needs!
                  </p>
                  <a className="inline-flex items-center">
                  <div className="bg-yellow-600 rounded-full p-2 inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <span className="flex-grow flex flex-col pl-4 items-start">
                      <span className="title-font font-medium text-white">
                      Yasmeen
                      </span>
                      <span className="text-gray-500 text-sm">Entrepreneur</span>
                    </span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Testimonials
