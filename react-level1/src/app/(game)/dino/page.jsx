"use client";

const Dino = () => {
  

  return (
    <div className="min-h-screen flex items-center">
      <div className="h-64 w-full border-2 relative">
        <div
          className={`w-12 h-12 bg-black absolute bottom-0 transition-transform`}
        ></div>
      </div>
    </div>
  );
};

export default Dino;
