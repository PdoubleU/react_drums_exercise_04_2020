(this.webpackJsonpdrummachine=this.webpackJsonpdrummachine||[]).push([[0],{10:function(e,a,t){e.exports=t(25)},15:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(8),i=t.n(n),o=t(2),c=t(3),d=t(1),l=t(4),m=t(5),p=(t(15),{backgroundColor:"grey",boxShadow:"0 3px orange",marginTop:10}),u={backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 0px black"},y=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={panelStyle:u},r.handleKeyPress=r.handleKeyPress.bind(Object(d.a)(r)),r.playSound=r.playSound.bind(Object(d.a)(r)),r.activatePad=r.activatePad.bind(Object(d.a)(r)),r}return Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"activatePad",value:function(){"0 3px orange"===this.state.panelStyle.boxShadow?this.setState({panelStyle:u}):this.setState({panelStyle:p})}},{key:"playSound",value:function(e){var a=this,t=document.getElementById(this.props.keyTrigger);t.currentTime=0,t.play(),this.activatePad(),setTimeout((function(){return a.activatePad()}),100),this.props.updateDisplay(this.props.clipId.replace(/-/g," "))}},{key:"render",value:function(){return s.a.createElement("div",{id:this.props.clipId,onClick:this.playSound,className:"drum-pad",style:this.state.panelStyle},s.a.createElement("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.clip}),this.props.keyTrigger)}}]),t}(s.a.Component),h=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e,a=this;return e=this.props.currentPadData.map((function(e,t,r){return s.a.createElement(y,{clipId:r[t].id,clip:r[t].url,keyTrigger:r[t].keyTrigger,keyCode:r[t].keyCode,key:r[t].keyTrigger,updateDisplay:a.props.updateDisplay})})),s.a.createElement("div",{className:"pad-bank"},e)}}]),t}(s.a.Component),k=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],g=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],C=t(9),f=t.n(C),v=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={display:String.fromCharCode(160),currentPadData:k,currentPadDataId:"data one",sliderVal:.3},r.displayClipName=r.displayClipName.bind(Object(d.a)(r)),r.selectBank=r.selectBank.bind(Object(d.a)(r)),r.adjustVolume=r.adjustVolume.bind(Object(d.a)(r)),r.clearDisplay=r.clearDisplay.bind(Object(d.a)(r)),r}return Object(c.a)(t,[{key:"selectBank",value:function(){"data one"===this.state.currentPadDataId?this.setState({currentPadData:g,display:"data two",currentPadDataId:"data two"}):this.setState({currentPadData:k,display:"data one",currentPadDataId:"data one"})}},{key:"displayClipName",value:function(e){this.setState({display:e})}},{key:"adjustVolume",value:function(e){var a=this;this.setState({sliderVal:e.target.value,display:"Volume: "+Math.round(100*e.target.value)}),setTimeout((function(){return a.clearDisplay()}),100)}},{key:"clearDisplay",value:function(){this.setState({display:String.fromCharCode(160)})}},{key:"render",value:function(){var e=this,a=this.state.currentPadData===k?{float:"left"}:{float:"right"};return[].slice.call(document.getElementsByClassName("clip")).forEach((function(a){a.volume=e.state.sliderVal})),s.a.createElement("div",{id:"drum-machine",className:"inner-container"},s.a.createElement(f.a,null),s.a.createElement(h,{updateDisplay:this.displayClipName,clipVolumee:this.state.sliderVal,currentPadData:this.state.currentPadData}),s.a.createElement("div",{className:"controls-container"},s.a.createElement("p",{id:"display"},this.state.display),s.a.createElement("div",{className:"volume-slider"},s.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.01",value:this.state.sliderVal,onChange:this.adjustVolume})),s.a.createElement("div",{className:"control"},s.a.createElement("p",null,"Bank"),s.a.createElement("div",{onClick:this.selectBank,className:"select"},s.a.createElement("div",{style:a,className:"inner"})))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b580c2e8.chunk.js.map