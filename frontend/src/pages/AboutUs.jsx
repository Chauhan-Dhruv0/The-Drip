import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Our Vision
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto border-l-4 border-blue-500 pl-4 italic">
              Pioneering digital solutions that empower generations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <section className="animate-slide-in-left">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Journey</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Founded in 2015, we've grown from a passionate startup to an industry leader, serving over 1M+ users worldwide. 
                      Our evolution continues through constant innovation and user-centric development.
                    </p>
                  </div>
                </div>
              </section>

              <section className="animate-slide-in-left delay-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-purple-100 p-3 rounded-xl shrink-0">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Core Values</h2>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        User-first philosophy in every decision
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Sustainable and ethical innovation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Transparent and collaborative culture
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              {/* <section className="animate-slide-in-left delay-200">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">By the Numbers</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                      <span>Active Users</span>
                      <span className="font-bold text-2xl">1M+</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                      <span>Team Members</span>
                      <span className="font-bold text-2xl">150+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Countries Served</span>
                      <span className="font-bold text-2xl">50+</span>
                    </div>
                  </div>
                </div>
              </section> */}

              <section className="animate-slide-in-left delay-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-pink-100 p-3 rounded-xl shrink-0">
                    <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Team</h2>
                    <p className="text-gray-600 leading-relaxed">
                      A diverse collective of visionaries, engineers, and creatives driving digital transformation. 
                      United by curiosity and commitment to excellence.
                    </p>
                    <div className="mt-4 flex space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                      <div className="w-10 h-10 rounded-full bg-purple-500"></div>
                      <div className="w-10 h-10 rounded-full bg-pink-500"></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;