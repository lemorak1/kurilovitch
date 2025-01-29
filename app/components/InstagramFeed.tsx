"use client";

import React, { useState, useEffect } from "react";

interface InstagramFeedProps {
  accessToken: string | undefined;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ accessToken }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [token, setToken] = useState(accessToken);

  console.log("Token recibido en el componente:", accessToken);

  // 🔥 Esto forzará que `useEffect` detecte cambios en el token
  useEffect(() => {
    console.log("Entra a effect una vez", accessToken)
    if (accessToken && accessToken !== token) {
      console.log("Actualizando token en el estado:", accessToken);
      setToken(accessToken);
    }
  }, []);

  useEffect(() => {
    if (!token) {
      console.warn("Token aún no disponible, esperando...");
      return;
    }

    const fetchInstagramPosts = async () => {
      try {
        console.log("Haciendo petición con el token:", token);

        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${token}`
        );

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("Respuesta de Instagram API:", data);

        if (data?.data) {
          setPosts(data.data.slice(0, 3));
        } else {
          console.warn("No se encontraron publicaciones.");
        }
      } catch (error) {
        console.error("Error al obtener publicaciones de Instagram:", error);
      }
    };

    fetchInstagramPosts();
  }, [token]); // Ahora se ejecutará cuando `token` cambie

  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Últimas Publicaciones de Instagram
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={post.media_url}
                  alt={post.caption || "Publicación de Instagram"}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">
                    {post.caption || "Sin descripción"}
                  </p>
                </div>
              </a>
            ))
          ) : (
            <p>No hay publicaciones disponibles.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
