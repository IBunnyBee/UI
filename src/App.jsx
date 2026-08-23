import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';


import slide1 from './assets/Folder_002.webp';
import slide2 from './assets/slide1.webp';
import slide4 from './assets/Folder_002 (4).webp';
import slide5 from './assets/Folder_002 (1).webp';
import slide6 from './assets/Folder_002-lBfzNTI8.webp'; 
import slide7 from './assets/Folder_002 (3).webp';
import slide8 from './assets/Folder_002 (5).webp';

const initialCards = [
  slide1, 
  slide2, 
  slide4, 
  slide5, 
  slide6, 
  slide7, 
  slide8
];

export default function App() {
  const [cards, setCards] = useState(initialCards);

  const activeOriginalIndex = initialCards.indexOf(cards[0]);

  const goToSlide = (targetOriginalIndex) => {
    const newArray = [
      ...initialCards.slice(targetOriginalIndex),
      ...initialCards.slice(0, targetOriginalIndex)
    ];
    setCards(newArray);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -150) {
      setCards((prev) => {
        const newArr = [...prev];
        newArr.push(newArr.shift());
        return newArr;
      });
    } else if (info.offset.x > 150) {
      setCards((prev) => {
        const newArr = [...prev];
        newArr.unshift(newArr.pop());
        return newArr;
      });
    }
  };

  const getCardTransforms = (index) => {
    if (index === 0) return { x: 0, y: 0, rotate: 0, scale: 1 };         
    if (index === 1) return { x: 40, y: 5, rotate: 2, scale: 0.95 };       
    if (index === 2) return { x: 80, y: 12, rotate: 4, scale: 0.9 };      
    if (index === 3) return { x: 120, y: 20, rotate: 6, scale: 0.85 };     
    if (index === 4) return { x: 0, y: 0, rotate: 0, scale: 0.8 };         
    if (index === 5) return { x: -120, y: 20, rotate: -6, scale: 0.85 };   
    if (index === 6) return { x: -80, y: 12, rotate: -4, scale: 0.9 };    
    if (index === 7) return { x: -40, y: 5, rotate: -2, scale: 0.95 };     
  };

 return (
    <>
      <div className="comic-background">
        <div className="bg-frame" style={{ backgroundImage: `url(${bg1})` }}></div>
        <div className="bg-frame" style={{ backgroundImage: `url(${bg2})` }}></div>
        <div className="bg-frame" style={{ backgroundImage: `url(${bg3})` }}></div>
      </div>

    {/* ---> THE NEW TOP LEFT TEXT LOGO <--- */}
      <div className="top-left-text">BUNNYBEE</div>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '-20px' 
      }}>
        
        <div className="card-container">
          {cards.map((imageSource, index) => {
            const isFront = index === 0;
            const transforms = getCardTransforms(index);

            return (
              <motion.div
                key={imageSource} 
                className="framer-card"
                animate={{ 
                  x: transforms.x,
                  y: transforms.y, 
                  rotateZ: transforms.rotate, 
                  scale: transforms.scale,
                  zIndex: 10 - Math.min(index, cards.length - index),
                  opacity: 1 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  zIndex: { delay: isFront ? 0.15 : 0 }
                }}
                drag={isFront ? "x" : false} 
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={isFront ? handleDragEnd : undefined}
              >
                <img 
                  src={imageSource} 
                  alt="Portfolio Folder" 
                  className="folder-image" 
                  draggable="false"
                />
              </motion.div>
            );
          })}
        </div>
{/* 3. THE PAGINATION "O" TEXT */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          marginTop: '40px', 
          zIndex: 20,
          alignItems: 'center' 
        }}>
          {initialCards.map((_, index) => {
            const isActive = index === activeOriginalIndex;
            return (
              <span
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  fontFamily: "'MyCustomFont', sans-serif", // Applies your font
                  fontSize: isActive ? '24px' : '18px',     // Active "o" is bigger
                  color: isActive ? '#4b4b4b' : 'rgba(104, 104, 104, 0.4)', // Active color vs faded
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  lineHeight: '1',
                  textShadow: '0 2px 5px rgba(0,0,0,0.3)' 
                }}
              >
                o
              </span>
            );
          })}
        </div>
      <div className="social-container">
        
        {/* DISCORD */}
        <a href="https://discord.com/users/ibunnybee" target="_blank" rel="noreferrer" className="social-link">
          <span className="social-text">Discord</span>
          <svg className="social-icon" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </a>

        {/* TWITTER / X */}
        <a href="https://twitter.com/iBunnyBee8" target="_blank" rel="noreferrer" className="social-link">
          <span className="social-text">Twitter</span>
          <svg className="social-icon" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* ROBLOX */}
        <a href="https://roblox.com/users/3543750788/profile" target="_blank" rel="noreferrer" className="social-link">
          <span className="social-text">Roblox</span>
          <svg className="social-icon" viewBox="0 0 24 24">
            <path d="M5.445 0l-5.445 18.555 18.555 5.445 5.445-18.555-18.555-5.445zm6.555 15.55c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
          </svg>
        </a>

      </div>
      </div>
    </>
  );
}