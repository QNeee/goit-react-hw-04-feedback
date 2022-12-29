import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistic/Statistic";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { useState } from "react";
export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 });
  const { good, bad, neutral } = feedback;
  const total = good + bad + neutral;
  const positivePercentage = Math.round((good / total) * 100);
  const onClickBtn = (e) => {
    setFeedback(prevState => {
      return {
        ...prevState, [e]: feedback[e] + 1
      }
    })
  }
  return (<div style={{ textAlign: "center" }}>
    <Section title={"Leave Feedback"}>
      <FeedbackOptions options={feedback} onLeaveFeedback={onClickBtn} />
      <Section title={"Statistic"}></Section>
      {total ? (<Statistic good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage} />) : <Notification message="There is no feedback" />}
    </Section>
  </div>)
}


