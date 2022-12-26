import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistic/Statistic";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { useState } from "react";
export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const total = good + bad + neutral;
  const positivePercentage = Math.round((good / total) * 100);
  const onClickBtn = (e) => {
    switch (e) {
      case "good": return setGood(good + 1)
      case "bad": return setBad(bad + 1)
      case "neutral": return setNeutral(neutral + 1)
      default: return;
    }
  }
  return (<div style={{ textAlign: "center" }}>
    <Section title={"Leave Feedback"}>
      <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={onClickBtn} />
      <Section title={"Statistic"}></Section>
      {total ? (<Statistic good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage} />) : <Notification message="There is no feedback" />}
    </Section>
  </div>)
}


