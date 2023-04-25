import { useState } from 'react';
import { useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa'


export default function Container({ items }) {
  let [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current, items.length])

  function HandleChevLeft() {
    setCurrent((current - 1 + items.length) % items.length)
  }

  function HandleChevRight() {
    setCurrent((current + 1) % items.length)

  }

  function HandleIndicators(i) {
    setCurrent(i)
  }

  let currentPokemonPic = items[current].src

  return (
    <div className='container'>
      <div className='row pokemon-font'>
        <h1 style={{ userSelect: 'none' }}>{items[current].name}</h1>
      </div>
      <div className='row'>
        <ChevLeft OnSelect={() => HandleChevLeft() }/>
        <PokemonPicture
          src={ currentPokemonPic }
          alt={ items[current].name }/>
        <ChevRight OnSelect={() => HandleChevRight()}/>
      </div>
      <div className='row'>
        <Indicators
          count={items.length}
          OnSelect={HandleIndicators}
          current={current}
        />
      </div>
    </div>
  )
}



function PokemonPicture({ src, alt }) {
  return (
    <div style={{userSelect: 'none'}}>
      <img src={src} alt={alt} />
    </div>
  )
}



function ChevLeft({ OnSelect }) {
  return (
    <div>
    <FaChevronLeft className='chev' onClick={OnSelect}/>
    </div>
  )
}

function ChevRight({ OnSelect }) {
  return (
    <div>
      <FaChevronRight className='chev' onClick={OnSelect} />
    </div>
  )
}

function Indicators({ count, OnSelect, current }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      current === i ?
      <FaCircle className='indicator'
      onClick={() => OnSelect(i)}
      current={current}
      key={i}/> :
        <FaRegCircle className='indicator'
          onClick={() => OnSelect(i)}
          current={current}
          key={i} />
    )
  }
  return (
    <div style={{display: 'flex'}}>
      {buttons}
    </div>
  )
}
