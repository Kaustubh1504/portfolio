import React, { useState, useEffect } from 'react';

export default function WelcomeScreen() {
  const titleText = "Hello, I'm Kaustubh Gharat.";
  const subheadingText = "I am a full stack developer. Explore my projects, skills and more.";
  
  const [typedTitle, setTypedTitle] = useState('');
  const [typedSubheading, setTypedSubheading] = useState('');
  const [isTitleTypingFinished, setIsTitleTypingFinished] = useState(false);

  useEffect(() => {
    let titleTypingTimeout: NodeJS.Timeout;
    if (!isTitleTypingFinished && typedTitle.length < titleText.length) {
      titleTypingTimeout = setTimeout(() => {
        setTypedTitle(titleText.substring(0, typedTitle.length + 1));
      }, 50); // Adjust typing speed here
    } else if (!isTitleTypingFinished) {
      setIsTitleTypingFinished(true);
    }
    return () => clearTimeout(titleTypingTimeout);
  }, [typedTitle, isTitleTypingFinished, titleText]);

  useEffect(() => {
    let subheadingTypingTimeout: NodeJS.Timeout;
    if (isTitleTypingFinished && typedSubheading.length < subheadingText.length) {
      subheadingTypingTimeout = setTimeout(() => {
        setTypedSubheading(subheadingText.substring(0, typedSubheading.length + 1));
      }, 30); // Adjust typing speed here
    }
    return () => clearTimeout(subheadingTypingTimeout);
  }, [typedSubheading, isTitleTypingFinished, subheadingText]);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <style>
        {`
          @keyframes cursorBlink {
            0%, 100% { border-color: transparent; }
            50% { border-color: #4285F4; }
          }
          @keyframes colorCycle {
            0% { border-color: #4285F4; }
            25% { border-color: #DB4437; }
            50% { border-color: #F4B400; }
            75% { border-color: #0F9D58; }
            100% { border-color: #4285F4; }
          }
          .typing-cursor {
            border-right: 2px solid;
            animation: colorCycle 2s infinite, cursorBlink 1s step-end infinite;
          }
        `}
      </style>
      <div className="mb-15">
        <h1 className="text-5xl font-semibold mb-4 text-white">
          {typedTitle}
          {!isTitleTypingFinished && <span className="typing-cursor"></span>}
        </h1>
        <p className={`text-xl text-gray-400 ${isTitleTypingFinished ? 'visible' : 'invisible'}`}>
          {typedSubheading}
          {isTitleTypingFinished && typedSubheading.length < subheadingText.length && <span className="typing-cursor"></span>}
        </p>
      </div>
    </div>
  );
}


//gradient code

// import React, { useState, useEffect } from 'react';

// export default function WelcomeScreen() {
//   const titleText = "Hello, I'm Kaustubh Gharat.";
//   const subheadingText = "I am a full stack developer. Explore my projects, skills and more.";
  
//   const [typedTitle, setTypedTitle] = useState('');
//   const [typedSubheading, setTypedSubheading] = useState('');
//   const [isTitleTypingFinished, setIsTitleTypingFinished] = useState(false);
//   const googleColors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];

//   useEffect(() => {
//     let titleTypingTimeout: NodeJS.Timeout;
//     if (!isTitleTypingFinished && typedTitle.length < titleText.length) {
//       titleTypingTimeout = setTimeout(() => {
//         setTypedTitle(titleText.substring(0, typedTitle.length + 1));
//       }, 100); // Increased typing speed to 100ms
//     } else if (!isTitleTypingFinished) {
//       setIsTitleTypingFinished(true);
//     }
//     return () => clearTimeout(titleTypingTimeout);
//   }, [typedTitle, isTitleTypingFinished, titleText]);

//   useEffect(() => {
//     let subheadingTypingTimeout: NodeJS.Timeout;
//     if (isTitleTypingFinished && typedSubheading.length < subheadingText.length) {
//       subheadingTypingTimeout = setTimeout(() => {
//         setTypedSubheading(subheadingText.substring(0, typedSubheading.length + 1));
//       }, 60); // Increased typing speed to 60ms
//     }
//     return () => clearTimeout(subheadingTypingTimeout);
//   }, [typedSubheading, isTitleTypingFinished, subheadingText]);

//   return (
//     <div className="flex flex-col items-center justify-center text-center p-4">
//       <style>
//         {`
//           @keyframes cursorBlink {
//             0%, 100% { border-color: transparent; }
//             50% { border-color: #4285F4; }
//           }
//           @keyframes colorCycle {
//             0% { border-color: #4285F4; }
//             25% { border-color: #DB4437; }
//             50% { border-color: #F4B400; }
//             75% { border-color: #0F9D58; }
//             100% { border-color: #4285F4; }
//           }
//           .typing-cursor {
//             border-right: 2px solid;
//             animation: colorCycle 2s infinite, cursorBlink 1s step-end infinite;
//           }

//           .gradient-text {
//             background-image: linear-gradient(to right, #4285F4, #DB4437, #F4B400, #0F9D58);
//             background-clip: text;
//             -webkit-background-clip: text;
//             color: transparent;
//             -webkit-text-fill-color: transparent;
//           }
//         `}
//       </style>
//       <div className="mb-15">
//         <h1 className="text-5xl font-semibold mb-4 text-white">
//           {typedTitle.split('').map((char, index) => (
//             <span 
//               key={index} 
//               className={index === typedTitle.length - 1 && !isTitleTypingFinished ? 'gradient-text' : 'text-white'}
//             >
//               {char}
//             </span>
//           ))}
//           {!isTitleTypingFinished && <span className="typing-cursor"></span>}
//         </h1>
//         <p className={`text-xl text-gray-400 ${isTitleTypingFinished ? 'visible' : 'invisible'}`}>
//           {typedSubheading.split('').map((char, index) => (
//             <span 
//               key={index} 
//               className={index === typedSubheading.length - 1 && isTitleTypingFinished ? 'gradient-text' : 'text-gray-400'}
//             >
//               {char}
//             </span>
//           ))}
//           {isTitleTypingFinished && typedSubheading.length < subheadingText.length && <span className="typing-cursor"></span>}
//         </p>
//       </div>
//     </div>
//   );
// }
