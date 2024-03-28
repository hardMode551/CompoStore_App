import React from "react";
import Sneakers from "../../assets/images/catalog/sneakers.png";
import Sneakers_2 from "../../assets/images/catalog/sneakers_2.png";
import Sneakers_3 from "../../assets/images/catalog/sneakers_3.png";
import Sneakers_4 from "../../assets/images/catalog/sneakers_4.png";

import styles from "../../styles/Content.module.scss";
import Description from "./Description";

const Content: React.FC = () => {
  const anchors = ["Каталог", "Обувь", "Кроссовки", "Беговые"];
  const title = "Кроссовки мужские Skechers Sunny Dale";
  const images = [
    {
      id: 0,
      src: Sneakers,
    },
    {
      id: 1,
      src: Sneakers_2,
    },
    {
      id: 2,
      src: Sneakers_3,
    },
    {
      id: 3,
      src: Sneakers_4,
    },
  ];

  const [isChecked, setIsChecked] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(images[0].src);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [active, setActive] = React.useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleThumbnailClick = (image: string, index: number) => {
    // Добавляем index в параметры
    setSelectedImage(image);
    setCurrentIndex(index); // Обновляем currentIndex при выборе изображения
  };

  const handlePrevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex].src);
    setCurrentIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex].src);
    setCurrentIndex(newIndex);
  };

  return (
    <section className={styles.root}>
      <div className={styles.anchors}>
        {anchors.map((anchor, index) => (
          <a key={index} href="">
            {anchor} /
          </a>
        ))}
      </div>

      <h1 className={styles.title}>{title.toUpperCase()}</h1>

      <div className={styles.galleryContainer}>
        <div className={styles.mainImageContainer}>
          <img src={selectedImage} alt="Main" className={styles.mainImage} />
        </div>

        <div style={{ display: "flex" }}>
          <div className={styles.arrow} onClick={handlePrevImage}>
            <button className={styles.arrowBtnPrev}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_7348"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.4381 25.3333C18.0488 25.3333 17.6621 25.164 17.3981 24.836L10.9608 16.836C10.5634 16.3413 10.5688 15.6347 10.9754 15.1467L17.6421 7.14666C18.1128 6.58132 18.9541 6.50532 19.5208 6.97599C20.0861 7.44666 20.1621 8.28799 19.6901 8.85332L13.7234 16.0147L19.4768 23.164C19.9381 23.7373 19.8474 24.5773 19.2728 25.0387C19.0274 25.2373 18.7314 25.3333 18.4381 25.3333Z"
                    fill="#071435"
                  />
                </mask>
                <g mask="url(#mask0_1_7348)">
                  <rect width="32" height="32" fill="#1551E5" />
                </g>
              </svg>
            </button>
          </div>
          <div className={styles.thumbnailContainer}>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Thumbnail ${image.id}`}
                className={styles.thumbnail}
                onClick={() => handleThumbnailClick(image.src, image.id)}
              />
            ))}
          </div>
          <div className={styles.arrow} onClick={handleNextImage}>
            <button className={styles.arrowBtnNext}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_7355"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3327 25.3333C13.0313 25.3333 12.7287 25.232 12.4793 25.024C11.914 24.5533 11.838 23.712 12.3087 23.1467L18.2767 15.9853L12.5233 8.83601C12.062 8.26267 12.1527 7.42267 12.726 6.96134C13.3007 6.50001 14.1393 6.59067 14.602 7.16401L21.0393 15.164C21.4367 15.6587 21.4313 16.3653 21.0247 16.8533L14.358 24.8533C14.094 25.1693 13.7153 25.3333 13.3327 25.3333Z"
                    fill="#071435"
                  />
                </mask>
                <g mask="url(#mask0_1_7355)">
                  <rect width="32" height="32" fill="#1551E5" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles.info}>
          <p className={styles.procent}>166 534.00 цена без скидки</p>

          <div className={styles.price}>
            <h2>122 566 ₽</h2>
            <p>-15%</p>
          </div>

          <div className={styles.amount}>
            <p>12 штук в уп.</p>
            <label onClick={handleCheckboxChange} htmlFor="">
              {isChecked ? (
                <svg
                  width="49"
                  height="33"
                  viewBox="0 0 49 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.354004"
                    y="0.0244141"
                    width="48"
                    height="32"
                    rx="16"
                    fill="#1551E5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.354 30.0244C40.086 30.0244 46.354 23.7564 46.354 16.0244C46.354 8.29243 40.086 2.02441 32.354 2.02441C24.622 2.02441 18.354 8.29243 18.354 16.0244C18.354 23.7564 24.622 30.0244 32.354 30.0244Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="49"
                  height="33"
                  viewBox="0 0 49 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.354004"
                    y="0.0244141"
                    width="48"
                    height="32"
                    rx="16"
                    fill="#828EAD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.354 30.0244C24.086 30.0244 30.354 23.7564 30.354 16.0244C30.354 8.29243 24.086 2.02441 16.354 2.02441C8.62202 2.02441 2.354 8.29243 2.354 16.0244C2.354 23.7564 8.62202 30.0244 16.354 30.0244Z"
                    fill="white"
                  />
                </svg>
              )}
              <input
                checked={isChecked}
                onChange={() => {}}
                type="checkbox"
                style={{ display: "none" }}
              />
              Заказ упаковкой
            </label>
          </div>

          <table>
            <tbody>
              <tr>
                <th>Завтра</th>
                <th>7 шт.</th>
                <th>7 шт.</th>
              </tr>
              <tr>
                <td>Доставка</td>
                <td>Тарасовка</td>
                <td>Тарасовка</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.btns}>
            <button>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <rect
                  id="\Icon"
                  width="24.000000"
                  height="24.000000"
                  transform="translate(-0.500000 0.000000)"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <mask
                  id="mask6_6599"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="-0.500000"
                  y="0.000000"
                  width="24.000000"
                  height="24.000000"
                >
                  <path
                    id="Mask"
                    d="M11.5 15.5C11.24 15.5 10.98 15.4 10.79 15.2L6.79 11.2C6.4 10.81 6.4 10.18 6.79 9.79C7.18 9.4 7.81 9.4 8.2 9.79L11.51 13.09L14.8 9.91C15.2 9.53 15.83 9.54 16.21 9.94C16.6 10.34 16.59 10.97 16.19 11.35L12.19 15.21C12 15.4 11.75 15.5 11.5 15.5Z"
                    fill="#071435"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </mask>
                <g mask="url(#mask6_6599)">
                  <rect
                    id="White"
                    width="24.000000"
                    height="24.000000"
                    transform="translate(-0.500000 0.000000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <rect
                    id="Danger"
                    width="24.000000"
                    height="24.000000"
                    transform="translate(-0.500000 0.000000)"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                  />
                </g>
              </svg>
              В корзину
            </button>

            <div onClick={toggleActive}>
              {!active ? (
                  <svg
                    className={styles.heart}
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <rect
                      id="\Icon"
                      width="24.000000"
                      height="24.000000"
                      fill="#FFFFFF"
                      fill-opacity="0"
                    />
                    <mask
                      id="mask6_6659"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="0.000000"
                      y="0.000000"
                      width="24.000000"
                      height="24.000000"
                    >
                      <path
                        id="Mask"
                        d="M11.2927 20.706C11.4797 20.895 11.7347 21 11.9997 21C12.2657 21 12.5197 20.895 12.7077 20.707L20.4757 12.926C22.5117 10.886 22.5117 7.56702 20.4747 5.52698C19.4917 4.54303 18.1787 4 16.7807 4C15.3807 4 14.0687 4.54303 13.0847 5.52802L11.9997 6.61401L10.9147 5.52698C9.93168 4.54303 8.61868 4 7.21968 4C5.82068 4 4.50868 4.54303 3.52468 5.52698C1.48868 7.56702 1.48868 10.886 3.52468 12.926L11.2927 20.706ZM7.21968 6C6.35568 6 5.54568 6.33398 4.93968 6.94098C3.68168 8.20099 3.68168 10.252 4.94068 11.514L11.9997 18.585L19.0597 11.514C20.3187 10.252 20.3187 8.20099 19.0597 6.94098C17.8477 5.72601 15.7117 5.72803 14.4997 6.94098L12.7077 8.73602C12.3317 9.11298 11.6677 9.11298 11.2917 8.73602L9.49968 6.94C8.89368 6.33398 8.08468 6 7.21968 6Z"
                        clip-rule="evenodd"
                        fill="#071435"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </mask>
                    <g mask="url(#mask6_6659)">
                      <rect
                        id="Brand"
                        width="24.000000"
                        height="24.000000"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                      />
                      <rect
                        id="Danger"
                        width="24.000000"
                        height="24.000000"
                        fill="#1551E5"
                        fill-opacity="1.000000"
                      />
                    </g>
                  </svg>
              ) : (
                <svg
                  className={styles.heart}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2021_1463"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="25"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.9997 21.8584C11.7347 21.8584 11.4797 21.7534 11.2927 21.5644L3.52471 13.7844C1.48871 11.7444 1.48871 8.4254 3.52471 6.3854C4.50871 5.4014 5.82071 4.8584 7.21971 4.8584C8.61871 4.8584 9.93171 5.4014 10.9147 6.3854L11.9997 7.4724L13.0847 6.3864C14.0687 5.4014 15.3807 4.8584 16.7807 4.8584C18.1787 4.8584 19.4917 5.4014 20.4747 6.3854C22.5117 8.4254 22.5117 11.7444 20.4757 13.7844L12.7077 21.5654C12.5197 21.7534 12.2657 21.8584 11.9997 21.8584Z"
                      fill="#071435"
                    />
                  </mask>
                  <g mask="url(#mask0_2021_1463)">
                    <rect
                      width="24"
                      height="24"
                      transform="translate(0 0.858398)"
                      fill="#FF3D71"
                    />
                  </g>
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className={styles.characteristics}>
          <h1>Характеристики</h1>
          <div className={styles.list}>
            <div className={styles.item}>
              <h3>ELC00696</h3>
              <p>Код поставщика</p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>ELC0200000696</h3>
              <p className={styles.text}>Артикул</p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>ELC00696</h3>
              <p className={styles.text}>Код РАЭК</p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>ELC00696</h3>
              <p className={styles.text}>Код ЕТМ</p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>Electric used</h3>
              <p className={styles.text}>Бренд</p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>ELC00696</h3>
              <p className={styles.text}>Серия</p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>ELC0200000696</h3>
              <p className={styles.text}>Код производителя </p>
            </div>
          </div>
        </div>
        <Description />
      </div>
    </section>
  );
};

export default Content;
