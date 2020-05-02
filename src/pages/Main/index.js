import React from 'react';
import {
  FiPlay,
  FiPause,
  FiSquare,
  FiArrowDown,
  FiArrowUp,
} from 'react-icons/fi';

import endTimeSound from '../../assets/sounds/end-time.wav';
import startSound from '../../assets/sounds/start.wav';
import pauseSound from '../../assets/sounds/pause.wav';
import resetSound from '../../assets/sounds/reset.wav';

import './styles.css';

const DEFAULT_SECTION_TIME = 25;
const DEFAULT_BREAK_TIME = 5;
const DEFAULT_MINUTES = DEFAULT_SECTION_TIME;
const DEFAULT_SECONDS = 0;

export default class Main extends React.Component {
  state = {
    minutes: DEFAULT_MINUTES,
    seconds: DEFAULT_SECONDS,
    sectionTime: DEFAULT_SECTION_TIME,
    breakTime: DEFAULT_BREAK_TIME,
    changeSectionTime: false,
    changeBreakTime: false,
    sectionTimer: true,
    play: true,
  };

  handleIncreaseSectionTime = () => {
    const { sectionTime, play } = this.state;
    if (play)
      this.setState({ sectionTime: sectionTime + 1, changeSectionTime: true });
  };

  handleDecreaseSectionTime = () => {
    const { sectionTime, play } = this.state;
    if (play && sectionTime > 1)
      this.setState({ sectionTime: sectionTime - 1, changeSectionTime: true });
  };

  handleIncreaseBreakTime = () => {
    const { breakTime, play } = this.state;
    if (play)
      this.setState({ breakTime: breakTime + 1, changeBreakTime: true });
  };

  handleDecreaseBreakTime = () => {
    const { breakTime, play } = this.state;
    if (play && breakTime > 1)
      this.setState({ breakTime: breakTime - 1, changeBreakTime: true });
  };

  handlePlay = () => {
    const { play } = this.state;

    if (play) {
      this.playSound('play');
      this.timer();
    } else {
      this.playSound('pause');
      this.stopClock();
    }
    this.setState({ play: !play });
  };

  resetTimer = () => {
    this.playSound('reset');
    this.stopClock();
    this.setState({
      sectionTime: DEFAULT_SECTION_TIME,
      breakTime: DEFAULT_BREAK_TIME,
      minutes: DEFAULT_MINUTES,
      seconds: DEFAULT_SECONDS,
      sectionTimer: true,
      play: true,
    });
  };

  playSound(soundName) {
    let sound;

    switch (soundName) {
      case 'pause':
        sound = new Audio(pauseSound);
        break;
      case 'play':
        sound = new Audio(startSound);
        break;
      case 'reset':
        sound = new Audio(resetSound);
        break;
      case 'endTime':
        sound = new Audio(endTimeSound);
        break;
      default:
        break;
    }

    sound.play();
  }

  timer() {
    const {
      sectionTime,
      breakTime,
      changeBreakTime,
      changeSectionTime,
      sectionTimer,
    } = this.state;

    if (
      (changeSectionTime && sectionTimer) ||
      (changeBreakTime && !sectionTimer)
    )
      this.setState({
        minutes: sectionTimer ? sectionTime : breakTime,
        seconds: 0,
        changeBreakTime: false,
        changeSectionTime: false,
      });

    this.interval = setInterval(() => {
      const { seconds, minutes, sectionTimer: currentSection } = this.state;
      if (seconds > 0) this.setState({ seconds: seconds - 1 });
      if (seconds === 0) {
        if (minutes > 0)
          this.setState({
            minutes: minutes - 1,
            seconds: 59,
          });
        else {
          this.setState({
            minutes: sectionTimer ? breakTime : sectionTime,
            seconds: DEFAULT_SECONDS,
            sectionTimer: !currentSection,
          });
          this.playSound('endTime');
        }
      }
    }, 1000);
  }

  stopClock() {
    clearInterval(this.interval);
  }

  render() {
    const {
      minutes,
      seconds,
      sectionTime,
      breakTime,
      play,
      sectionTimer,
    } = this.state;
    return (
      <div className="container">
        <div className="main">
          <h1>Tempo {sectionTimer ? 'da Seção' : 'de Descanso'}</h1>
          <span>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
          <section className="player">
            <div className="big">
              <div>
                {play ? (
                  <FiPlay
                    id="play"
                    size={64}
                    color="#fff"
                    onClick={this.handlePlay}
                  />
                ) : (
                  <FiPause size={64} color="#fff" onClick={this.handlePlay} />
                )}
              </div>
            </div>
            <div className="small">
              <div onClick={this.resetTimer}>
                <FiSquare size={16} color="#fff" />
              </div>
            </div>
          </section>
          <p className="pomodoro">POMODORO</p>
          <p>Gerenciamento de Tempo</p>
          <div className="section-time">
            <div className="length section">
              <p>Duração da Seção</p>
              <div>
                <FiArrowUp
                  size={30}
                  color="#fff"
                  onClick={this.handleIncreaseSectionTime}
                />
                <input type="text" readOnly value={`${sectionTime} min`} />
                <FiArrowDown
                  size={30}
                  color="#fff"
                  onClick={this.handleDecreaseSectionTime}
                />
              </div>
            </div>
            <div className="length break">
              <p>Duração da Pausa</p>
              <div>
                <FiArrowUp
                  size={30}
                  color="#fff"
                  onClick={this.handleIncreaseBreakTime}
                />
                <input type="text" readOnly value={`${breakTime} min`} />
                <FiArrowDown
                  size={30}
                  color="#fff"
                  onClick={this.handleDecreaseBreakTime}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
