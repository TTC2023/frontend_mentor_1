import React from 'react'
import { useState } from 'react'
import styles from './ImageCarousel.module.css';
import oneShoeUpMain from '../../assets/image-product-1.jpg'
import sticksMain from '../../assets/image-product-2.jpg'
import inBetweenMain from '../../assets/image-product-3.jpg'
import floatingMain from '../../assets/image-product-4.jpg'
import oneShoeUp from '../../assets/image-product-1-thumbnail.jpg'
import sticks from '../../assets/image-product-2-thumbnail.jpg'
import inBetween from '../../assets/image-product-3-thumbnail.jpg'
import floating from '../../assets/image-product-4-thumbnail.jpg'
import close from '../../assets/icon-close.svg'
import next from '../../assets/icon-next.svg'
import previous from '../../assets/icon-previous.svg'

const ImageCarousel = () => {

  const [main, setMain] = useState(oneShoeUpMain)
  const [selected, setSelected] = useState(1)
  const [enlarged, setEnlarged] = useState(false)

  const handleMain = (name, num) => {
    setMain(name)
    setSelected(num)
    console.log(selected)
  }

  const handleEnlarged = () => {
    setEnlarged(true)
    console.log(enlarged)
  }

  const closeEnlarged = () => {
    setEnlarged(false)
  }

  const handleCarousel = (action) => {
    let newSelected = selected;

    if (action === 'next' && selected < 4) {
      newSelected = selected + 1;
    }
    else if (action === 'previous' && selected > 1) {
      newSelected = selected - 1;
    }

    setSelected(newSelected);

    switch (newSelected) {
      case 1:
        setMain(oneShoeUpMain);
        break;
      case 2:
        setMain(sticksMain);
        break;
      case 3:
        setMain(inBetweenMain);
        break;
      case 4:
        setMain(floatingMain);
        break;
      default:
        setMain(oneShoeUpMain);
        break;
    }
  }

  return (
    <div className={enlarged ? styles.enImageCarousel : styles.imageCarousel}>
      {enlarged ?
        <div className={styles.enlargedContainer}>
          <img onClick={()=>handleCarousel('next')} className={styles.next} src={next} alt="next" />
          <img onClick={()=>handleCarousel('previous')} className={styles.previous} src={previous} alt="previous" />
          <img onClick={closeEnlarged} className={styles.close} src={close} alt="close" />
          <img onClick={handleEnlarged} className={styles.enlargedMainImg} src={main} alt='image' />
          <div className={styles.enlargedCarousel}>
            <img className={selected === 1 ? styles.selected : ''} onClick={() => handleMain(oneShoeUpMain, 1)} src={oneShoeUp} alt="image-1-th" />
            <img className={selected === 2 ? styles.selected : ''} onClick={() => handleMain(sticksMain, 2)} src={sticks} alt="image-2-th" />
            <img className={selected === 3 ? styles.selected : ''} onClick={() => handleMain(inBetweenMain, 3)} src={inBetween} alt="image-3-th" />
            <img className={selected === 4 ? styles.selected : ''} onClick={() => handleMain(floatingMain, 4)} src={floating} alt="image-4-th" />
          </div>
        </div> :
        <div className={styles.container}>
          <img onClick={handleEnlarged} className={styles.mainImg} src={main} alt='image' />
          <div className={styles.carousel}>
            <img className={selected === 1 ? styles.selected : ''} onClick={() => handleMain(oneShoeUpMain, 1)} src={oneShoeUp} alt="image-1-th" />
            <img className={selected === 2 ? styles.selected : ''} onClick={() => handleMain(sticksMain, 2)} src={sticks} alt="image-2-th" />
            <img className={selected === 3 ? styles.selected : ''} onClick={() => handleMain(inBetweenMain, 3)} src={inBetween} alt="image-3-th" />
            <img className={selected === 4 ? styles.selected : ''} onClick={() => handleMain(floatingMain, 4)} src={floating} alt="image-4-th" />
          </div>
        </div>
      }
    </div>
  )
}

export default ImageCarousel