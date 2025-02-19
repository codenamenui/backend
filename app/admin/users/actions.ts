import { cookies } from "next/headers";

export async function handleAdd(formData: FormData) {
    "use server";
    const sendId = async () => {
        const cookieStore = cookies();
        const id = formData.get("id") as string;
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/add`,
            {
                method: "POST",
                headers: {
                    Cookie: cookieStore.toString(),
                    "Content-Type": "application/json",
                },
                cache: "no-store",
                body: JSON.stringify({ id }),
            }
        );
        return res;
    };
    sendId();
}
