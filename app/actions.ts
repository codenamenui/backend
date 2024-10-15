export const checkPriviliege = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/check`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            next: { revalidate: 10 },
        }
    );

    const data = res;
    return data;
};