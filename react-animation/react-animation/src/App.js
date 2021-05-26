import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "./styles.css";

import useSound from 'use-sound';

import boopSfx from './sounds/boop.mp3';

import soundUrl from './sounds/909-drums.mp3';

/**
 * This is an example of animating between different components in Framer Motion 2.
 *
 * By wrapping a tree with AnimateSharedLayout, children can be given a layoutId.
 *
 * When a component with a layoutId is removed and a new one with the same layoutId
 * is added elsewhere, the new component will animate from the old one.
 *
 * The outline being animated here is four different components, animated like one.
 */

export default function App() {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <AnimateSharedLayout>
      <ul>
        {colors.map(color => (
          <Item
            key={color}
            color={color}
            isSelected={selected === color}
            onClick={() => setSelected(color)}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  );
}

function Item({ color, isSelected, onClick }) {

  // const [play] = useSound(boopSfx);

  // const soundUrl = './sounds/909-drums.mp3';

  const [play] = useSound(soundUrl, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    }
  });

  return (
    <li className="item" onClick={onClick} onMouseDown={() => play({ id: 'kick' })}  style={{ backgroundColor: color }}>
      
      <li className="item" onClick={onClick} />
      {isSelected && (
        <motion.div
          // onMouseDown={() => play({ id: 'kick' })}
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </li>
  );
}

const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};
