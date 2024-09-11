import React from "react";

const Stats = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Data-Driven{" "}
          <span className="text-yellow-500 font-bold"> Success</span>
        </h1>

        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
          Our achievements are backed by numbers that tell a story of
          excellence. From increased engagement to remarkable growth, our data
          highlights the tangible impact of our strategies and innovations.
          Discover how our results speak for themselves and drive us forward.{" "}
        </p>
      </div>
      <div className="flex flex-wrap  justify-center -m-4 text-center">
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-yellow-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M15 15c-1.5 1.5-3.5 1.5-5 0" />
              <path d="M9 10h.01" />
              <path d="M15 10h.01" />
            </svg>
            <h2 className="title-font font-medium text-3xl text-yellow-500">
              100+
            </h2>
            <p className="leading-relaxed text-slate-100">Happy Customers</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-yellow-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M9 12l2 2 4-4" />
            </svg>

            <h2 className="title-font font-medium text-3xl text-yellow-500">
              200+
            </h2>
            <p className="leading-relaxed text-slate-100">Successfull Projects</p>
          </div>
        </div>

        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="text-yellow-500 w-12 h-12 mb-3 inline-block"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
            </svg>

            <h2 className="title-font font-medium text-3xl text-yellow-500">
              {" "}
              Fiverr
            </h2>
            <p className="leading-relaxed text-slate-100">Level 2 Seller </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
