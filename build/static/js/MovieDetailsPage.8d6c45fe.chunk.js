(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{36:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(37),c=a.n(n),i="https://api.themoviedb.org/3",r="29385a5ed2e1b13daa9aab11c1c0dd4d",l=function(){return c.a.get("".concat(i,"/trending/movie/week?api_key=").concat(r))},o=function(e){return c.a.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(r))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"batman";return c.a.get("".concat(i,"/search/movie?api_key=").concat(r,"&language=en-US&page=1&include_adult=false&query=").concat(e))},u=function(e){return c.a.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(r))},m=function(e){return c.a.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(r))}},47:function(e,t,a){"use strict";t.a=function(e){return e&&"https://image.tmdb.org/t/p/w400"+e}},48:function(e,t,a){e.exports={list:"MoviesDetailsPage_list__6YrZI",list_item:"MoviesDetailsPage_list_item__3-PmS",list_img:"MoviesDetailsPage_list_img__2CEFs",list_details:"MoviesDetailsPage_list_details__wAMlj",list_details_item:"MoviesDetailsPage_list_details_item__2l7MN"}},83:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(14),c=a(15),i=a(17),r=a(16),l=a(0),o=a.n(l),s=a(8),u=a(1),m=a(36),_=a(7),p=a(47),d=a(48),h=a.n(d),v=function(e){var t=e.searchFilm;return o.a.createElement("div",{className:h.a.list},o.a.createElement("img",{className:h.a.list_img,src:Object(p.a)(t.poster_path),alt:"",width:"250"}),o.a.createElement("div",{className:h.a.list_item},o.a.createElement("h2",null,t.original_title," ",t.release_date),o.a.createElement("p",null,"User score: ",10*t.vote_average,"%"),o.a.createElement("h2",null,"Overview"),o.a.createElement("p",null,t.overview),o.a.createElement("h2",null,"Genres"),t.genres.reduce((function(e,t){return"".concat(e," ").concat(t.name)}),"")))},f=function(e){var t=e.onClick;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:t,type:"button"},"Go back"))},g=Object(l.lazy)((function(){return a.e(1).then(a.bind(null,86))})),E=Object(l.lazy)((function(){return a.e(5).then(a.bind(null,87))})),b=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={searchFilm:{genres:[]}},e.onBackButton=function(){var t=e.props,a=t.history,n=t.location.state;n?e.props.history.push(n.from):a.push(_.a.HOME)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;m.d(t).then((function(t){e.setState({searchFilm:t.data})}))}},{key:"render",value:function(){var e=this.state.searchFilm,t=this.props.match.url;return o.a.createElement("div",null,o.a.createElement(f,{onClick:this.onBackButton}),o.a.createElement(v,{searchFilm:e}),o.a.createElement("ul",{className:h.a.list_details},o.a.createElement("li",null,o.a.createElement(s.c,{to:"".concat(t,"/cast")},"Cast")),o.a.createElement("li",{className:h.a.list_details_item},o.a.createElement(s.c,{to:"".concat(t,"/reviews")},"Reviews"))),o.a.createElement(l.Suspense,{fallback:o.a.createElement("h1",null,"Loading...")},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:_.a.MOVIE_CAST,component:g}),o.a.createElement(u.a,{exact:!0,path:_.a.MOVIE_REVIEWS,component:E}))))}}]),a}(l.Component)}}]);
//# sourceMappingURL=MovieDetailsPage.8d6c45fe.chunk.js.map