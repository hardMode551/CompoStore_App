import React from "react";

import styles from "../../styles/Footer.module.scss";
import FooterHead from "./FooterHead";
import Copyright from "./Copyright";

const categories = {
  'Женщинам': ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Bra fitting'],
  'Мужчинам': ['Одежда', 'Обувь', 'Аксессуары', 'Белье'],
  'Детям': ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Игрушки', 'Малыши'],
  'Виды спорта': ['Велоспорт', 'Туризм', 'Тренажеры и фитнес', 'Командные виды спорта', 'Самокаты']
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <FooterHead />

      <div className={styles.table}>
      {Object.entries(categories).map(([title, items]) => (
        <div key={title} className={styles.column}>
          <h1>{title}</h1>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      ))}
      </div>

      <Copyright />
    </footer>
  );
};

export default Footer;
