// @ts-nocheck
'use client'

import { useNotification } from "@/hook/useNotification";
import Modal from "@/components/ui/Modal";
import Notification from "./Notification";
import TopBar from "./TopBar";

export default function Navbar() {
    const notification = useNotification();

    return (
        <>
            <Modal>
                <div className="w-full max-w-[900px] relative">
                    <TopBar notify={notification.show} />
                </div>
            </Modal>
            <Notification {...notification} />
        </>
    );
}
