"use client";

import { useContact } from "@/hooks/useContact";

const service = [
    "Data Analysis Project",
    "Dashboards & Reporting",
    "Spreadsheet(Excel & Google Sheet) Training",
    "Custom Spreadsheet Templates",
    "For any other enquiries",
];

export default function Contact() {
    const { form, setForm, submitMessage, isLoading } = useContact();

    return (
        <section className="mt-12 border-t border-zinc-800 pt-8">
            <h1 className="mb-6 font-mono text-white">Contact</h1>

            <h2 className="mb-4 font-sans text-white">Get in touch for:</h2>
            <ul className="list-disc space-y-4 pl-5">
                {service.map((item) => (
                    <li key={item} className="font-mono text-sm text-zinc-300">
                        {item}
                    </li>
                ))}
            </ul>
            <form className="mt-8 flex flex-col gap-6" onSubmit={submitMessage}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-white">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={form.fullName}
                        required
                        onChange={(e) =>
                            setForm({ ...form, fullName: e.target.value })
                        }
                        className="rounded-lg bg-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-zinc-700 outline-none focus:ring-zinc-500"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-white">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        className="rounded-lg bg-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-zinc-700 outline-none focus:ring-zinc-500"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm text-white">
                        Phone Number
                    </label>
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <select
                            value={form.countryCode}
                            required
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    countryCode: e.target.value,
                                })
                            }
                            className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-sm text-zinc-100 ring-1 ring-zinc-700 outline-none focus:ring-zinc-500 sm:w-40"
                        >
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+234">🇳🇬 +234</option>
                            <option value="+233">🇬🇭 +233</option>
                            <option value="+254">🇰🇪 +254</option>
                            <option value="+27">🇿🇦 +27</option>
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+86">🇨🇳 +86</option>
                            <option value="+49">🇩🇪 +49</option>
                            <option value="+33">🇫🇷 +33</option>
                            <option value="+61">🇦🇺 +61</option>
                            <option value="+55">🇧🇷 +55</option>
                            <option value="+81">🇯🇵 +81</option>
                            <option value="+7">🇷🇺 +7</option>
                            <option value="+971">🇦🇪 +971</option>
                            <option value="+966">🇸🇦 +966</option>
                        </select>
                        <input
                            id="phone"
                            type="tel"
                            required
                            placeholder="801 234 5678"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            className="flex-1 rounded-lg bg-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-zinc-700 outline-none focus:ring-zinc-500"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm text-white">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Write your message here..."
                        required
                        value={form.message}
                        onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                        }
                        className="rounded-lg bg-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 ring-1 ring-zinc-700 outline-none focus:ring-zinc-500"
                    />
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className="cursor-pointer self-start rounded-lg bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
