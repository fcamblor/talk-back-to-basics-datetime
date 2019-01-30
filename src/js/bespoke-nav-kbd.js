'use strict';

// adapted from https://github.com/opendevise/bespoke-nav-kbd/blob/master/lib/bespoke-nav-kbd.js

export default function configurePlugin () {

  return function initPlugin (deck) {

    var byDeckIndexSoundsToPlay = {
        0: '#clock-forest'
    };

    const keyHandlers = {
      ArrowRight: () => deck.next(),
      PageDown: () => deck.next(),
      ArrowLeft: () => deck.prev(),
      PageUp: () => deck.prev(),
      Home: () => deck.slide(0),
      End: () => deck.slide(deck.slides.length - 1),
      // Play background sound
      ' ': () => {
          let audioSelector = byDeckIndexSoundsToPlay[deck.slide()];
          if(audioSelector) {
              let $audio = document.querySelector(audioSelector);
              if($audio.currentTime) {
                  $audio.pause();
                  $audio.currentTime = 0;
              } else {
                  $audio.play();
              }
          }
      }
    };

    function onKey ({ key }) {
      const handler = keyHandlers[key];
      if (handler != null) {
        handler();
      }
    }

    deck.on('destroy', () => {
      document.removeEventListener('keydown', onKey);
    });

    document.addEventListener('keydown', onKey);
  };
}
