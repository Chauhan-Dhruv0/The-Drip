import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 transition-all duration-300 hover:shadow-xl">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Terms & Conditions
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-purple-500 pl-4 italic">
            By using this site, you agree to abide by our terms and conditions. Please read them carefully before continuing.
          </p>

          <div className="space-y-8">
            <section className="animate-slide-in-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-600 leading-loose pl-11">
                Your access to and use of our services is conditioned upon your acceptance of and compliance with these terms. 
                These apply to all visitors, users, and others who wish to access or use our platform.
              </p>
            </section>

            <div className="border-t border-gray-200 my-8"></div>

            <section className="animate-slide-in-left delay-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
              </div>
              <p className="text-gray-600 leading-loose pl-11">
                We value your privacy. Your information is kept confidential and is used only as described in this policy.
                We maintain the highest standards to protect your personal data through encryption and secure storage methods.
              </p>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg pl-11">
                <p className="text-blue-800 italic">
                  ✦ We do not share your data with third parties without your explicit consent.
                </p>
                <p className="text-blue-800 italic mt-2">
                  ✦ Regular security audits ensure compliance with international data protection regulations.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;