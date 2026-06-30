import { useState } from "react";
import { toast } from "sonner";

export function useContact() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        countryCode: "+234",
        phone: "",
        message: "",
    });

    const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            toast.success("Message sent", {
                style: {
                    background: "#22C55E",
                    color: "white",
                    fontSize: "16px",
                },
            });

            setForm({
                fullName: "",
                email: "",
                countryCode: "+234",
                phone: "",
                message: "",
            });
        } catch (error) {
            toast.error(`Failed: ${error}`, {
                style: {
                    background: "#FEE2E2",
                    color: "#7F1D1D",
                    fontSize: "15px",
                },
            });
        } finally {
            setIsLoading(false);
        }
    };

    return { form, setForm, submitMessage, isLoading };
}
