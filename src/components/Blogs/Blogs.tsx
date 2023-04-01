import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardSkeleton, WithLoad } from "../Common";
import { IMediumItem } from "./Interfaces";

const MEDIUM_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rajithasanjayamal";

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<{
    items: Array<IMediumItem>;
    isLoading: boolean;
  }>({
    items: [],
    isLoading: false,
  });
  const { items, isLoading } = blogs;
  useEffect(() => {
    setBlogs({ items: [], isLoading: true });
    getBlogs();
  }, []);

  const getBlogs = () => {
    axios
      .get(MEDIUM_URL)
      .then((response) => {
        const posts = response.data.items.filter(
          (post: any) => post.categories.length > 0
        );
        setBlogs({ items: posts, isLoading: false });
      })
      .catch((error) => {
        setBlogs({ items: [], isLoading: false });
      });
  };

  const onClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        margin: "10px",
        paddingLeft: "125px",
      }}
    >
      {isLoading && <CardSkeleton />}
      {items.map(({ title, thumbnail, link }: IMediumItem, index: number) => (
        <Card
          sx={{ width: "250px", backgroundColor: "#f0f0e8", height: "auto" }}
          key={index}
          onClick={() => onClick(link)}
        >
          <CardActionArea>
            <Box sx={{ width: "250px", height: "150px", overflow: "hidden" }}>
              <CardMedia
                component="img"
                height="auto"
                image={thumbnail}
                alt="No Image"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default WithLoad(Blogs);
