import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet";

export interface ITweet {
  id: string;
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
  createAt: number;
}

const Wrapper = styled.div``;

export default function Timeline() {
  const [tweets, setTweet] = useState<ITweet[]>([]);
  const fetchTweet = async () => {
    const tweetsQuery = query(
      collection(db, "tweets"),
      orderBy("createAt", "desc")
    );
    const spanshot = await getDocs(tweetsQuery);
    const tweets = spanshot.docs.map((doc) => {
      const { tweet, createAt, userid, username, photo } = doc.data();
      return {
        tweet,
        createAt,
        userid,
        username,
        photo,
        id: doc.id,
      };
    });
    setTweet(tweets);
  };
  useEffect(() => {
    fetchTweet();
  }, []);
  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}
