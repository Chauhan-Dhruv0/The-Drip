import React from 'react';

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Help Center
          </h1>

          <div className="space-y-6">
            <div className="group cursor-pointer p-5 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-md">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Account Setup</h2>
                  <p className="text-gray-600 mt-1 text-sm">
                    Click the Sign-Up button and fill in your information to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer p-5 rounded-lg border border-gray-200 hover:border-purple-200 hover:bg-purple-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Password Help</h2>
                  <p className="text-gray-600 mt-1 text-sm">
                    Use the "Forgot Password" link on the login page to reset.
                  </p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer p-5 rounded-lg border border-gray-200 hover:border-pink-200 hover:bg-pink-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-2 rounded-md">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Contact Support</h2>
                  <p className="text-gray-600 mt-1 text-sm">
                    Email us at support@example.com or call +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Need more help? Visit our <a href="/faq" className="text-blue-600 hover:underline">FAQ page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;