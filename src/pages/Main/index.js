/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './styles.css';

import playImg from '../../assets/play.svg';
import stopImg from '../../assets/stop.svg';
import pauseImg from '../../assets/pause.svg';

export default class Main extends React.Component {
  state = {
    minutes: 25,
    seconds: 0,
    sectionTime: 25,
    breakTime: 5,
    play: true,
    reset: true,
  };

  handleChangeSectionTime = (event) => {
    this.setState({ sectionTime: event.target.value });
  };

  handlePlay = () => {
    const { play, reset, sectionTime } = this.state;

    if (reset)
      this.setState({ minutes: sectionTime, seconds: 0, reset: false });

    if (play) this.startClock();
    else this.stopClock();

    this.setState({ play: !play });
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
                <img
                  onClick={this.handlePlay}
                  src={play ? playImg : pauseImg}
                  alt="play"
                />
              </div>
            </div>
            <div className="small">
              <div>
                <img src={stopImg} alt="pause" />
              </div>
            </div>
          </section>
          <p className="pomodoro">POMODORO</p>
          <p>Gerenciamento de Tempo</p>
          <div className="section-time">
            <div className="length section">
              <p>Duração da Seção</p>
              <div>
                <input
                  type="text"
                  value={sectionTime}
                  onChange={this.handleChangeSectionTime}
                />
                <small>min</small>
              </div>
            </div>
            <div className="length break">
              <p>Duração da Pausa</p>
              <div>
                <input type="text" value={breakTime} />
                <small>min</small>
              </div>
            </div>
          </div>
        </div>
        <a href="#/#">Reiniciar</a>
      </div>
    );
  }
}
