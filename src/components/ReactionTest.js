import React, { useState, useEffect } from 'react';

const ReactionTest = () => {
  const [stage, setStage] = useState('idle');
  const [message, setMessage] = useState('Click to start');
  const [bgColor, setBgColor] = useState('bg-gray-800');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);

  useEffect(() => {
    let timer;
    if (stage === 'waiting') {
      setBgColor('bg-gray-800');
      setMessage('Wait for Green');
      timer = setTimeout(() => {
        setStage('ready');
        setBgColor('bg-green-600');
        setMessage('Click!');
        setStartTime(Date.now());
      }, Math.floor(Math.random() * 4000) + 2000);
    }

    return () => clearTimeout(timer);
  }, [stage]);

  const handleClick = () => {
    if (stage === 'ready') {
      const endTime = Date.now();
      setReactionTime(endTime - startTime);
      setStage('result');
      setBgColor('bg-blue-700');
      setMessage(`Reaction Time: ${endTime - startTime} ms`);
    } else if (stage === 'waiting') {
      setStage('tooSoon');
      setBgColor('bg-blue-700');
      setMessage('Too soon! Click to try again.');
    } else if (stage === 'result' || stage === 'tooSoon' || stage === 'idle') {
      setStage('waiting');
      setReactionTime(null);
    }
  };

  return (
    <div
      className={`h-96 w-full ${bgColor} flex items-center justify-center text-6xl text-white cursor-pointer font-semibold`}
      onClick={handleClick}
    >
      {message}
    </div>
  );
};

export default ReactionTest;
