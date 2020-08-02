import React from "react"
import { Card } from "./Card"

export type Post = {
  content: {
    title: string
    subtitle: string
    excerpt: string
    author: string
    img: React.ReactNode
  }
}

export const Post: React.FC<Post> = ({
  content = {
    title: ``,
    subtitle: ``,
    excerpt: ``,
    author: ``,
    img: null,
  },
}: Post) => {
  const { title, subtitle, excerpt, img } = content
  return (
    <Card
      content={{
        header: {
          title: title,
          subtitle: subtitle,
          excerpt: excerpt,
        },
        image: {
          img: img,
        },
      }}
    />
  )
}
