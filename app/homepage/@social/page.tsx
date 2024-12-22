"use client";

import React, {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';

import { Skeleton } from '@mantine/core';

type InstagramPost = {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url?: string;
};

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/instagram", { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }
        const data = await res.json();

        setPosts(data.data || []);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const lastThree = posts.slice(0, 3);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Latest from Instagram</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <Skeleton></Skeleton>
        {lastThree.map((post) => (
          <div key={post.id} className="flex-1 border p-4 rounded">
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <Image
                src={post.media_url}
                alt={post.caption || "Instagram post"}
                className="w-full h-auto object-cover"
                width={100}
                height={100}
              />
            </a>
            {post.caption && (
              <p className="mt-2 text-sm text-gray-700">{post.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
