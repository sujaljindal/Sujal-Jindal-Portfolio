import React, { useState } from "react";
import { publications } from "../../data";

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);

  const handleOpenModal = (publication) => {
    setSelectedPublication(publication);
  };

  const handleCloseModal = () => {
    setSelectedPublication(null);
  };

  return (
    <section
      id="publications"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PUBLICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Publications Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {publications.map((pub) => (
          <div
            key={pub.id}
            onClick={() => handleOpenModal(pub)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {pub.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {pub.description}
              </p>
              <a
                  href={pub.DOI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center font-semibold"
                >
                  View Publication (DOI)
                </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPublication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="lg:p-8 p-6">
              <h3 className="lg:text-3xl font-bold text-white mb-4">
                {selectedPublication.title}
              </h3>
              <p className="text-gray-400 mb-6 lg:text-base text-sm">
                {selectedPublication.description}
              </p>

              {selectedPublication.DOI && (
                <a
                  href={selectedPublication.DOI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center font-semibold"
                >
                  View Publication (DOI)
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Publications;
