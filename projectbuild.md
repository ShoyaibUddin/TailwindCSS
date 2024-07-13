## Project Build করার জন্য package.jesen

```
"scripts": {
"start": "vite" (Live server)
"build": "tailwindcss -i ./css/app.css -o ./css/style.css",
"build": "tailwindcss -i ./css/app.css -o ./css/style.min.css --minify",
"watch": "tailwindcss -i ./css/app.css -o ./css/style.min.css --watch",
"build":"vite build" (এটা দিলে উপরের তিনটা লাগবে না dist নামে একটা ফোল্ডার হবে তারপর সেখানে বিল্ড ফাইল গুলো থাকবে)
  },

```
