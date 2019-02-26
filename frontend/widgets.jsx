import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  ReactDOM.render(
    <Root />,
    root
  );
});

function Root () {
  const tabsInfo = [
    { title: "JS", content: [
      ["Tyler Mcginnis", "https://tylermcginnis.com/courses/"],
      ["37 Gotchas", "https://www.toptal.com/javascript/interview-questions"],
      ["33 Concepts", "https://github.com/leonardomso/33-js-concepts"],
      ["JavaScript 30", "https://javascript30.com/"],
      ["The Net Ninja DOM", "https://www.youtube.com/watch?v=FIORjGvT0kk"]
    ]}, 
    { title: "CSS", content: [
      ["Handbook - CSS", "https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/css-questions.md"],
      ["a/A - CSS", "https://github.com/appacademy/curriculum/blob/efb5b0907408d1a4170acd2cb7e005d35e6a1353/html-css/README.md"],
      ["Flexbox Froggy", "https://flexboxfroggy.com/"],
      ["Flexbox Zombies", "https://mastery.games/p/flexbox-zombies"]
    ]}, 
    { title: "HTML", content: [
      ["Handbook - HTML", "https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/html-questions.md"],
      ["a/A - HTML", "https://github.com/appacademy/curriculum/blob/efb5b0907408d1a4170acd2cb7e005d35e6a1353/html-css/README.md"]
    ]}
  ];

  const directories = [
    ["Portfolio", "https://www.joshuachoi0508.com/"],
    ["OfficeGram", "https://officegram.herokuapp.com/#/login"],
    ["Jamma", "https://jamma-llama.herokuapp.com/#/"],
    ["Github", "https://github.com/joshuachoi0508/"],
    ["LinkedIn", "https://www.linkedin.com/in/josh-choi/"]
  ]

return (
    <div>
      <Clock />
      <Weather />
      <div className="tab-and-auto">
        <Tab tabsInfo={tabsInfo}/>
        <AutoComplete directories={directories} />
      </div>
    </div>
  );
}