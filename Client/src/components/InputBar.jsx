import React from 'react';
import styles from './Chat.module.css';

export default function InputBar({ input, setInput, onSend }) {
  return (
    <form className={styles.inputBar} onSubmit={onSend}>
      <input
        className={styles.input}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button className={styles.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
} 