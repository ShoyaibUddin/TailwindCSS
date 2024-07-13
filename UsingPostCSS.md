# Using PostCSS এর মাধ্যমে install

1. Open termainal

```
npm init -y
```

```
npm install -D tailwindcss postcss autoprefixer vite
npx tailwindcss init -p
```

2. main.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. package.json

```
 "scripts": {
    "start": "vite"

  },
```

4. tailwind.config.js

```
module.exports = {
  content: ["*"],

}
```

5. Terminal

```
npm run start
```
