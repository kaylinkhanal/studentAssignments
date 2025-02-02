import { EllipsisVertical, Fullscreen, Search, Send } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";

const ChatUi = ({ currentUserDetails }) => {
  let allMessage = currentUserDetails?.messages || [];

  return (
    <div className="flex flex-col h-[100%]">
      {currentUserDetails ? (
        <>
          <header
            key={currentUserDetails.userId}
            className="flex items-center justify-between bg-black text-white border-b-2 border-black rounded-md h-[10%]"
          >
            <div className="flex gap-5 items-center p-2">
              <div>
                <Image
                  src={currentUserDetails.profilePicture}
                  width={60}
                  height={60}
                  className="rounded-full"
                  alt="profile pic"
                />
              </div>

              <div className="font-semibold font-sans text-lg">
                {currentUserDetails.username}
              </div>
            </div>

            <div className="flex p-2">
              <Search className="mr-6" />
              <EllipsisVertical />
            </div>
          </header>

          <div className="relative h-[90%] flex flex-col">
            <main className="p-4 flex-grow overflow-y-auto">
              {allMessage.length > 0 ? (
                allMessage.map((item, index) => (
                  <div
                    key={item.messageId || index}
                    className="p-2 bg-gray-200 rounded-md mb-2"
                  >
                    {item.content || "No message content"}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No messages available</p>
              )}
            </main>

            <section className="absolute flex items-center justify-between bottom-4 left-5 w-[90%] h-[60] p-5 shadow-md bg-black text-white rounded-md">
              <Input
                className="relative placeholder:text-white shadow-none w-[90%]"
                type="text"
                placeholder="message"
              />

              <Send />
            </section>
          </div>
        </>
      ) : (
        <Image
          src={"/welcome.jpg"}
          width={100}
          height={50}
          alt="what is up"
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default ChatUi;
