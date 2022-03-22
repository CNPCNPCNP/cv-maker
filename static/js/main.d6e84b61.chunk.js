(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(6),s=n.n(i),r=(n(16),n(3)),o=n(4),l=n(1),d=n(7),u=n(8),j=n(10),b=n(9),p=n(25),h={personal:{name:"Clay Hart",title:"Computer Science Student",phone:"0409852358",email:"clay.hart@uqconnect.edu.au",location:"Brisbane, Australia"},description:"I am a second year computer science student whose loves the challenge of building and deploying new web apps using a variety of different technologies. This app is a basic CV template builder created using React and Typescript. Please see my github for more examples of my work.",experience:[{id:Object(p.a)(),position:"Software Engineer",company:"A Software Company",startDate:"2018",endDate:"Present",desc:"Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud."},{id:Object(p.a)(),position:"Graduate Engineer",company:"My First Company",startDate:"2017",endDate:"2018",desc:"Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit."},{id:Object(p.a)(),position:"Teacher",company:"University",startDate:"2015",endDate:"2017",desc:"Enim elit aliquip fugiat anim proident."}],education:[{id:Object(p.a)(),course:"Bachelor of Science",university:"QUT",startDate:"2017",endDate:"2018"},{id:Object(p.a)(),course:"Bachelor of Computer Science",university:"University of Queensland",startDate:"2021",endDate:"Present"}]},m=(n(17),n(0));var x=function(e){var t=e.icon,n=e.text;return Object(m.jsxs)("div",{className:"contact-details",children:[t?Object(m.jsx)("img",{src:t,alt:"icon"}):null,Object(m.jsx)("span",{className:"details-text",children:n})]})},O=n.p+"static/media/phone-square-solid.9c22c8e1.svg",v=n.p+"static/media/envelope-square-solid.bcb18744.svg",g=n.p+"static/media/map-marker-alt-solid.d9fe5579.svg";n(19);var f=function(e){var t=e.name,n=e.title,a=e.phone,c=e.email,i=e.location;return Object(m.jsxs)("header",{children:[Object(m.jsxs)("div",{className:"heading",children:[Object(m.jsx)("h1",{children:t}),Object(m.jsx)("h2",{children:n})]}),Object(m.jsxs)("div",{className:"details-group",children:[Object(m.jsx)(x,{text:a,icon:O}),Object(m.jsx)(x,{text:c,icon:v}),Object(m.jsx)(x,{text:i,icon:g})]})]})};n(20),n(21);var D=function(e){var t=e.heading,n=e.place,a=e.startDate,c=e.endDate,i=e.desc;return Object(m.jsxs)("div",{className:"experience",children:[Object(m.jsxs)("div",{className:"experience__heading",children:[Object(m.jsx)("h4",{children:t}),Object(m.jsxs)("div",{className:"experience__details",children:[n," |"," ",Object(m.jsxs)("span",{className:"bold",children:[a," \u2013 ",c]})]})]}),i||null]})};n(22);var C=function(e){var t=e.heading,n=e.experienceList;return Object(m.jsxs)("div",{className:"experience-list",children:[t?Object(m.jsx)("h3",{children:t}):null,n.map((function(e,t){var n=e.position,a=e.company,c=e.startDate,i=e.endDate,s=e.desc;return Object(m.jsx)(D,{heading:n,place:a,startDate:c,endDate:i,desc:s},t)}))]})};var y=function(e){var t=e.label,n=e.value,a=e.id,c=e.name,i=e.onChange;return a||(a="input--".concat(t.split(" ").join("-"))),Object(m.jsxs)("label",{htmlFor:a,children:[Object(m.jsx)("span",{className:"hidden",children:t}),Object(m.jsx)("input",{type:"text",id:a,value:n,placeholder:t,name:c,onChange:i})]})};var I=function(e){var t=e.item,n=e.index,a=e.onInputArrayChange,c=e.onItemDelete,i=e.onItemAdd,s=t.id,r=t.company,o=t.position,l=t.startDate,d=t.endDate,u=t.desc;return Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)(y,{label:"company",value:r,name:"company",onChange:a("experience",n)}),Object(m.jsx)(y,{label:"position",value:o,name:"position",onChange:a("experience",n)}),Object(m.jsx)(y,{label:"start date",value:l,name:"startDate",onChange:a("experience",n)}),Object(m.jsx)(y,{label:"end date",value:d,name:"endDate",onChange:a("experience",n)}),Object(m.jsx)(y,{label:"description",value:u||"",name:"desc",onChange:a("experience",n)}),Object(m.jsxs)("div",{className:"btn-group",children:[Object(m.jsx)("button",{type:"button",onClick:function(){return c("experience",s)},children:"Delete"}),Object(m.jsx)("button",{type:"button",className:"btn--add",onClick:i,children:"Add"})]})]})};var A=function(e){var t=e.item,n=e.index,a=e.onInputArrayChange,c=e.onItemDelete,i=e.onItemAdd,s=t.id,r=t.course,o=t.university,l=t.startDate,d=t.endDate,u=t.desc;return Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)(y,{label:"course / program",id:"input--course",value:r,name:"course",onChange:a("education",n)}),Object(m.jsx)(y,{label:"university",value:o,name:"university",onChange:a("education",n)}),Object(m.jsx)(y,{label:"start date",value:l,name:"startDate",onChange:a("education",n)}),Object(m.jsx)(y,{label:"end date",value:d,name:"endDate",onChange:a("education",n)}),Object(m.jsx)(y,{label:"description",value:u||"",name:"desc",onChange:a("education",n)}),Object(m.jsxs)("div",{className:"btn-group",children:[Object(m.jsx)("button",{type:"button",onClick:function(){return c("education",s)},children:"Delete"}),Object(m.jsx)("button",{type:"button",className:"btn--add",onClick:i,children:"Add"})]})]},n)};n(23);var N=function(e){var t=e.personalDetails,n=e.description,a=e.experience,c=e.education,i=e.onInputChange,s=e.onInputArrayChange,r=e.onTextAreaChange,o=e.onItemDelete,l=e.onExperienceItemAdd,d=e.onEducationItemAdd,u=t.name,j=t.title,b=t.phone,p=t.email,h=t.location;return Object(m.jsxs)("form",{children:[Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{children:"Personal Details"}),Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)(y,{label:"name",value:u,name:"name",onChange:i}),Object(m.jsx)(y,{label:"title",value:j,name:"title",onChange:i}),Object(m.jsx)(y,{label:"phone",value:b,name:"phone",onChange:i}),Object(m.jsx)(y,{label:"email",value:p,name:"email",onChange:i}),Object(m.jsx)(y,{label:"location",value:h,name:"location",onChange:i}),Object(m.jsx)("textarea",{id:"description",rows:5,placeholder:"Description...",value:n,onChange:r})]})]}),Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{children:"Work Experience"}),0===a.length?Object(m.jsx)("button",{type:"button",className:"btn--add",onClick:l,children:"Add"}):a.map((function(e,t){return Object(m.jsx)(I,{item:e,index:t,onInputArrayChange:s,onItemDelete:o,onItemAdd:l},t)}))]}),Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{children:"Education"}),0===c.length?Object(m.jsx)("button",{type:"button",className:"btn--add",onClick:d,children:"Add"}):c.map((function(e,t){return Object(m.jsx)(A,{item:e,index:t,onInputArrayChange:s,onItemDelete:o,onItemAdd:d},t)}))]})]})},E=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(d.a)(this,n),(e=t.call(this,a)).handleInputArrayChange=function(t,n){return function(a){var c=a.target,i=c.name,s=c.value;e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(r.a)({},t,[].concat(Object(o.a)(e[t].slice(0,n)),[Object(l.a)(Object(l.a)({},e[t][n]),{},Object(r.a)({},i,s))],Object(o.a)(e[t].slice(n+1)))))}))}},e.handleTextAreaChange=function(t){var n=t.target.value;e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{description:n})}))},e.handleInputChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{personalDetails:Object(l.a)(Object(l.a)({},e.personalDetails),{},Object(r.a)({},a,c))})}))},e.handleItemDelete=function(t,n){e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(r.a)({},t,Object(o.a)(e[t]).filter((function(e){return e.id!==n}))))}))},e.handleExperienceItemAdd=function(){var t=Object(p.a)();e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{experience:[].concat(Object(o.a)(e.experience),[{id:t,position:"",company:"",startDate:"",endDate:"",desc:""}])})}))},e.handleEducationItemAdd=function(){var t=Object(p.a)();e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{education:[].concat(Object(o.a)(e.education),[{id:t,course:"",university:"",startDate:"",endDate:"",desc:""}])})}))},e.state={personalDetails:{name:"",title:"",phone:"",email:"",location:""},description:"",experience:[],education:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=h.personal,t=h.description,n=h.experience,a=h.education;this.setState((function(c){return Object(l.a)(Object(l.a)({},c),{},{personalDetails:e,description:t,experience:n,education:a})}))}},{key:"render",value:function(){var e=this.state,t=e.personalDetails,n=e.description,a=e.experience,c=e.education.map((function(e){return{position:e.course,company:e.university,startDate:e.startDate,endDate:e.endDate}}));return Object(m.jsxs)("div",{className:"cv__container",children:[Object(m.jsx)("div",{className:"cv__form",children:Object(m.jsx)(N,Object(l.a)(Object(l.a)({},this.state),{},{onInputChange:this.handleInputChange,onInputArrayChange:this.handleInputArrayChange,onTextAreaChange:this.handleTextAreaChange,onItemDelete:this.handleItemDelete,onExperienceItemAdd:this.handleExperienceItemAdd,onEducationItemAdd:this.handleEducationItemAdd}))}),Object(m.jsxs)("div",{className:"cv__view",children:[Object(m.jsx)(f,Object(l.a)({},t)),n?Object(m.jsx)("div",{children:n}):null,a.length>0?Object(m.jsx)(C,{heading:"work experience",experienceList:a}):null,c.length>0?Object(m.jsx)(C,{heading:"education",experienceList:c}):null]})]})}}]),n}(a.Component),k=E;s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.d6e84b61.chunk.js.map