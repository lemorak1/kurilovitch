import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { type, id } = req.query;

    const BASE_URL = "https://graph.instagram.com";
    const ACCESS_TOKEN = process.env.IG_TOKEN; // 🔒 Token oculto en variables de entorno

    if (!ACCESS_TOKEN) {
        return res.status(500).json({ error: "El token de Instagram no está configurado." });
    }

    let endpoint = `${BASE_URL}/me/media?fields=id,caption,media_type,media_url,permalink,children&access_token=${ACCESS_TOKEN}`;

    if (type === "children" && id) {
        endpoint = `${BASE_URL}/${id}/children?fields=id,media_url,media_type&access_token=${ACCESS_TOKEN}`;
    }

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        if (data?.data) {
            // ✅ Definir el tipo `post` explícitamente
            interface InstagramPost {
                id: string;
                media_url: string;
                caption?: string;
                permalink: string;
                media_type: "IMAGE" | "CAROUSEL_ALBUM" | "VIDEO";
                children?: { id: string; media_url: string; media_type: string }[];
            }

            const processedPosts = await Promise.all(
                data.data.slice(0, 5).map(async (post: InstagramPost) => {
                    if (post.media_type === "CAROUSEL_ALBUM") {
                        const childrenResponse = await fetch(
                            `${BASE_URL}/${post.id}/children?fields=id,media_url,media_type&access_token=${ACCESS_TOKEN}`
                        );
                        const childrenData = await childrenResponse.json();
                        post.children = childrenData.data;
                    }
                    return post;
                })
            );

            return res.status(200).json({ data: processedPosts });
        } else {
            return res.status(200).json({ data: [] });
        }
    } catch (error) {
        console.error("Error al obtener datos de Instagram:", error);
        return res.status(500).json({ error: "Error al obtener datos de Instagram." });
    }
}
