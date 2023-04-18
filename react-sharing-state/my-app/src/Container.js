import React from 'react';
import { useState } from 'react';
/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  let [current, setCurrent] = useState(0);

  function handlePrev() {
    setCurrent((current - 1 + items.length) % items.length)
  }

  function handleNext() {
    setCurrent((current + 1) % items.length)
  }

  function retrieveI(i) {
    setCurrent(i)
  }

  let currentTitle = items[current]

  return (
    <div>
      <div>{currentTitle}</div>
      <div>
        <CustomButton
        text="Prev"
        retrieveI={() => handlePrev()}
        />
        <Indicators
        count={items.length}
        retrieveI={retrieveI}
        current={current}
        />
        <CustomButton
        text="Next"
        retrieveI={() => handleNext()}
        />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *   bgColor: The button's color
 *   onClicked: Allows parent to recieve events
 *
 * TODO: Make the background color a prop, default white. CHECKED
 * TODO: When clicked, the parent needs to be notified. CHECKED
 */
function CustomButton({ text, bgColor = 'white', retrieveI }) {
  return <button style={{ backgroundColor: bgColor }}
                onClick={retrieveI}>{text}</button>;
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, retrieveI, current }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
      key={i}
      text={i}
      retrieveI={() => retrieveI(i)}
      bgColor={ i === current ? 'skyblue' : 'white'}
      />
      );
  }
  return <div>{buttons}</div>;
}
