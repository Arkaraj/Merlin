import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GITHUB_TOKEN } from "@env";

const Quiz = () => {
  let language: String = "TypeScript";
  const apiUrl = `https://api.github.com/search/repositories?q=language:${language}&page=1&per_page=30`;
  // Research
  // https://api.github.com/legacy/repos/search/Go?language=Go
  // https://api.github.com/user/repos?page=1&per_page=2
  // https://api.github.com/search/repositories?q=language:javascript&page=1&per_page=10&sort=stars
  // https://api.github.com/search/repositories?q=stars:>100000

  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      });

      const data = await res.json();

      console.log(data.items);
      setRepos(data.items);
    };

    fetchRepos();
  }, []);

  return (
    <View>
      {repos.length ? (
        <>
          <Text>Quizzz</Text>
          {repos.map((repo) => (
            <Text>{repo.html_url}</Text>
          ))}
        </>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Quiz;
