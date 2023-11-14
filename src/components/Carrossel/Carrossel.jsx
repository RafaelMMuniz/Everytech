"useState"
import React, { useState, useEffect } from 'react';


export default function Carrossel() {
  const [current, setCurrent] = useState(0);
  const total = React.Children.toArray([...document.querySelectorAll('.carousel-item')]).length;

  const moveRight = () => {
    const next = current + 1;
    setSlide(current, next);
  };

  const moveLeft = () => {
    const prev = current - 1;
    setSlide(current, prev);
  };

  const setSlide = (prev, next) => {
    let slide = next;

    if (next > total - 1) {
      slide = 0;
      setCurrent(0);
    }

    if (next < 0) {
      slide = total - 1;
      setCurrent(total - 1);
    }

    document.querySelectorAll('.carousel-item')[prev].classList.remove('active');
    document.querySelectorAll('.carousel-item')[slide].classList.add('active');

    setTimeout(() => {
      // Qualquer coisa que você queira fazer após a mudança de slide
    }, 800);

    console.log('current ' + current);
    console.log('prev ' + prev);
  };

  return (
    <div className="carousel">
      <div className={`carousel-item ${current === 0 ? 'active' : ''}`}>
        <div className="carousel-item__info">
          {/* Conteúdo do carrossel (título, subtítulo, etc.) */}
        </div>
        <div
          className="carousel-item__image"
          style={{
            backgroundImage: `IA.png')`, // Substitua pelo caminho da sua imagem local
          }}
        ></div>
      </div>

      <div className={`carousel-item ${current === 1 ? 'active' : ''}`}>
        <div className="carousel-item__info">
          {/* Conteúdo do carrossel (título, subtítulo, etc.) */}
        </div>
        <div
          className="carousel-item__image"
          style={{
            backgroundImage: `/CHATBOT.png')`, // Substitua pelo caminho da sua imagem local
          }}
        ></div>
      </div>

      <div className={`carousel-item ${current === 2 ? 'active' : ''}`}>
        <div className="carousel-item__info">
          {/* Conteúdo do carrossel (título, subtítulo, etc.) */}
        </div>
        <div
          className="carousel-item__image"
          style={{
            backgroundImage: `BD.png')`, // Substitua pelo caminho da sua imagem local
          }}
        ></div>
      </div>

      {/* Adicione mais itens de carrossel conforme necessário */}
      <button id="moveRight" onClick={moveRight}>
        Move Right
      </button>
      <button id="moveLeft" onClick={moveLeft}>
        Move Left
      </button>
    </div>
  );
}


