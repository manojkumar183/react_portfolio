import{u as e,a as r}from"./index-DfMEKp0H.js";import{p as t}from"./experienceSkillsData-mRRgGBs7.js";const c=({project:a})=>e("div",{className:"project-card",children:[e("div",{className:"project-image",style:{backgroundImage:`url(${a.image})`}}),e("div",{className:"project-info",children:[e("h2",{className:"projects-title",children:a.title}),e("p",{className:"project-description",children:a.description})]})]}),o=()=>e("div",{className:"projects-page",children:[e(r,{variant:"h4",className:"page-title",gutterBottom:!0,children:"Projects"}),e("div",{className:"projects-container",children:t.map(a=>e(c,{project:a},a.id))})]});export{o as default};
