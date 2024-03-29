// setting.js  또는 config.js  >> 설정파일
export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Document",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"], // files containing annotations as above
  // api가 무슨 파일 안에 있는지.
};
