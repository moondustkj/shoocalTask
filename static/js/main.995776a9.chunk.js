(this.webpackJsonpshoocal=this.webpackJsonpshoocal||[]).push([[0],{10:function(t,e,n){t.exports=n(20)},15:function(t,e,n){},2:function(t,e,n){t.exports={commentBox:"Comments_commentBox__1tff_",comment:"Comments_comment__22mGE",votes:"Comments_votes__fowbG",like:"Comments_like__27bqU",dislike:"Comments_dislike__3xu0i"}},20:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),m=n(9),c=n.n(m),s=(n(15),n(1)),r=n(3),i=n(4),l=n(6),u=n(5),f=n(7),p=n(2),d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),m=0;m<o;m++)a[m]=arguments[m];return(t=e.call.apply(e,[this].concat(a))).state={commentInfo:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("commentInfo"));t&&this.setState({commentInfo:t})}},{key:"updateVotes",value:function(t,e){var n=this;console.log(t);var o=this.state.commentInfo.findIndex((function(e){return e.commentId===t})),a=this.state.commentInfo[o].upvotes,m=this.state.commentInfo[o].downvotes;if(o>=0){var c={};c="upvote"===e?{commentId:t,upvotes:a+1,downvotes:m}:{commentId:t,upvotes:a,downvotes:m+1},this.setState({commentInfo:[].concat(Object(s.a)(this.state.commentInfo.slice(0,o)),[Object.assign({},this.state.commentInfo[o],c)],Object(s.a)(this.state.commentInfo.slice(o+1)))},(function(){return n.storeData()}))}}},{key:"storeData",value:function(){console.log("store data",this.state.commentInfo),localStorage.setItem("commentInfo",JSON.stringify(this.state.commentInfo))}},{key:"render",value:function(){var t=this,e=this.state.commentInfo.map((function(e){return a.a.createElement("div",{key:e.commentId,className:p.comment},a.a.createElement("li",null,e.comment),a.a.createElement("div",{className:p.votes},a.a.createElement("span",{className:p.like,onClick:function(){return t.updateVotes(e.commentId,"upvote")}},e.upvotes,a.a.createElement("i",{className:"far fa-thumbs-up"}))," \xa0",a.a.createElement("span",{className:p.dislike,onClick:function(){return t.updateVotes(e.commentId,"downvote")}},e.downvotes,a.a.createElement("i",{className:"far fa-thumbs-down"}))))}));return a.a.createElement("div",{className:p.commentBox},a.a.createElement("ul",null,e))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.comments.length!==e.commentInfo.length?{commentInfo:t.comments}:null}}]),n}(a.a.Component),v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).state={commentInfo:[{commentId:0,comment:"a fake comment.",upvotes:0,downvotes:0},{commentId:1,comment:"a fake comment-1.",upvotes:0,downvotes:0},{commentId:2,comment:"a fake comment-2.",upvotes:0,downvotes:0}],inputvalue:""},o.textInput=a.a.createRef(),o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("commentInfo"));t&&this.setState({commentInfo:t})}},{key:"addCommentHandler",value:function(){var t=this,e=Object(s.a)(this.state.commentInfo),n={commentId:this.state.commentInfo.length+1,comment:this.textInput.current.value,upvotes:0,downvotes:0};e.push(n),console.log(e),this.setState({commentInfo:Object(s.a)(e),inputvalue:""},(function(){return t.addToStorage()}))}},{key:"addToStorage",value:function(){console.log(this.state.commentInfo),localStorage.setItem("commentInfo",JSON.stringify(this.state.commentInfo))}},{key:"changeHandler",value:function(t){this.setState({inputvalue:t.target.value})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:f.App},a.a.createElement("div",{className:"col-md-12 ".concat(f.inputBox)},a.a.createElement("input",{type:"text",className:f.Input,placeholder:"Type a Comment",ref:this.textInput,value:this.state.inputvalue,onChange:function(e){return t.changeHandler(e)}}),a.a.createElement("button",{onClick:function(){return t.addCommentHandler()}},"Add Comment")),a.a.createElement(d,{comments:this.state.commentInfo}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16),n(17);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports={App:"App_App__6-9BA",Input:"App_Input__35AnA",inputBox:"App_inputBox__17PmM"}}},[[10,1,2]]]);
//# sourceMappingURL=main.995776a9.chunk.js.map