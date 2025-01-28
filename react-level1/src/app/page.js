"use client";

const details = {
  name: 'mula',
  cast: 'sag',
  occupation: 'thaxina', 
  age: 59,
  image: "https://i.imgur.com/yXOvdOSs.jpg"
}

function Contact() {
  return (
    <div>
      <button className="border-2 border-black">contact mula sag</button>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <h1>{details.name} {details.cast}</h1>
      <img
        src={details.image}
        width={60}
        height={60}
        alt="Photo"
      />
      <Contact />
    </div>
  );
}
