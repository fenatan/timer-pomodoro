(this["webpackJsonptimer-pomodoro"]=this["webpackJsonptimer-pomodoro"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/end-time.d82c39fd.wav"},function(e,t,a){e.exports=a.p+"static/media/start.872073a1.wav"},function(e,t,a){e.exports=a.p+"static/media/pause.20f930b5.wav"},function(e,t,a){e.exports=a.p+"static/media/reset.dc14e149.wav"},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(3),c=a.n(s),o=(a(17),a(4)),r=a(5),l=a(10),m=a(11),u=a(1),d=a(6),p=a.n(d),h=a(7),T=a.n(h),f=a(8),v=a.n(f),k=a(9),S=a.n(k),y=(a(18),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={minutes:25,seconds:0,sectionTime:25,breakTime:5,changeSectionTime:!1,changeBreakTime:!1,sectionTimer:!0,play:!0},e.handleIncreaseSectionTime=function(){var t=e.state,a=t.sectionTime;t.play&&e.setState({sectionTime:a+1,changeSectionTime:!0})},e.handleDecreaseSectionTime=function(){var t=e.state,a=t.sectionTime;t.play&&a>1&&e.setState({sectionTime:a-1,changeSectionTime:!0})},e.handleIncreaseBreakTime=function(){var t=e.state,a=t.breakTime;t.play&&e.setState({breakTime:a+1,changeBreakTime:!0})},e.handleDecreaseBreakTime=function(){var t=e.state,a=t.breakTime;t.play&&a>1&&e.setState({breakTime:a-1,changeBreakTime:!0})},e.handlePlay=function(){var t=e.state.play;t?(e.playSound("play"),e.timer()):(e.playSound("pause"),e.stopClock()),e.setState({play:!t})},e.resetTimer=function(){e.playSound("reset"),e.stopClock(),e.setState({sectionTime:25,breakTime:5,minutes:25,seconds:0,sectionTimer:!0,play:!0})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.pauseSound=new Audio(v.a),this.startSound=new Audio(T.a),this.resetSound=new Audio(S.a),this.endTimeSound=new Audio(p.a)}},{key:"playSound",value:function(e){switch(this.sound&&this.sound.pause(),e){case"pause":this.sound=this.pauseSound;break;case"play":this.sound=this.startSound;break;case"reset":this.sound=this.resetSound;break;case"endTime":this.sound=this.endTimeSound}this.sound.play()}},{key:"timer",value:function(){var e=this,t=this.state,a=t.sectionTime,n=t.breakTime,i=t.changeBreakTime,s=t.changeSectionTime,c=t.sectionTimer;(s&&c||i&&!c)&&this.setState({minutes:c?a:n,seconds:0,changeBreakTime:!1,changeSectionTime:!1}),this.interval=setInterval((function(){var t=e.state,i=t.seconds,s=t.minutes,o=t.sectionTimer;i>0&&e.setState({seconds:i-1}),0===i&&(s>0?e.setState({minutes:s-1,seconds:59}):(e.setState({minutes:c?n:a,seconds:0,sectionTimer:!o}),e.playSound("endTime")))}),1e3)}},{key:"stopClock",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.minutes,a=e.seconds,n=e.sectionTime,s=e.breakTime,c=e.play,o=e.sectionTimer;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"main"},i.a.createElement("h1",null,"Tempo ",o?"da Se\xe7\xe3o":"de Descanso"),i.a.createElement("span",null,t<10?"0".concat(t):t,":",a<10?"0".concat(a):a),i.a.createElement("section",{className:"player"},i.a.createElement("div",{className:"big"},i.a.createElement("div",null,c?i.a.createElement(u.d,{id:"play",size:64,color:"#fff",onClick:this.handlePlay}):i.a.createElement(u.c,{size:64,color:"#fff",onClick:this.handlePlay}))),i.a.createElement("div",{className:"small"},i.a.createElement("div",{onClick:this.resetTimer},i.a.createElement(u.e,{size:16,color:"#fff"})))),i.a.createElement("p",{className:"pomodoro"},"POMODORO"),i.a.createElement("p",null,"Gerenciamento de Tempo"),i.a.createElement("div",{className:"section-time"},i.a.createElement("div",{className:"length section"},i.a.createElement("p",null,"Dura\xe7\xe3o da Se\xe7\xe3o"),i.a.createElement("div",null,i.a.createElement(u.b,{size:30,color:"#fff",onClick:this.handleIncreaseSectionTime}),i.a.createElement("input",{type:"text",readOnly:!0,value:"".concat(n," min")}),i.a.createElement(u.a,{size:30,color:"#fff",onClick:this.handleDecreaseSectionTime}))),i.a.createElement("div",{className:"length break"},i.a.createElement("p",null,"Dura\xe7\xe3o da Pausa"),i.a.createElement("div",null,i.a.createElement(u.b,{size:30,color:"#fff",onClick:this.handleIncreaseBreakTime}),i.a.createElement("input",{type:"text",readOnly:!0,value:"".concat(s," min")}),i.a.createElement(u.a,{size:30,color:"#fff",onClick:this.handleDecreaseBreakTime}))))))}}]),a}(i.a.Component));var E=function(){return i.a.createElement(y,null)};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.529c3b18.chunk.js.map