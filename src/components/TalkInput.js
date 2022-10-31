import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TalkInput({ addTalk }) {
  const [text, setText] = useState('');

  function addtalk() {
    if (text.trim()) {
      addTalk(text);
      setText('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="talk-input">
      <textarea data-cy="talk-input" type="text" placeholder="What are you thinking?" value={text} onChange={handleTextChange} />
      <p className="talk-input__char-left">
        <strong>{text.length}</strong>
        /320
      </p>
      <button data-cy="talk-button" type="submit" onClick={addtalk}>Talk</button>
    </div>
  );
}

TalkInput.propTypes = {
  addTalk: PropTypes.func.isRequired,
};

export default TalkInput;
