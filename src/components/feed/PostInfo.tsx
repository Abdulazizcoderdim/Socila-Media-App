"use client";

import { deletePost } from "@/lib/actions";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const PostInfo = ({ postId }: { postId: string }) => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const deletePostWithId = deletePost.bind(null, postId);

  return (
    <div className="relative">
      <div ref={buttonRef}>
        <Image
          src="/more.png"
          width={16}
          height={16}
          alt=""
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer"
        />
      </div>
      {open && (
        <div
          ref={modalRef}
          className="absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-xl z-30"
        >
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Re-post</span>
          <form action={deletePostWithId}>
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostInfo;