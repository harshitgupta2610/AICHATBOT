import React from 'react';
import styles from './Chat.module.css';
import { marked } from 'marked';

export default function Chat({ messages }) {
  return (
    <>
    <nav className={styles.navb}>
      <span className={styles.title}>SKY Bot</span>
    </nav>
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={styles.bubble + ' ' + (msg.from === 'user' ? styles.user : styles.ai)}
            style={{ alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start' }}
            {...(msg.from === 'ai'
              ? { dangerouslySetInnerHTML: { __html: marked.parse(msg.text) } }
              : {})}
          >
            {msg.from === 'user' ? msg.text : null}
          </div>
        ))}
      </div>
    </div>
    </>
  );
} 