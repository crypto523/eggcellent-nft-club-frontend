import React, { useEffect, useRef, useState } from "react";
import { TypeWrapper } from "./styles";

type Props = {
  texts: Array<string>;
} & React.HTMLAttributes<HTMLElement>;

export const TextTypingAnimation: React.FC<Props> = ({ texts, className }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const displayedTextRef = useRef("");

  useEffect(() => {
    if (texts?.length !== 0) {
      const isEmptyDisplay = displayedTextRef.current === "";
      // to extra delay in order to show fully text
      const shouldDelayNextProcess =
        isDelete && displayedTextRef.current.length === texts[textIndex].length;

      displayedTextRef.current = texts[textIndex].substr(0, charIndex);

      timeoutRef.current = setTimeout(
        () => {
          if (isDelete && isEmptyDisplay) {
            // when finish the deletion of current text, then start displaying next text index
            // if it's the last index already, then start the first text index
            setIsDelete(false);
            setTextIndex((prevTextIndex) =>
              prevTextIndex + 1 < texts.length ? prevTextIndex + 1 : 0
            );
          } else if (
            isDelete ||
            displayedTextRef.current === texts[textIndex]
          ) {
            // if the current text is displayed fully OR on deletion process,
            // then decrease sub-string index of current text to start deletion process
            // setIsDelete(true);
            // setCharIndex((prevSubIndex) =>
            //   prevSubIndex !== -1 ? prevSubIndex - 1 : 0
            // );
          } else if (
            !isDelete &&
            displayedTextRef.current !== texts[textIndex]
          ) {
            // if it is not on deletion process and the full text has not been displayed yet
            // then increase sub-string index of current text
            setCharIndex((prevCharIndex) =>
              prevCharIndex + 1 <= texts[textIndex].length
                ? prevCharIndex + 1
                : 0
            );
          }
        },
        shouldDelayNextProcess ? 1500 : 150 - Math.random() * 100
      );
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [texts, charIndex, textIndex, isDelete]);

  return (
    <TypeWrapper className={className}>
      {displayedTextRef.current}
      <span className="cursor">|</span>
    </TypeWrapper>
  );
};
