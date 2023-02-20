interface ClassesConfig {
  [className: string]:
    | {
        [propName: string]: string;
      }
    | string;
}

export default ClassesConfig;
