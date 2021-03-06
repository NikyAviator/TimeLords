import { useState } from 'react'
import { Container } from 'react-bootstrap'
import $ from 'jquery'

const EasterEgg = () => {
  let toggle = false;

  function handleClick(e) {
    e.preventDefault()
    toggle = !toggle;
    if (toggle) {
      $('.easter-egg .image').css({
        backgroundImage: 'url("../images/android-chrome-192x192.png")',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-reapeat'
      })
    } else {
      $('.easter-egg .image').css({
        backgroundImage: 'url("../images/easter-egg.png")',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-reapeat'
      })
    }
    $('#player').each(function () {
      if (toggle) {
        this.play();
        const interval = setInterval(() => {
          $('.easter-egg .image').css({
            backgroundImage: 'url("../images/easter-egg.png")',
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-reapeat'
          })
        }, 4000)
        toggle = false;
        return () => clearInterval(interval)
      }
    });
  }

  function handleOnMouseOver(e) {
    e.preventDefault()
    $('.easter-egg .image').css('visibility', 'visible')
  }

  function handleOnMouseOut(e) {
    e.preventDefault()
    $('.easter-egg .image').css('visibility', 'hidden')
  }

  return (
    <>
      <Container className="easter-egg py-5" fluid onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
        <div className="image" onClick={handleClick}></div>
        <audio className="hidden" id="player" controls="controls">
          <source id="mp3_src" src="/sound/easter-egg.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </Container>
    </>
  )
}

export default EasterEgg