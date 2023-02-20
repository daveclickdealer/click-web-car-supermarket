import CounterNumber from "@components/badges/counterNumber/CounterNumber";

const FavouritesButton = () => {
  return (
    <>
      <button className="relative text-white hover:text-accent transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M19.86 40a1.4 1.4 0 0 1-1.13-.56l-.41-.48c-3.45-4-7.04-8.02-10.64-11.93l-.66-.71C4.11 23.2.82 19.65.1 14.57-.58 8.64 2.46 2.96 7.44.84 11.78-.8 16.57.38 19.9 3.91 23.3.26 28.23-.94 32.67.81c1.47.64 2.8 1.63 3.9 2.91a13.83 13.83 0 0 1 3.17 11.37c-.87 4.68-4.01 8.14-6.53 10.92l-12.26 13.5c-.29.32-.68.49-1.08.49ZM11.29 3.55c-.95 0-1.9.18-2.79.54-3.59 1.56-5.79 5.65-5.35 9.94.56 3.93 3.33 6.91 6.01 9.79l.66.72c3.4 3.69 6.79 7.48 10.08 11.26l11.15-12.27c2.23-2.45 5-5.5 5.67-9.15.47-3.01-.41-6.09-2.35-8.23a7.95 7.95 0 0 0-2.81-2.1c-3.77-1.47-7.97-.07-10.41 3.48-.29.43-.74.69-1.22.69h-.01a1.5 1.5 0 0 1-1.22-.67 9.2 9.2 0 0 0-7.41-4Zm0 0" />
        </svg>
        <CounterNumber />
      </button>
    </>
  );
};

export default FavouritesButton;
