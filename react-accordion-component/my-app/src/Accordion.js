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
          <div className='wrapper' onClick={() => handleClick(topic.id)}>
            <h1 >{ topic.name }</h1>
            <div>{activeIndex === topic.id ? '-' : '+'}</div>
          </div>
          <p className={activeIndex === topic.id ? '' : 'inactive'}>{topic.description}</p>
        </li>
      ))}
    </>
  )
}
