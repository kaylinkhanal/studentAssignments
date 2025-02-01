import Image from "next/image";
import { Input } from "@/components/ui/input";
import React from "react";
import { EllipsisVertical } from "lucide-react";

const ChatHead = () => {
  return (
    <div className="flex flex-col gap-5 w-full sm:w-[400px]">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">Chats</p>

        <div className="flex gap-4">
          <button className="mr-8">
            <Image
              src={"/new-message.png"}
              width={25}
              height={30}
              alt="New-chat"
            />
          </button>
          <div>
            <EllipsisVertical />
          </div>
        </div>
      </div>

      <div>
        <Input
          type="search"
          placeholder="Search"
          className="w-full bg-black placeholder:text-white placeholder:text-lg h-[40]"
        />
      </div>
    </div>
  );
};

export default ChatHead;
