import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GITHUB_TOKEN } from "@env";
import OptionCard from "./OptionCard";
import colours from "../config/colours";

const Quiz = () => {
  let language: String = "TypeScript";
  const apiUrl = `https://api.github.com/search/repositories?q=language:${language}&page=1&per_page=4`; // for now
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

      // console.log(data.items);
      setRepos(data.items);
    };

    fetchRepos();
  }, []);

  return (
    <View style={styles.quizContainer}>
      {/* Question here */}
      <View style={styles.question}>
        <Text style={styles.questionText}>
          Question <Text style={styles.questionNumberText}>06</Text>
          <Text style={styles.questionLeftOutText}>/20</Text>
        </Text>
      </View>
      {/* Breadcrums */}
      <View style={styles.questionCode}>
        <Text style={styles.questionCodeText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequuntur, quis saepe ullam quaerat sequi voluptate perspiciatis
          assumenda beatae possimus alias temporibus ducimus labore iusto,
          provident nihil cumque nostrum ipsum cupiditate eveniet incidunt hic
          quam necessitatibus? A quos dolores ab.
        </Text>
      </View>
      {repos.length ? (
        <View style={styles.optionContainer}>
          {repos.map((repo) => (
            <OptionCard repo={repo} key={Math.random()} />
          ))}
        </View>
      ) : (
        <Text>Loading</Text>
      )}
      <View style={styles.quizFooter}>
        <TouchableOpacity>
          <Text style={styles.nextText}>Quit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    backgroundColor: colours.dark,
    padding: 20,
    flex: 1,
    justifyContent: "center",
    // position: "absolute",
  },
  question: {
    marginBottom: 2,
  },
  questionText: {
    color: colours.white,
    fontSize: 22,
    fontWeight: "bold",
  },
  questionNumberText: {
    fontSize: 24,
    fontStyle: "italic",
  },
  questionLeftOutText: {
    color: colours.greyBorderColour,
  },
  questionCode: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  // for now
  questionCodeText: {
    color: colours.white,
    textAlign: "justify",
    // lineHeight: 10,
  },
  optionContainer: {},
  quizFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: colours.primary,
    textAlign: "center",
    padding: 10,
    paddingHorizontal: "20%",
    borderRadius: 10,
  },
  nextText: {
    fontSize: 16,
    fontWeight: "700",
    color: colours.white,
  },
  boldText: {},
});

export default Quiz;
