// @ts-nocheck
import { useState } from "react";

export function useNotification() {
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(false);

    const show = (text) => {
        setMessage(text);
        setVisible(true);
        setTimeout(() => setVisible(false), 2000);
    };

    return { message, visible, show };
}
