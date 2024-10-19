import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [fbState, setfbState] = useState(() => {
    const localStorageState = localStorage.getItem('fbState');
    if (localStorageState) return JSON.parse(localStorageState);
    else return { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = fbState.good + fbState.neutral + fbState.bad;
  const positiveFeedback = Math.round(
    ((fbState.good + fbState.neutral) / totalFeedback) * 100
  );

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset')
      setfbState({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    else
      setfbState({
        ...fbState,
        [feedbackType]: fbState[feedbackType] + 1,
      });
  };

  useEffect(() => {
    localStorage.setItem('fbState', JSON.stringify(fbState));
  }, [fbState]);

  return (
    <>
      <Description />
      <Options updateFn={updateFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          state={fbState}
          total={totalFeedback}
          percent={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
