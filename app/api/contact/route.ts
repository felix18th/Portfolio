import { Resend } from "resend";

export async function POST(req: Request) {
    const body = await req.json();
    const { fullName, email, countryCode, phone, message } = body;
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { data, error } = await resend.emails.send({
            from: "Portfolio <hello@resend.dev>",
            to: "alexferanmi390@gmail.com",
            subject: `New Contact Message from ${fullName}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
