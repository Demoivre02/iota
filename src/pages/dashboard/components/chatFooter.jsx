import React from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';
import EmojiPicker, { Emoji } from 'emoji-picker-react';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export function ChatFooter() {
  const [openState, setOpenState] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const onEmojiClick = (emojiObject) => {
    setChosenEmoji(emojiObject);
    setInputValue(inputValue ? inputValue + emojiObject.emoji : emojiObject.emoji);
  };


  const setToStorage = () => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const newMessage = inputValue;
    const updatedMessages = [...storedMessages, newMessage];
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
    setInputValue('');
  };


  const openEmojiPicker = () => {
    setOpenState(!openState);
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRecordingComplete = (blob) => {
    // ... handle recording
    return <AudioPlayer blob={blob} />; // Return the AudioPlayer component
  };

  return (
    <div className="flex gap-[15px] px-[18px] py-[12px] bg-[#fff] justify-between items-center items-end">
      <div className="flex gap-[25px] relative">
        <div className="w-[100%] relative rounded-full bg-[#fff] hover:bg-[#DFFBFD] flex justify-center items-center">
          <div
            onClick={openEmojiPicker}
            className="w-[30px] h-[30px] rounded-full bg-[#fff] hover:bg-[#DFFBFD] flex justify-center items-center"
          >
            <Icon icon="mingcute:emoji-line" color="#1ba9b5" width="20" />
          </div>

          {openState && (
            <div className="absolute translate-x-[140px] translate-y-[-200px]">
              <EmojiPicker open={openState} width={350} height={350} onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>

        <div className="w-[30px] h-[30px] rounded-full bg-[#fff] rotate-45 hover:bg-[#DFFBFD] flex justify-center items-center">
          <Icon icon="subway:pin" color="#1ba9b5" width="20" />
        </div>

        <div>
            <input
            className="outline-[0px] border-[#DFFBFD] md:w-[700px] text-[12px]"
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={onInputChange}
            />
        </div>

      </div>

      <div className="w-[30px] h-[30px] rounded-full bg-[#fff] hover:bg-[#DFFBFD] flex justify-center items-center">
        <div style={{display: inputValue == '' ? "block" : "none"}}>
            <AudioRecorder onRecordingComplete={handleRecordingComplete} />
        </div>

        <div onClick={setToStorage} style={{display: inputValue != '' ? "block" : "none"}}  className="w-[30px] h-[30px] rounded-full bg-[#fff] hover:bg-[#DFFBFD] flex justify-center items-center">
            <Icon icon="material-symbols:send" color="#1ba9b5" width="30"  />
        </div>

      </div>
    </div>
  );
}
