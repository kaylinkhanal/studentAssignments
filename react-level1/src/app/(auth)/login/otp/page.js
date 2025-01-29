import React from "react";

const Otp = () => {
  return (
    <div>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-700">
        <div className="rounded-xl bg-slate-300 p-8">
          <div className="mx-auto mb-8 flex items-center justify-center">
            <img
              className="h-14"
              src="https://icon-library.com/images/secure-icon-png/secure-icon-png-15.jpg"
              alt=""
            />
          </div>
          <form>
            <div>
              <h2 className="mb-6 text-center text-2xl font-bold text-purple-600">
                Enter OTP Code
              </h2>
              <input
                className="m-1 h-12 w-12 rounded-lg text-center text-2xl font-semibold text-purple-600 outline-purple-600"
                type="text" placeholder="0"
                maxLength={1}
              />
              <input
                className="m-1 h-12 w-12 rounded-lg text-center text-2xl font-semibold text-purple-600 outline-purple-600"
                type="text" placeholder="0"
                maxLength={1}
              />
              <input
                className="m-1 h-12 w-12 rounded-lg text-center text-2xl font-semibold text-purple-600 outline-purple-600"
                type="text" placeholder="0"
                maxLength={1}
              />
              <input
                className="m-1 h-12 w-12 rounded-lg text-center text-2xl font-semibold text-purple-600 outline-purple-600"
                type="text" placeholder="0"
                maxLength={1}
              />
              <input
                className="m-1 h-12 w-12 rounded-lg text-center text-2xl font-semibold text-purple-600 outline-purple-600"
                type="text" placeholder="0"
                maxLength={1} 
              />
            </div>
            <button type="submit" className="mb-8 mt-8 w-full rounded-md bg-purple-600 py-3 text-2xl font-bold text-white">
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
