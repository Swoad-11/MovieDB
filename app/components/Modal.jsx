"use client";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <>
      <dialog
        ref={modalRef}
        onClose={onHide}
        className="w-[75%] shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-slate-300/20 dark:bg-opacity-95 dark:text-gray-100"
      >
        <span
          onClick={onHide}
          className="flex justify-end cursor-pointer text-2xl dark:text-gray-100 text-black"
        >
          <IoMdCloseCircle />
        </span>
        {children}
      </dialog>
    </>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
