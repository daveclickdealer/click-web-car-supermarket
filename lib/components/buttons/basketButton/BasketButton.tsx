import CounterNumber from "@components/badges/counterNumber/CounterNumber";

const BasketButton = () => {
  return (
    <>
      <button className="relative text-white hover:text-accent transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="currentColor"
          className="w-6 h-6"
        >
          <defs>
            <clipPath id="icon-shopping-bag__a">
              <path fill="none" d="M0 0h40v40H0z" />
            </clipPath>
          </defs>
          <g clipPath="url(#icon-shopping-bag__a)">
            <path d="M35.26 40H4.61a4.84 4.84 0 0 1-3.31-1.4 4 4 0 0 1-1.24-3.14l1.65-22.33c.2-2.14 2.17-3.79 4.56-3.83h27.34c2.45 0 4.48 1.71 4.64 3.91l1.66 22.33a4.02 4.02 0 0 1-1.33 3.07 4.9 4.9 0 0 1-3.31 1.4ZM6.27 12.09c-.82 0-1.49.57-1.53 1.3L3.06 35.72c-.03.39.13.77.43 1.04.28.29.69.45 1.12.45h30.65c.43 0 .84-.16 1.12-.45.3-.28.46-.65.43-1.04l-1.68-22.33c-.04-.73-.72-1.3-1.53-1.3H6.27Zm0 0" />
            <path d="M28.22 17.67c-.85 0-1.54-.63-1.55-1.4V8.83c0-3.34-3.01-6.05-6.73-6.05s-6.73 2.71-6.73 6.05v7.44c0 .77-.7 1.4-1.55 1.4s-1.55-.62-1.55-1.4V8.83C10.1 3.96 14.5 0 19.94 0s9.84 3.96 9.84 8.84v7.44c-.01.77-.7 1.39-1.55 1.4Zm0 0" />
          </g>
        </svg>
        <CounterNumber />
      </button>
    </>
  );
};

export default BasketButton;
