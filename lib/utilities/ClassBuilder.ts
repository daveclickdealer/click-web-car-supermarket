import { ClassesConfig } from "@interfaces";

class ClassesBuilder {
  config: ClassesConfig;

  [propName: string]: any;

  constructor(config: ClassesConfig) {
    this.config = config;
    Object.keys(config).forEach((key: string) => {
      Object.defineProperty(this, key, {
        get: () => ClassesBuilder.parse(this.config[key]),
      });
    });
  }

  static parse = (classConfig: { [propName: string]: string } | string) => {
    if (typeof classConfig === "string" || classConfig instanceof String)
      return classConfig;

    return Object.keys(classConfig)
      .map((key: string) => {
        ClassesBuilder.checkPrefix(classConfig, key);
        return classConfig[key];
      })
      .join(" ");
  };

  static checkPrefix = (
    classConfig: { [propName: string]: string },
    key: string
  ) => {
    classConfig[key].split(" ").forEach((className: string) => {
      if (key === "default") {
        ["2xs:", "xs:", "sm:", "md:", "lg:", "xl:", "2xl:"].forEach(
          (breakpoint: string) => {
            if (className.startsWith(breakpoint)) {
              console.warn(
                `CSS Class '${className}' has the 'default' key instead of the preferred '${breakpoint}' key.`
              );
            }
          }
        );
      }
      if (key !== "default" && !className.startsWith(`${key}:`)) {
        console.warn(
          `CSS Class '${className}' is not prefixed with ${key} as expected.`
        );
      }
    });
  };
}

export default ClassesBuilder;
