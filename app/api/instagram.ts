// export default async function handler(req, res) {
//     const { type, id } = req.query; // `type` define qué datos obtener
  
//     const BASE_URL = "https://graph.instagram.com";
//     const ACCESS_TOKEN = process.env.IG_TOKEN; // 🔒 Token oculto en variables de entorno
  
//     if (!ACCESS_TOKEN) {
//       return res.status(500).json({ error: "El token de Instagram no está configurado." });
//     }
  
//     let endpoint = `${BASE_URL}/me/media?fields=id,caption,media_type,media_url,permalink,children&access_token=${ACCESS_TOKEN}`;
  
//     if (type === "children" && id) {
//       endpoint = `${BASE_URL}/${id}/children?fields=id,media_url,media_type&access_token=${ACCESS_TOKEN}`;
//     }
  
//     try {
//       const response = await fetch(endpoint);
  
//       if (!response.ok) {
//         throw new Error(`Error HTTP: ${response.status}`);
//       }
  
//       const data = await response.json();
//       return res.status(200).json(data);
//     } catch (error) {
//       console.error("Error al obtener datos de Instagram:", error);
//       return res.status(500).json({ error: "Error al obtener datos de Instagram." });
//     }
//   }
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface InstagramPost {
  id: string;
  media_url: string;
  caption?: string;
  permalink: string;
  media_type: "IMAGE" | "CAROUSEL_ALBUM" | "VIDEO";
  children?: { id: string; media_url: string; media_type: string }[];
}

interface InstagramFeedProps {
  max_words?: number;
  bg_color?: string;
  bg_color2?: string;
  text_color?: string;
  arrow_color?: string;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({
  max_words = 20,
  bg_color = "#ffffff",
  bg_color2 = "#f8f8f8",
  text_color = "#000000",
  arrow_color = "#000000",
}) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch("/api/instagram?type=posts");

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();

        if (data?.data) {
          const processedPosts = await Promise.all(
            data.data.slice(0, 5).map(async (post) => {
              if (post.media_type === "CAROUSEL_ALBUM") {
                const childrenResponse = await fetch(`/api/instagram?type=children&id=${post.id}`);
                const childrenData = await childrenResponse.json();
                post.children = childrenData.data;
              }
              return post;
            })
          );

          setPosts(processedPosts);
        } else {
          console.warn("No se encontraron publicaciones.");
        }
      } catch (error) {
        console.error("Error al obtener publicaciones de Instagram:", error);
      }
    };

    fetchInstagramPosts();
  }, []);

  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  return (
    <section className="py-12 relative" style={{ backgroundColor: bg_color, color: text_color }}>
      <div className="container mx-auto px-6 text-center relative">
        <h2 className="text-4xl font-bold mb-8">Últimas Publicaciones de Instagram</h2>

        {posts.length > 3 ? (
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              navigation={{
                prevEl: ".swiper-button-prev-posts",
                nextEl: ".swiper-button-next-posts",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-posts",
              }}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              className="relative pb-6"
              onSlideChange={(swiper) => {
                const prevButton = document.querySelector(".swiper-button-prev-posts");
                const nextButton = document.querySelector(".swiper-button-next-posts");

                if (prevButton) {
                  prevButton.classList.toggle("opacity-50", swiper.isBeginning);
                  prevButton.classList.toggle("pointer-events-none", swiper.isBeginning);
                }

                if (nextButton) {
                  nextButton.classList.toggle("opacity-50", swiper.isEnd);
                  nextButton.classList.toggle("pointer-events-none", swiper.isEnd);
                }
              }}
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block shadow-lg rounded-lg overflow-hidden"
                    style={{ backgroundColor: bg_color2 }}
                  >
                    <div className="relative w-full h-80 overflow-hidden flex items-center justify-center">
                      {post.media_type === "CAROUSEL_ALBUM" && post.children ? (
                        <Swiper
                          modules={[Navigation, Pagination]}
                          spaceBetween={10}
                          slidesPerView={1}
                          navigation
                          pagination={{ clickable: true }}
                          className="swiper-album"
                        >
                          {post.children.map((child) => (
                            <SwiperSlide key={child.id}>
                              <img src={child.media_url} alt="Imagen de carrusel" className="w-full h-auto max-h-full object-contain" />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : post.media_type === "VIDEO" ? (
                        <video controls className="w-full h-auto max-h-full object-contain">
                          <source src={post.media_url} type="video/mp4" />
                          Tu navegador no soporta el video.
                        </video>
                      ) : (
                        <img src={post.media_url} alt={post.caption || "Publicación de Instagram"} className="w-full h-auto max-h-full object-contain" />
                      )}
                    </div>

                    <div className="p-4" style={{ backgroundColor: bg_color2, color: text_color }}>
                      <p className="text-sm">{post.caption ? truncateText(post.caption, max_words) : "Sin descripción"}</p>
                      {post.caption && (
                        <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs font-bold hover:underline">
                          Leer más
                        </a>
                      )}
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="swiper-button-prev-posts absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 opacity-100 transition-opacity"
              style={{ color: arrow_color }}
            >
              ◀
            </button>
            <button
              className="swiper-button-next-posts absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 opacity-100 transition-opacity"
              style={{ color: arrow_color }}
            >
              ▶
            </button>
          </div>
        ) : (
          <p>No hay suficientes publicaciones para deslizar.</p>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;
