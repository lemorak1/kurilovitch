"use client";

import React, { useState, useEffect } from "react";

const InstagramFeed = ({ accessToken }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`
        );
        const data = await response.json();

        // Solo tomamos las 3 primeras publicaciones
        const latestPosts = data.data.slice(0, 3);
        setPosts(latestPosts);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, [accessToken]);

  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Últimas Publicaciones de Instagram</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
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
                <p className="text-sm text-gray-600">{post.caption || "Sin descripción"}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
