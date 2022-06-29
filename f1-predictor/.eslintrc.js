module.exports = {
  root: true,
  extends: 'airbnb-typescript/base',
  plugins: ['import', 'prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
