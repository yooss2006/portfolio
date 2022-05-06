import React from "react";
import { education, study } from "../util/experience";

const Experience = () => {
  return (
    <section className="Experience container">
      <h2 className="blind">경력 및 교육</h2>
      <section className="study">
        <h3>스터디</h3>
        {study.map((item) => (
          <article key={item.name} className="studyItem">
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
            <ul>
              {item.result.map((it, index) => (
                <li key={index}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="education">
        <h3>교육</h3>
        {education.map((item) => (
          <article key={item.name} className="educationItem">
            <h4>{item.name}</h4>
            <p>{item.term}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Experience;
