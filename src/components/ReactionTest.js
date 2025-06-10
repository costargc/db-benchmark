import React, { useState, useEffect } from 'react';

const ReactionTest = () => {
  const [stage, setStage] = useState('idle');
  const [message, setMessage] = useState('Click to start');
  const [bgColor, setBgColor] = useState('bg-gray-800');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [extraInfo, setExtraInfo] = useState('');

  useEffect(() => {
    let timer;
    if (stage === 'waiting') {
      setBgColor('bg-gray-800');
      setMessage('Wait for Green');
      setExtraInfo('');
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
      const rt = endTime - startTime;
      setReactionTime(rt);
      setStage('result');
      setBgColor('bg-blue-700');
      setMessage(`Reaction Time: ${rt} ms`);

      const messages = Math.ceil(rt * 29);
      setExtraInfo(`RAPID is able to send ${messages} messages in that time.`);
    } else if (stage === 'waiting') {
      setStage('tooSoon');
      setBgColor('bg-blue-700');
      setMessage('Too soon! Click to try again.');
      setExtraInfo('');
    } else if (stage === 'result' || stage === 'tooSoon' || stage === 'idle') {
      setStage('waiting');
      setReactionTime(null);
      setExtraInfo('');
    }
  };

  return (
    <div
      className={`h-96 w-full ${bgColor} flex flex-col items-center justify-center text-white cursor-pointer font-semibold`}
      onClick={handleClick}
    >
      <div className="text-6xl">{message}</div>
      {extraInfo && (
        <div className="text-lg mt-4 text-center font-normal">{extraInfo}</div>
      )}
    </div>
  );
};

export default ReactionTest;
