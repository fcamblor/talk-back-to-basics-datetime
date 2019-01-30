'use strict';

export default function configurePlugin () {

  return function initPlugin (deck) {

    deck.on('toggle-slide-deck-state', ({ state, enabled }) => {
      document.body.classList.toggle(`state-${state}`, enabled);
    });
  };
}
