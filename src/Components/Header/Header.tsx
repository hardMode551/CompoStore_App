import React from "react";

import Avatar from "../../assets/images/Avatar.png";

import styles from "../../styles/Header.module.scss";
import HeaderNavMenu from "./HeaderNavMenu";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [activeFavorites, setActiveFavorites] = React.useState(false);
  const [active, setActive] = React.useState(false);


  const toggleActiveFavorites = () => {
    setActiveFavorites(!activeFavorites);
  };

  const toggleActive = () => {
    setActive(!active);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <header className={styles.root}>
      <div className={styles.main}>
        <svg
          width="144"
          height="30"
          viewBox="0 0 144 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7965 2.8C16.7965 1.2536 18.0499 0 19.5959 0H25.1947C26.7407 0 27.994 1.2536 27.994 2.8V8.4C27.994 9.9464 26.7407 11.2 25.1947 11.2H19.5959C18.0499 11.2 16.7965 9.9464 16.7965 8.4V2.8Z"
            fill="#1551E5"
          />
          <path
            d="M16.7965 19.6C16.7965 18.0536 18.0498 16.8 19.5959 16.8H25.1946C26.7407 16.8 27.994 18.0536 27.994 19.6V25.2C27.994 26.7464 26.7407 28 25.1946 28H19.5959C18.0498 28 16.7965 26.7464 16.7965 25.2V19.6Z"
            fill="#1551E5"
          />
          <path
            d="M0.000244141 19.6C0.000244141 18.0536 1.25357 16.8 2.79962 16.8H8.39838C9.94443 16.8 11.1978 18.0536 11.1978 19.6V25.2C11.1978 26.7464 9.94443 28 8.39838 28H2.79962C1.25357 28 0.000244141 26.7464 0.000244141 25.2V19.6Z"
            fill="#1551E5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.7965 8.4C16.7965 9.9464 15.5432 11.2 13.9971 11.2C12.4511 11.2 11.1978 9.9464 11.1978 8.4C11.1978 9.9464 9.94445 11.2 8.39839 11.2C9.94445 11.2 11.1978 12.4536 11.1978 14C11.1978 15.5464 9.94443 16.8 8.39838 16.8L11.1978 19.6C11.1978 18.0536 12.4511 16.8 13.9971 16.8C15.5432 16.8 16.7965 18.0536 16.7965 19.6L19.5959 16.8C18.0498 16.8 16.7965 15.5464 16.7965 14C16.7965 12.4536 18.0498 11.2 19.5959 11.2L16.7965 8.4Z"
            fill="#1551E5"
          />
          <path
            d="M8.39839 0H2.79964C1.25358 0 0.000257809 1.2536 0.000257809 2.8V8.4C0.000257809 9.9464 1.25358 11.2 2.79964 11.2H8.39839L11.1978 8.4V2.8C11.1978 1.2536 9.94445 0 8.39839 0Z"
            fill="#1551E5"
          />
          <path
            d="M11.1978 8.4C11.1978 9.9464 9.94445 11.2 8.39839 11.2L11.1978 8.4Z"
            fill="#1551E5"
          />
          <path
            d="M52.964 10.8769C53.3384 10.7666 53.5407 10.3584 53.3707 10.007C51.9281 7.02397 48.9192 5.11328 45.3178 5.11328C42.7536 5.11328 40.6439 5.95355 38.9236 7.66641C37.2359 9.34695 36.392 11.4476 36.392 14.0007C36.392 16.5539 37.2359 18.6545 38.9236 20.3674C40.6439 22.0479 42.7536 22.8882 45.3178 22.8882C48.9192 22.8882 51.9281 20.9775 53.3707 17.9945C53.5407 17.6431 53.3384 17.2349 52.964 17.1246L50.1634 16.2991C49.8422 16.2045 49.505 16.3658 49.3319 16.6525C48.5035 18.0246 47.027 18.8484 45.3178 18.8484C43.987 18.8484 42.851 18.396 41.9422 17.4588C41.0334 16.5216 40.579 15.3904 40.579 14.0007C40.579 12.6111 41.0334 11.4799 41.9422 10.5427C42.851 9.60549 43.987 9.15304 45.3178 9.15304C47.027 9.15304 48.5035 9.97693 49.3319 11.3489C49.505 11.6357 49.8422 11.797 50.1634 11.7023L52.964 10.8769Z"
            fill="#171D45"
          />
          <path
            d="M58.749 20.3674C60.4693 22.0479 62.579 22.8882 65.1432 22.8882C67.7073 22.8882 69.817 22.0479 71.5373 20.3674C73.2575 18.6545 74.1014 16.5539 74.1014 14.0007C74.1014 11.4476 73.2575 9.34695 71.5373 7.66641C69.817 5.95355 67.7073 5.11328 65.1432 5.11328C62.579 5.11328 60.4693 5.95355 58.749 7.66641C57.0612 9.34695 56.2174 11.4476 56.2174 14.0007C56.2174 16.5539 57.0612 18.6545 58.749 20.3674ZM61.7676 10.5427C62.6764 9.60549 63.8124 9.15304 65.1432 9.15304C66.4739 9.15304 67.6099 9.60549 68.5187 10.5427C69.4275 11.4799 69.8819 12.6111 69.8819 14.0007C69.8819 15.3904 69.4275 16.5216 68.5187 17.4588C67.6099 18.396 66.4739 18.8484 65.1432 18.8484C63.8124 18.8484 62.6764 18.396 61.7676 17.4588C60.8588 16.5216 60.4044 15.3904 60.4044 14.0007C60.4044 12.6111 60.8588 11.4799 61.7676 10.5427Z"
            fill="#171D45"
          />
          <path
            d="M80.2717 22.4034C80.6404 22.4034 80.9393 22.1045 80.9393 21.7357V12.5141C80.9393 10.4781 82.4973 8.95913 84.4772 8.95913C86.4571 8.95913 87.9826 10.4781 87.9826 12.5141V21.7357C87.9826 22.1045 88.2815 22.4034 88.6502 22.4034H91.3721C91.7409 22.4034 92.0398 22.1045 92.0398 21.7357V12.5141C92.0398 10.4781 93.5977 8.95913 95.5776 8.95913C97.5575 8.95913 99.083 10.4781 99.083 12.5141V21.7357C99.083 22.1045 99.3819 22.4034 99.7506 22.4034H102.44C102.809 22.4034 103.108 22.1045 103.108 21.7357V11.3507C103.108 9.57317 102.459 8.08654 101.193 6.89077C99.9269 5.69501 98.3365 5.11328 96.3891 5.11328C94.4182 5.11328 92.829 5.7394 91.6591 7.01024C91.3158 7.38308 90.6867 7.38298 90.3447 7.00902C89.1831 5.739 87.6214 5.11328 85.6781 5.11328C84.0931 5.11328 82.7578 5.58964 81.6886 6.55892C81.4216 6.801 80.9393 6.62627 80.9393 6.26582C80.9393 5.89702 80.6404 5.59805 80.2717 5.59805H77.5498C77.1811 5.59805 76.8821 5.89702 76.8821 6.26582V21.7357C76.8821 22.1045 77.1811 22.4034 77.5498 22.4034H80.2717Z"
            fill="#171D45"
          />
          <path
            d="M109.275 29.6751C109.644 29.6751 109.943 29.3761 109.943 29.0073V22.5391C109.943 21.9507 110.638 21.6085 111.152 21.895C112.332 22.5528 113.623 22.8883 115.039 22.8883C117.376 22.8883 119.323 22.048 120.914 20.3674C122.504 18.6546 123.283 16.5539 123.283 14.0008C123.283 11.4477 122.504 9.34698 120.914 7.66644C119.323 5.95358 117.376 5.11331 115.039 5.11331C113.346 5.11331 111.83 5.59324 110.47 6.53076C110.252 6.68101 109.943 6.53065 109.943 6.26585C109.943 5.89705 109.644 5.59808 109.275 5.59808H106.553C106.185 5.59808 105.886 5.89705 105.886 6.26585V29.0073C105.886 29.3761 106.185 29.6751 106.553 29.6751H109.275ZM117.733 10.5427C118.609 11.48 119.064 12.6111 119.064 14.0008C119.064 15.3905 118.609 16.5216 117.733 17.4588C116.856 18.396 115.785 18.8485 114.519 18.8485C113.254 18.8485 112.183 18.396 111.306 17.4588C110.43 16.5216 110.008 15.3905 110.008 14.0008C110.008 12.6111 110.43 11.48 111.306 10.5427C112.183 9.60552 113.254 9.15307 114.519 9.15307C115.785 9.15307 116.856 9.60552 117.733 10.5427Z"
            fill="#171D45"
          />
          <path
            d="M128.594 20.3674C130.314 22.048 132.424 22.8883 134.988 22.8883C137.552 22.8883 139.662 22.048 141.382 20.3674C143.102 18.6546 143.946 16.5539 143.946 14.0008C143.946 11.4477 143.102 9.34698 141.382 7.66644C139.662 5.95358 137.552 5.11331 134.988 5.11331C132.424 5.11331 130.314 5.95358 128.594 7.66644C126.906 9.34698 126.062 11.4477 126.062 14.0008C126.062 16.5539 126.906 18.6546 128.594 20.3674ZM131.612 10.5427C132.521 9.60552 133.657 9.15307 134.988 9.15307C136.319 9.15307 137.455 9.60552 138.363 10.5427C139.272 11.48 139.727 12.6111 139.727 14.0008C139.727 15.3905 139.272 16.5216 138.363 17.4588C137.455 18.396 136.319 18.8485 134.988 18.8485C133.657 18.8485 132.521 18.396 131.612 17.4588C130.703 16.5216 130.249 15.3905 130.249 14.0008C130.249 12.6111 130.703 11.48 131.612 10.5427Z"
            fill="#171D45"
          />
        </svg>

        <button className={styles.menu}>
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
              fill="#FFFFFF"
              fill-opacity="0"
            />
            <mask
              id="mask2_7048"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0.000000"
              y="0.000000"
              width="24.000000"
              height="24.000000"
            >
              <path
                id="Mask"
                d="M3 7C3 6.448 3.448 6 4 6C4.552 6 5 6.448 5 7C5 7.552 4.552 8 4 8C3.448 8 3 7.552 3 7ZM7.93549 6L20.0645 6C20.5795 6 21.0005 6.42102 21.0005 6.93604L21.0005 7.06396C21.0005 7.57898 20.5795 8 20.0645 8L7.93549 8C7.42047 8 7.00049 7.57898 7.00049 7.06396L7.00049 6.93604C7.00049 6.42102 7.42047 6 7.93549 6ZM3 12C3 11.448 3.448 11 4 11C4.552 11 5 11.448 5 12C5 12.552 4.552 13 4 13C3.448 13 3 12.552 3 12ZM7.93549 11L20.0645 11C20.5795 11 21.0005 11.421 21.0005 11.936L21.0005 12.064C21.0005 12.579 20.5795 13 20.0645 13L7.93549 13C7.42047 13 7.00049 12.579 7.00049 12.064L7.00049 11.936C7.00049 11.421 7.42047 11 7.93549 11ZM4 16C3.448 16 3 16.448 3 17C3 17.552 3.448 18 4 18C4.552 18 5 17.552 5 17C5 16.448 4.552 16 4 16ZM20.0645 16L7.93549 16C7.42047 16 7.00049 16.421 7.00049 16.936L7.00049 17.064C7.00049 17.579 7.42047 18 7.93549 18L20.0645 18C20.5795 18 21.0005 17.579 21.0005 17.064L21.0005 16.936C21.0005 16.421 20.5795 16 20.0645 16Z"
                clip-rule="evenodd"
                fill="#071435"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </mask>
            <g mask="url(#mask2_7048)">
              <rect
                id="White"
                width="24.000000"
                height="24.000000"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <rect
                id="Danger"
                width="24.000000"
                height="24.000000"
                fill="#FFFFFF"
                fill-opacity="1.000000"
              />
            </g>
          </svg>
          Меню
        </button>

        <div className={styles.inputContainer}>
          <svg
            className={`${!inputValue && styles.hidden}`}
            onClick={clearInput}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2006_554"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.7071 6.29301C7.3161 5.90201 6.6841 5.90201 6.2931 6.29301C5.9021 6.68401 5.9021 7.31601 6.2931 7.70701L10.5861 12L6.2931 16.293C5.9021 16.684 5.9021 17.316 6.2931 17.707C6.4881 17.902 6.7441 18 7.0001 18C7.2561 18 7.5121 17.902 7.7071 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"
                fill="#071435"
              />
            </mask>
            <g mask="url(#mask0_2006_554)">
              <rect width="24" height="24" fill="#050D23" />
            </g>
          </svg>

          <svg
            className={`${styles.searchIcon} ${inputValue && styles.hidden}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2006_560"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
                fill="#071435"
              />
            </mask>
            <g mask="url(#mask0_2006_560)">
              <rect width="24" height="24" fill="#050D23" />
            </g>
          </svg>

          <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>

        <svg
          onClick={toggleActive}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2006_573"
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
              d="M7.3528 21.3334L8.92614 19.7574C9.43014 19.2534 9.70747 18.584 9.70747 17.872V11.636C9.70747 9.82669 10.4941 8.09736 11.8675 6.89469C13.2515 5.68136 15.0141 5.14802 16.8501 5.38936C19.9528 5.80136 22.2928 8.60669 22.2928 11.916V17.872C22.2928 18.584 22.5701 19.2534 23.0728 19.756L24.6475 21.3334H7.3528ZM18.6661 24.4547C18.6661 25.6534 17.4448 26.6667 15.9995 26.6667C14.5541 26.6667 13.3328 25.6534 13.3328 24.4547V24H18.6661V24.4547ZM27.3608 20.2774L24.9595 17.872V11.916C24.9595 7.27469 21.6235 3.33202 17.1995 2.74669C14.6368 2.40536 12.0501 3.18802 10.1101 4.88935C8.15814 6.59869 7.0408 9.05735 7.0408 11.636L7.03947 17.872L4.63814 20.2774C4.0128 20.904 3.82747 21.836 4.16614 22.6534C4.50614 23.472 5.2968 24 6.18214 24H10.6661V24.4547C10.6661 27.1454 13.0581 29.3334 15.9995 29.3334C18.9408 29.3334 21.3328 27.1454 21.3328 24.4547V24H25.8168C26.7021 24 27.4915 23.472 27.8301 22.6547C28.1701 21.836 27.9861 20.9027 27.3608 20.2774Z"
              fill="#071435"
            />
          </mask>
          <g mask="url(#mask0_2006_573)">
            <rect width="32" height="32" fill={active ? "#1551E5" : "#77829E"}/>
          </g>
        </svg>

        <svg
          onClick={toggleActiveFavorites}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2006_583"
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
              d="M9.62627 8.00004C8.47427 8.00004 7.39427 8.44537 6.58627 9.25471C4.90894 10.9347 4.90894 13.6694 6.5876 15.352L15.9996 24.78L25.4129 15.352C27.0916 13.6694 27.0916 10.9347 25.4129 9.25471C23.7969 7.63471 20.9489 7.63737 19.3329 9.25471L16.9436 11.648C16.4423 12.1507 15.5569 12.1507 15.0556 11.648L12.6663 9.25337C11.8583 8.44537 10.7796 8.00004 9.62627 8.00004ZM15.9996 28C15.6463 28 15.3063 27.86 15.0569 27.608L4.6996 17.2347C1.98494 14.5147 1.98494 10.0894 4.6996 7.36937C6.0116 6.05737 7.76094 5.33337 9.62627 5.33337C11.4916 5.33337 13.2423 6.05737 14.5529 7.36937L15.9996 8.81871L17.4463 7.37071C18.7583 6.05737 20.5076 5.33337 22.3743 5.33337C24.2383 5.33337 25.9889 6.05737 27.2996 7.36937C30.0156 10.0894 30.0156 14.5147 27.3009 17.2347L16.9436 27.6094C16.6929 27.86 16.3543 28 15.9996 28Z"
              fill="#071435"
            />
          </mask>
          <g mask="url(#mask0_2006_583)">
            <rect width="32" height="32" fill={activeFavorites ? "#FF3D71" : "#77829E"} />
          </g>
        </svg>

        <button className={styles.basket}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2006_593"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3818 14H8.76379L7.12679 8H19.3818L16.3818 14ZM21.0828 6.948C20.7158 6.354 20.0798 6 19.3818 6H6.58179L5.96479 3.737C5.84579 3.302 5.45079 3 4.99979 3H2.99979C2.44679 3 1.99979 3.448 1.99979 4C1.99979 4.552 2.44679 5 2.99979 5H4.23579L7.03479 15.263C7.15379 15.698 7.54879 16 7.99979 16H16.9998C17.3788 16 17.7248 15.786 17.8948 15.447L21.1708 8.894C21.4838 8.269 21.4498 7.542 21.0828 6.948ZM7.49999 18C6.67199 18 5.99999 18.671 5.99999 19.5C5.99999 20.329 6.67199 21 7.49999 21C8.32799 21 8.99999 20.329 8.99999 19.5C8.99999 18.671 8.32799 18 7.49999 18ZM16 19.5C16 18.671 16.672 18 17.5 18C18.328 18 19 18.671 19 19.5C19 20.329 18.328 21 17.5 21C16.672 21 16 20.329 16 19.5Z"
                fill="#071435"
              />
            </mask>
            <g mask="url(#mask0_2006_593)">
              <rect width="24" height="24" fill="#1551E5" />
            </g>
          </svg>
          144 235₽
        </button>

        <div className={styles.user}>
          <img src={Avatar} alt="user" />
          <p>Ермаков Е.</p>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2006_610"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 15.5C11.744 15.5 11.488 15.402 11.293 15.207L7.29301 11.207C6.90201 10.816 6.90201 10.184 7.29301 9.79301C7.68401 9.40201 8.31601 9.40201 8.70701 9.79301L12.012 13.098L15.305 9.91801C15.704 9.53501 16.335 9.54601 16.719 9.94301C17.103 10.34 17.092 10.974 16.695 11.357L12.695 15.219C12.5 15.407 12.25 15.5 12 15.5Z"
                fill="#071435"
              />
            </mask>
            <g mask="url(#mask0_2006_610)">
              <rect width="24" height="24" fill="#1551E5" />
            </g>
          </svg>
        </div>
      </div>
      <HeaderNavMenu />
    </header>
  );
};

export default Header;
