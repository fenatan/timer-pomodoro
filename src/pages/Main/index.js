/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import {
  FiPlay,
  FiPause,
  FiSquare,
  FiArrowDown,
  FiArrowUp,
} from 'react-icons/fi';

import './styles.css';

export default class Main extends React.Component {
  state = {
    minutes: 25,
    seconds: 0,
    sectionTime: 25,
    breakTime: 5,
    play: true,
  };

  handleIncreaseSectionTime = () => {
    const { sectionTime } = this.state;
    this.setState({ sectionTime: sectionTime + 1 });
  };

  handleDecreaseSectionTime = () => {
    const { sectionTime } = this.state;
    if (sectionTime > 1) this.setState({ sectionTime: sectionTime - 1 });
  };

  handleIncreaseBreakTime = () => {
    const { breakTime } = this.state;
    this.setState({ breakTime: breakTime + 1 });
  };

  handleDecreaseBreakTime = () => {
    const { breakTime } = this.state;
    if (breakTime > 1) this.setState({ breakTime: breakTime - 1 });
  };

  handlePlay = () => {
    const { play } = this.state;

    if (play) this.startClock();
    else this.stopClock();

    this.setState({ play: !play });
  };

  resetTimer = () => {
    this.stopClock();
    this.setState({
      sectionTime: 25,
      breakTime: 5,
      minutes: 25,
      seconds: 0,
      play: true,
    });
  };

  startClock() {
    this.interval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) this.setState({ seconds: seconds - 1 });
      if (seconds === 0) {
        if (minutes > 0)
          this.setState({
            minutes: minutes - 1,
            seconds: 59,
          });
        else clearInterval(this.interval);
      }
    }, 1000);
  }

  stopClock() {
    clearInterval(this.interval);
  }

  render() {
    const { minutes, seconds, sectionTime, breakTime, play } = this.state;
    return (
      <div className="container">
        <div className="main">
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
