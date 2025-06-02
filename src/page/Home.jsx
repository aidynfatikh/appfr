import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  // State management
  const [name, setName] = useState("");
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(10);

  // Motivational phrases array
  const motivationalPhrases = [
    "Ты можешь это сделать! 💪",
    "Продолжай в том же духе! 🌟",
    "Каждый шаг важен! 🚶‍♂️",
    "Ты ближе к цели! 🎯",
    "Верь в себя! ✨",
    "Ты сильнее, чем думаешь! 💫",
    "Не сдавайся! 🏃‍♂️",
    "Ты на правильном пути! 🛣️",
    "Каждая секунда приближает к успеху! ⏱️",
    "Ты справишься! 🎉",
  ];

  // Timer effect
  useEffect(() => {
    let intervalId;

    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, time]);

  // Event handlers
  const handleTimerClick = (e) => {
    e.preventDefault();
    
    if (!isRunning && time === 0) {
      setTime(initialTime);
    }

    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const handleTimeChange = (e) => {
    if (!isRunning) {
      const newTime = Number(e.target.value);
      setTime(newTime);
      setInitialTime(newTime);
    }
  };

  const handleReset = () => {
    setTime(initialTime);
    setIsRunning(false);
    setName("");
  };

  // Calculate progress percentage
  const progress = (time / initialTime) * 100;

  // Get current motivational phrase
  const getMotivationalPhrase = () => {
    if (isRunning) {
      return motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    }
    if (time === 0) {
      return `Ты справился, ${name} 💪`;
    }
    return "";
  };

  // Get button text
  const getButtonText = () => {
    if (isRunning) return `${time}s`;
    if (time === 0) return "Попробовать ещё раз";
    return "Start";
  };

  return (
    <div>
      <h1>Home</h1>
      <form className="form">
        {/* Name input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        {/* Time selection radio buttons */}
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="time10"
              name="time"
              value="10"
              onChange={handleTimeChange}
            />
            <label htmlFor="time10">10 seconds</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="time20"
              name="time"
              value="20"
              onChange={handleTimeChange}
            />
            <label htmlFor="time20">20 seconds</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="time30"
              name="time"
              value="30"
              onChange={handleTimeChange}
            />
            <label htmlFor="time30">30 seconds</label>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Motivational phrase */}
        <h2 className="motivational-phrase">
          {getMotivationalPhrase()}
        </h2>

        {/* Timer button */}
        <button
          className="circle-button"
          onClick={handleTimerClick}
          type="button"
        >
          {getButtonText()}
        </button>

        {/* Reset button */}
        <button
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default Home;
