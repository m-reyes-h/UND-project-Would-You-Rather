(this["webpackJsonpreactnd-project-would-you-rather"]=this["webpackJsonpreactnd-project-would-you-rather"]||[]).push([[0],{73:function(e,t,a){e.exports=a(89)},85:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),s=a.n(o),c=a(24),l=a(5),i=a(71),u=a(12),m=a(6),h="RECEIVE_USERS",d="USER_ANSWER_QUESTION",p="SAVE_USER_QUESTION",b="ADD_USER";var f="RECEIVE_QUESTIONS",v="ADD_QUESTION",E="ADD_QUESTION_ANSWER";var g="SET_AUTHED_USER",j="UNSET_AUTHED_USER";var O=a(16),w=a.n(O),N=Object(c.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.qid,n=t.authedUser,r=t.answer;switch(t.type){case h:return t.users;case d:return Object(m.a)({},e,Object(u.a)({},n,Object(m.a)({},e[n],{answers:Object(m.a)({},e[n].answers,Object(u.a)({},a,r))})));case p:return Object(m.a)({},e,Object(u.a)({},n,Object(m.a)({},e[n],{questions:[].concat(Object(i.a)(e[n].questions),[a])})));case b:return Object(m.a)({},e,Object(u.a)({},t.user.id,t.user));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.questions;case E:var a=t.qid,n=t.answer,r=t.authedUser;return Object(m.a)({},e,Object(u.a)({},a,Object(m.a)({},e[a],Object(u.a)({},n,Object(m.a)({},e[a][n],{votes:e[a][n].votes.concat([r])})))));case v:return Object(m.a)({},e,Object(u.a)({},t.question.id,t.question));default:return e}},authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.id;case j:return null;default:return e}},loadingBar:O.loadingBarReducer}),x=a(60),y=function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var n=t(a);return console.log("next action",e.getState()),console.groupEnd(),n}}},q=function(e){return function(e){return function(t){try{return e(t)}catch(a){console.error("Caught an exception!",a)}}}},U=Object(c.a)(x.a,y,q),C=(a(84),a(85),a(7)),k=a(8),S=a(11),T=a(9),L=a(10),R=a(13),A=a(27),V=a(70),z={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"user1",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"user2",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"user3",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},H={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function Q(e){return new Promise((function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){H=Object(m.a)({},H,Object(u.a)({},r.id,r)),z=Object(m.a)({},z,Object(u.a)({},n,Object(m.a)({},z[n],{questions:z[n].questions.concat([r.id])}))),t(r)}),1e3)}))}function I(e){return e.trim().toLowerCase().replace(/^\w/,(function(e){return e.toUpperCase()}))}function F(e){var t=function(e){var t=e.firstName,a=e.lastName,n=e.avatarURL;return{id:function(e,t){return(e+""+t).replace(/\s/g,"").toLowerCase()}(t,a),name:I(t)+" "+I(a),avatarURL:n,answers:{},questions:[]}}(e);return new Promise((function(e,a){setTimeout((function(){z=Object(m.a)({},z,Object(u.a)({},t.id,t)),e(t)}),500)}))}function D(e){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){z=Object(m.a)({},z,Object(u.a)({},t,Object(m.a)({},z[t],{answers:Object(m.a)({},z[t].answers,Object(u.a)({},a,n))}))),H=Object(m.a)({},H,Object(u.a)({},a,Object(m.a)({},H[a],Object(u.a)({},n,Object(m.a)({},H[a][n],{votes:H[a][n].votes.concat([t])}))))),e()}),500)}))}({authedUser:e.authedUser,qid:e.qid,answer:e.answer})}function _(){return function(e){return e(Object(O.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(m.a)({},H))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(m.a)({},z))}),1e3)}))]).then((function(e){var t=Object(V.a)(e,2);return{questions:t[0],users:t[1]}})).then((function(t){var a=t.questions,n=t.users;e(function(e){return{type:f,questions:e}}(a)),e(function(e){return{type:h,users:e}}(n))})).then((function(){e(Object(O.hideLoading)())}))}}function M(e,t,a){return function(n){return n(Object(O.showLoading)()),D({authedUser:e,qid:t,answer:a}).then((function(r){n(function(e,t,a){return{type:E,authedUser:e,qid:t,answer:a}}(e,t,a)),n(function(e,t,a){return{type:d,authedUser:e,qid:t,answer:a}}(e,t,a))})).then((function(){n(Object(O.hideLoading)())})).catch((function(e){n(Object(O.hideLoading)()),console.log("There was an error adding the question answer",e)}))}}function P(e,t){return function(a,n){var r,o=n().authedUser;return a(Object(O.showLoading)()),(r={optionOneText:e,optionTwoText:t,author:o},Q({optionOneText:r.optionOneText,optionTwoText:r.optionTwoText,author:r.author})).then((function(e){a(function(e){return{type:v,question:e}}(e)),a(function(e,t){return{type:p,authedUser:e,qid:t}}(e.author,e.id))})).then((function(){a(Object(O.hideLoading)())})).catch((function(e){a(Object(O.hideLoading)()),console.log("There was an error adding the question",e)}))}}function B(e,t,a){return function(n){return n(Object(O.showLoading)()),(r={firstName:e,lastName:t,avatarURL:a},F({firstName:r.firstName,lastName:r.lastName,avatarURL:r.avatarURL})).then((function(e){n(function(e){return{type:b,user:e}}(e))})).then((function(){n(Object(O.hideLoading)())})).catch((function(e){n(Object(O.hideLoading)()),console.log("There was an error adding a new user",e)}));var r}}var W=a(91),J=a(92),G=a(68),K=a(99),Y=a(72),$=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).handleSignOutUser=function(e){e.preventDefault(),a.props.dispatch({type:j}),a.props.history.push("/")},a}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.user,t=e.name,a=e.avatarURL;return r.a.createElement(K.a,{className:"app-navbar shadow-sm",expand:"md",fixed:"top"},r.a.createElement(W.a,null,r.a.createElement(K.a.Brand,{href:"#home"},r.a.createElement("span",{className:"logo"})),r.a.createElement(K.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(K.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Y.a,{className:"mr-auto"},r.a.createElement(R.c,{to:"/home",className:"nav-link"},"Home"),r.a.createElement(R.c,{to:"/add",className:"nav-link"},"New Question"),r.a.createElement(R.c,{to:"/leaderboard",className:"nav-link"},"Leaderboard")),r.a.createElement(Y.a,{className:"ml-auto d-flex align-items-center"},r.a.createElement("span",{className:"navbar-text d-flex align-items-center mr-3"},"Hello, ",t,r.a.createElement("span",{className:"navbar-user-avatar ".concat(a)})),r.a.createElement(Y.a.Link,{href:"#link",onClick:this.handleSignOutUser},"Logout")))))}}]),t}(n.Component);var Z=Object(A.g)(Object(l.connect)((function(e){var t=e.authedUser;return{user:e.users[t]}}))($)),X=function(e){var t=e.index,a=e.user,n=null;switch(t){case 0:n="gold";break;case 1:n="silver";break;case 2:default:n="bronze"}var o=Object.keys(a.answers).length,s=a.questions.length,c=o+s;return r.a.createElement("div",{className:"leader-card shadow-sm bg-white pt-4 pb-2"},r.a.createElement("span",{className:"poll-avatar ".concat(a.avatarURL)}),r.a.createElement("h5",{className:"leader-title mt-2"},a.name),r.a.createElement("div",{className:"d-flex justify-content-between px-4 mt-4"},r.a.createElement("div",null,r.a.createElement("small",null,"Rank"),r.a.createElement("i",{className:"rank-icon d-block"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{className:"trophy ".concat(n),d:"M20.2,4H20H17V2H7V4H4.5H3.8H2V11C2,12 3,13 4,13H7.2C7.6,14.9 8.6,16.6 11,16.9V19C8,19.2 8,20.3 8,21.6V22H16V21.7C16,20.4 16,19.3 13,19.1V17C15.5,16.7 16.5,15 16.8,13.1H20C21,13.1 22,12.1 22,11.1V4H20.2M4,11V6H7V8V11C5.6,11 4.4,11 4,11M20,11C19.6,11 18.4,11 17,11V6H18H20V11Z"})))),r.a.createElement("div",null,r.a.createElement("small",null,"Score"),r.a.createElement("p",{className:"leader-score"},c))),r.a.createElement("div",{className:"pt-2 mt-2 border-top"},r.a.createElement("p",{className:"mb-2 text-muted"},"Questions"),r.a.createElement("div",{className:"d-flex justify-content-between px-4"},r.a.createElement("div",null,r.a.createElement("small",null,"Answered"),r.a.createElement("p",{className:"leader-score"},o)),r.a.createElement("div",null,r.a.createElement("small",null,"Created"),r.a.createElement("p",{className:"leader-score"},s)))))};var ee=Object(l.connect)((function(e){var t=e.users,a=function(e){return Object.keys(e.answers).length+e.questions.length};return{users:Object.values(t).sort((function(e,t){return a(t)-a(e)})).slice(0,3)}}))((function(e){var t=e.users;return r.a.createElement(n.Fragment,null,r.a.createElement(Z,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{className:"justufy-content-center"},r.a.createElement(G.a,{lg:{span:10,offset:1}},r.a.createElement("div",{className:"leaderboard mt-5 text-center d-flex justify-content-between"},t.map((function(e,t){return r.a.createElement(X,{key:t,user:e,index:t})})))))))})),te=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(Z,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{className:"justufy-content-center"},r.a.createElement(G.a,{lg:{span:10,offset:1}},r.a.createElement("div",{className:"leaderboard mt-5 text-center h-75"},r.a.createElement("h2",{className:"text-center"},"404"),r.a.createElement("p",null,"The page is missing."),r.a.createElement(R.b,{to:"/home",className:"d-inline-block flat-button flat-button-hero rounded-pill text-uppercase mt-5 shadow-sm"},r.a.createElement("svg",{className:"mr-2",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"#4285f4",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),"Go home"))))))},ae=a(94),ne=a(95),re=a(100),oe=a(93),se=function(e){var t=e.question,a=e.users;return r.a.createElement(re.a,{className:"mx-1 mb-4 home-poll"},r.a.createElement(re.a.Body,null,r.a.createElement(oe.a,null,r.a.createElement("span",{className:"poll-avatar ".concat(a[t.author].avatarURL," mr-3")}),r.a.createElement(oe.a.Body,null,r.a.createElement("h5",{className:"media-title"},a[t.author].name," ",r.a.createElement("small",null,"asks")),r.a.createElement("p",{className:"text-muted mt-3 mb-0"},"Would you rather?"),r.a.createElement("p",{className:"m-0 p-0"},t.optionOne.text," or ...")))),r.a.createElement(re.a.Footer,null,r.a.createElement(R.b,{to:"/questions/".concat(t.id),className:"d-inline-block w-100 h-100 text-center"},"View Poll")))};var ce=Object(A.g)(Object(l.connect)((function(e,t){var a=e.authedUser,n=e.questions,r=e.users;return{authedUser:a,question:n[t.questionId],users:r}}))((function(e){var t=e.authedUser,a=e.question,n=e.users;return r.a.createElement(se,{authedUser:t,question:a,users:n})}))),le=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.answeredQuestions,a=e.unansweredQuestions;return r.a.createElement(n.Fragment,null,r.a.createElement(Z,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{className:"justufy-content-center"},r.a.createElement(G.a,{lg:{span:8,offset:2}},r.a.createElement("div",{className:"shadow-sm bg-white home-content mt-5"},r.a.createElement(ae.a,{defaultActiveKey:"uaquestions",className:"home-tabs"},r.a.createElement(ne.a,{eventKey:"uaquestions",title:"Unasnwered questions (".concat(a.length,")")},r.a.createElement("div",{className:"p-4 pt-5 d-flex justify-content-between flex-wrap"},a.length?a.map((function(e){return r.a.createElement(ce,{key:e,questionId:e})})):r.a.createElement("h5",{className:"text-center w-100 text-muted"},"You are all done!"))),r.a.createElement(ne.a,{eventKey:"aquestions",title:"Asnwered questions (".concat(t.length,")")},r.a.createElement("div",{className:"p-4 pt-5 d-flex justify-content-between flex-wrap"},t.length?t.map((function(e){return r.a.createElement(ce,{key:e,questionId:e})})):r.a.createElement("h5",{className:"text-center w-100 text-muted"},"Try to answer any question...")))))))))}}]),t}(n.Component);var ie=Object(l.connect)((function(e){var t=e.authedUser,a=e.users,n=e.questions,r=a[t],o=Object.keys(r.answers).sort((function(e,t){return n[t].timestamp-n[e].timestamp})),s=Object.keys(n).filter((function(e){return!o.includes(e)})).sort((function(e,t){return n[t].timestamp-n[e].timestamp}));return{answeredQuestions:o,unansweredQuestions:s}}))(le),ue=function(e){var t=e.user,a=e.signInUser;return r.a.createElement("div",{className:"d-flex flex-column align-items-center mx-4 mb-1 mt-3"},r.a.createElement("span",{role:"button",className:"poll-avatar ".concat(t.avatarURL," mb-2"),tabIndex:"0",onClick:function(){return a(t.id)}}),r.a.createElement("small",{className:"text-uppercase"},t.id))},me=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1},a.handleSignInUser=function(e){a.props.dispatch(function(e){return{type:g,id:e}}(e)),a.setState({redirect:!0})},a}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this,t=(this.props.location.state||{referrer:{pathname:"/home"}}).referrer;return!0===this.state.redirect?r.a.createElement(A.a,{to:t}):r.a.createElement(W.a,null,r.a.createElement(J.a,{className:"justufy-content-center"},r.a.createElement(G.a,{lg:{span:6,offset:3}},r.a.createElement("div",{className:"login-content mt-4 text-center"},r.a.createElement("span",{className:"logo mb-2"}),r.a.createElement("h5",{className:"text-muted font-weight-light"},"Wellcome to the"),r.a.createElement("h4",{className:"mb-4 p-0 login-title font-weight-normal"},"Would You Rather App"),r.a.createElement("div",{className:"login-content-inner shadow-sm bg-white py-5 px-4"},r.a.createElement("h5",{className:"login-subtitle mb-3"},"Select one character to login"),r.a.createElement("div",{className:"d-flex flex-wrap justify-content-center pb-2"},Object.values(this.props.users).map((function(t){return r.a.createElement(ue,{key:t.id,user:t,signInUser:e.handleSignInUser})})))),r.a.createElement(R.b,{to:"/newuser",className:"d-inline-block flat-button flat-button-hero rounded-pill text-uppercase mt-4 shadow-sm"},"Create new user")))))}}]),t}(n.Component);var he=Object(l.connect)((function(e){return{users:e.users||{}}}))(me),de=a(69),pe=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.component,a=e.isAuthenticated,n=Object(de.a)(e,["component","isAuthenticated"]);return r.a.createElement(A.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(A.a,{to:{pathname:"/",state:{referrer:e.location}}})}}))}}]),t}(n.Component);var be=Object(l.connect)((function(e){return{isAuthenticated:null!==e.authedUser}}))(pe),fe=a(96),ve=function(e){var t=e.totalVotes,a=e.optionPercent,n=e.optionVotes,o=e.active,s=e.text;return console.log(o),r.a.createElement("div",{className:"poll-result-box ".concat(!0===o?"active":null)},r.a.createElement("div",{className:"d-flex justify-content-between mt-3"},r.a.createElement("span",{className:"poll-box-title"},s),r.a.createElement("span",{className:"poll-box-percent"},a,"%")),r.a.createElement(fe.a,{now:a}),r.a.createElement("small",{className:"w-100 text-center"},"".concat(n," out of ").concat(t," votes")))},Ee=function(e){var t=e.authedUser,a=e.question,o=e.users,s=a.optionOne.votes,c=a.optionTwo.votes,l=s.length+c.length,i=(100*s.length/l).toFixed(),u=(100*c.length/l).toFixed();return r.a.createElement(n.Fragment,null,r.a.createElement(Z,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{className:"justufy-content-center"},r.a.createElement(G.a,{lg:{span:6,offset:3}},r.a.createElement("div",{className:"poll-result-content mt-4 text-center"},r.a.createElement("span",{className:"poll-avatar ".concat(o[a.author].avatarURL," mb-2")}),r.a.createElement("h4",{className:"mb-5 p-0 poll-result-title"},"Asked by ".concat(o[a.author].name)),r.a.createElement("div",{className:"poll-result-inner shadow-sm bg-white p-4 px-5"},r.a.createElement("h5",{className:"poll-result-subtitle mb-4"},"Would you rather..."),r.a.createElement(ve,{text:a.optionOne.text,active:s.includes(t),totalVotes:l,optionPercent:i,optionVotes:s.length}),r.a.createElement("div",{className:"my-4"},"VS"),r.a.createElement(ve,{text:a.optionTwo.text,active:c.includes(t),totalVotes:l,optionPercent:u,optionVotes:c.length})))))))},ge=a(98),je=a(97),Oe=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={option:null},a.handleChange=function(e){a.setState({option:e.target.id})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSaveQuestion(a.state.option)},a}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.question;return r.a.createElement(ge.a,{className:"shadow-sm bg-white",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"p-4 px-5"},r.a.createElement("h5",{className:"questionf-subtitle mb-4"},"Would you rather..."),r.a.createElement("label",{className:"question-control-group d-flex align-items-center",htmlFor:"optionOne"},r.a.createElement("input",{id:"optionOne",name:"question",type:"radio",onChange:this.handleChange}),r.a.createElement("span",{className:"question-control-checkmark mx-3"}),r.a.createElement("span",{className:"question-control-text"},e.optionOne.text),r.a.createElement("span",{className:"question-control-border"})),r.a.createElement("div",{className:"my-4"},"OR"),r.a.createElement("label",{className:"question-control-group d-flex align-items-center",htmlFor:"optionTwo"},r.a.createElement("input",{id:"optionTwo",name:"question",type:"radio",onChange:this.handleChange}),r.a.createElement("span",{className:"question-control-checkmark mx-3"}),r.a.createElement("span",{className:"question-control-text"},e.optionTwo.text),r.a.createElement("span",{className:"question-control-border"}))),r.a.createElement(je.a,{disabled:!this.state.option,type:"submit",className:"flat-button w-100"},"Submit Question"))}}]),t}(n.Component),we=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).onSaveQuestion=function(e){var t=a.props,n=t.authedUser,r=t.question;(0,t.dispatch)(M(n,r.id,e))},a}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.question;return r.a.createElement(n.Fragment,null,r.a.createElement(Z,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{className:"justufy-content-center"},r.a.createElement(G.a,{lg:{span:6,offset:3}},r.a.createElement("div",{className:"questionf-content mt-4 text-center"},r.a.createElement("span",{className:"poll-avatar ".concat(t[a.author].avatarURL," mb-2")}),r.a.createElement("h4",{className:"mb-5 p-0 questionf-title"},t[a.author].name," asks"),r.a.createElement(Oe,{question:a,onSaveQuestion:this.onSaveQuestion}))))))}}]),t}(n.Component),Ne=Object(A.g)(Object(l.connect)()(we)),xe=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.users,a=e.authedUser,n=e.match,o=e.questions[n.params.question_id];return o?o.optionOne.votes.includes(a)||o.optionTwo.votes.includes(a)?r.a.createElement(Ee,{authedUser:a,users:t,question:o}):r.a.createElement(Ne,{authedUser:a,users:t,question:o}):r.a.createElement(A.a,{to:"/404",Component:te})}}]),t}(n.Component);var ye=Object(A.g)(Object(l.connect)((function(e){var t=e.authedUser,a=e.users;return{questions:e.questions,authedUser:t,users:a}}))(xe)),qe=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={questionOne:"",questionTwo:""},a.handleOnChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleOnSubmit=function(e){e.preventDefault();var t=a.state,n=t.questionOne,r=t.questionTwo;a.props.onSubmit(n,r)},a}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.state,t=e.questionOne,a=e.questionTwo,n=t.trim().length>0&&a.trim().length>0;return r.a.createElement(ge.a,{autoComplete:"off",className:"shadow-sm bg-white",onSubmit:this.handleOnSubmit},r.a.createElement("input",{autoComplete:"false",name:"hidden",type:"text",style:{display:"none"}}),r.a.createElement("div",{className:"p-4 px-5"},r.a.createElement("h5",{className:"newq-subtitle mb-4"},"Would you rather..."),r.a.createElement(ge.a.Control,{autoFocus:!0,className:"question-control",name:"questionOne",type:"text",placeholder:"Question one",onChange:this.handleOnChange}),r.a.createElement("div",{className:"my-4"},"OR"),r.a.createElement(ge.a.Control,{className:"question-control",name:"questionTwo",type:"text",placeholder:"Question two",onChange:this.handleOnChange})),r.a.createElement(je.a,{type:"submit",className:"flat-button w-100",disabled:!n},"Submit Question"))}}]),t}(n.Component),Ue=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e,t){var n=a.props,r=n.dispatch,o=n.history;r(P(e,t)),o.push("/home")},a}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(Z,null),r.a.createElement(W.a,null,r.a.createElement(J.a,{className:"justufy-content-center"},r.a.createElement(G.a,{lg:{span:6,offset:3}},r.a.createElement("div",{className:"newq-content mt-5 text-center"},r.a.createElement("h3",{className:"mb-5 p-0 newq-title"},"Create New Question"),r.a.createElement(qe,{onSubmit:this.handleSubmit}))))))}}]),t}(n.Component),Ce=Object(A.g)(Object(l.connect)()(Ue)),ke=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",avatarURL:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.firstName,r=t.lastName,o=t.avatarURL;a.props.onSubmit(n,r,o)},a}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.avatarURL,o=t.trim().length>0&&a.trim().length>0&&n.trim().length>0;return r.a.createElement("div",{className:"newu-content mt-4 text-center"},r.a.createElement(ge.a,{autoComplete:"off",className:"shadow-sm bg-white",onSubmit:this.handleSubmit},r.a.createElement("input",{autoComplete:"false",name:"hidden",type:"text",style:{display:"none"}}),r.a.createElement("div",{className:"p-4 px-5"},r.a.createElement("h5",{className:"questionf-subtitle mb-4"},"New User"),r.a.createElement(ge.a.Control,{autoFocus:!0,maxLength:"10",className:"newu-control mb-4",name:"firstName",type:"text",placeholder:"First Name",onChange:this.handleChange}),r.a.createElement(ge.a.Control,{maxLength:"10",className:"newu-control",name:"lastName",type:"text",placeholder:"Last Name",onChange:this.handleChange}),r.a.createElement("h5",{className:"login-subtitle mt-5 mb-4"},"Select your avatar"),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{className:"avatar-control-group d-flex align-items-center mx-1",htmlFor:"new1"},r.a.createElement("input",{id:"new1",name:"avatarURL",type:"radio",value:"new1",onChange:this.handleChange}),r.a.createElement("span",{className:"avatar-control-checkmark mx-3"}),r.a.createElement("span",{role:"button",className:"poll-avatar new1",tabIndex:"0"}),r.a.createElement("span",{className:"avatar-control-border"})),r.a.createElement("label",{className:"avatar-control-group d-flex align-items-center mx-1",htmlFor:"new2"},r.a.createElement("input",{id:"new2",name:"avatarURL",type:"radio",onChange:this.handleChange,value:"new2"}),r.a.createElement("span",{className:"avatar-control-checkmark mx-3"}),r.a.createElement("span",{role:"button",className:"poll-avatar new2",tabIndex:"0"}),r.a.createElement("span",{className:"avatar-control-border"})),r.a.createElement("label",{className:"avatar-control-group d-flex align-items-center mx-1",htmlFor:"new3"},r.a.createElement("input",{id:"new3",name:"avatarURL",type:"radio",onChange:this.handleChange,value:"new3"}),r.a.createElement("span",{className:"avatar-control-checkmark mx-3"}),r.a.createElement("span",{role:"button",className:"poll-avatar new3",tabIndex:"0"}),r.a.createElement("span",{className:"avatar-control-border"})))),r.a.createElement(je.a,{disabled:!o,type:"submit",className:"flat-button w-100"},"Add New User")),r.a.createElement(R.b,{to:"/",className:"d-inline-block text-uppercase mt-5"},r.a.createElement("svg",{className:"mr-2",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"#4285f4",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),"Go to Login"))}}]),t}(n.Component),Se=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).handleOnSubmit=function(e,t,n){var r=a.props,o=r.dispatch,s=r.history;o(B(e,t,n)),s.push("/")},a}return Object(L.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(W.a,null,r.a.createElement(J.a,{className:"justufy-content-center"},r.a.createElement(G.a,{lg:{span:6,offset:3}},r.a.createElement(ke,{onSubmit:this.handleOnSubmit})))))}}]),t}(n.Component),Te=Object(l.connect)()(Se),Le=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(_())}},{key:"render",value:function(){return r.a.createElement(R.a,null,r.a.createElement(w.a,{className:"loading"}),r.a.createElement(A.d,null,r.a.createElement(A.b,{exact:!0,path:"/",component:he}),r.a.createElement(A.b,{exact:!0,path:"/newuser",component:Te}),r.a.createElement(be,{path:"/home",component:ie}),r.a.createElement(be,{path:"/leaderboard",component:ee}),r.a.createElement(be,{path:"/questions/:question_id",component:ye}),r.a.createElement(be,{path:"/add",component:Ce}),r.a.createElement(be,{component:te})))}}]),t}(n.Component);var Re=Object(l.connect)((function(e){return{authedUser:e.authedUser}}))(Le),Ae=Object(c.d)(N,U);s.a.render(r.a.createElement(l.Provider,{store:Ae},r.a.createElement(Re,null)),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.4c9d1a51.chunk.js.map