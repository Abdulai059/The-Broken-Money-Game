// @ts-nocheck
'use client'

import { createContext, useContext, useState, cloneElement } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

export default function Modal({ children }) {
    const [openName, setOpenName] = useState("");
    const open = setOpenName;
    const close = () => setOpenName("");

    return (
        <ModalContext.Provider value={{ openName, open, close }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({ children, opens }) {
    const { open } = useContext(ModalContext);
    return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext);
    if (name !== openName) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end">
            <div className="w-full max-w-md mx-auto rounded-t-2xl shadow-2xl animate-slideUp relative">
                <button onClick={close} className="absolute hidden top-4 right-4 text-white/80 hover:text-white text-2xl">
                    ✖️
                </button>
                {cloneElement(children, { onClose: close })}
            </div>
        </div>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;
