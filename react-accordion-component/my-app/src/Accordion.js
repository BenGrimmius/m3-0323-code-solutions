import { useState } from 'react';

export default function Accordion({ topics }) {
  let [activeIndex, setActiveIndex] = useState(0);

  function handleClick(index) {
    if (activeIndex === index) {
      return setActiveIndex(null)
    }
    setActiveIndex(index)
  }


  return (
    <>
      {topics.map(topic => (
        <li key={topic.id} >
          <h1 onClick={() => handleClick(topic.id)}>{ topic.name }</h1>
          <p className={activeIndex === topic.id ? '' : 'inactive'}>{topic.description}</p>
        </li>
      ))}
    </>
  )
}
