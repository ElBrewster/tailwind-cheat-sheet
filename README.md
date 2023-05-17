# **Tailwind Cheatsheet**

### What's this?
This Vite app is a quick mock-up Tailwind example for my friends. I found the docs a bit frustrating to navigate unless I knew the exact CSS verbiage of what I wanted, and I would search for the Tailwind syntax using that. (And if I knew the exact CSS then why switch styling systems? Anyway.) The important bits are this README and then examples are in `App.jsx`. Feel free to beg, borrow, or steal any of it :slight-smile:.

And if you know a cool way to stack linear-gradients in Tailwind please @me.

### Screenshot

### Setup
1. [Click](https://github.com/ElBrewster/Classic-Fit) to open repo. Browse, or: 
2. Click the "Fork" button. (This will create a user copy of the repository.)
3. Open the Terminal application.
4. In Terminal, use the "cd" command to navigate to where the local repository will live.
5. In GitHub, click on the green "Code' dropdown. You will see three clone options. Select "SSH" and copy the SSH key.
6. In Terminal, run "git clone [insert copied SSH key here]", and then use the "cd" command to navigate into the newly created directory.
7. Open the local repository in VS Code by typing: `code .`
8. Type `npm run dev` in your Terminal to run the Vite app.

9. To install Tailwind in your own project go [here](https://tailwindcss.com/docs/installation) and for the Vite install in particular go [here](https://tailwindcss.com/docs/guides/vite) 
    - `npm install -D tailwindcss postcss autoprefixer`
    - `npx tailwindcss init -p `
    - in `tailwind.config.js` add in `content: []` the following:
    ```    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ```
    - in index.css include:
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
## Cheatsheet
`text-base` is `1rem`, which is 16px

Tailwind's "shorthand" CSS phrases
syntax looks like this: <div className="" ></div>
class for JS, className for JSX
h-full to fill container's height

h-screen to fill viewport
min-h-screen 
min-h-min, min-h-max
w-screen
### Measurements
don't use just any number, only some "count": 
h-px 1px
1 = 4px
so h-1 is height: 4px;
w-1 is width: 4px;
p-1 is padding: 4px;

percentages as fractions:
w-1/4 or w-full is width: 25% or width: 100%

then add in x/y for left&right, top&bottom like the x/y axes: 
(for vertical/horizontal)
px-1 is padding-left and padding-right: 4px;
t,r,b,l is top right bottom left, so pt-1 is padding-top: 4px;

default breakpoints are: sm (640px wide), 
md (768px), lg (1024px) xl (1280px), 2xl (1536px)
adding what you want at a breakpoint looks like this: `sm:text-center`

### Colors
The default colors are [here](https://tailwindcss.com/docs/customizing-colors). 
They are slate, gray, zinc, neutral, stone, red, orange, amaber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose.
You apply color using the color name and then a number (scaling from light to dark): 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950.
`background-color: #4b5563` is written in the `className` as `bg-gray-600`

I the way to customize colors in the tailwind.config.ts file where I labeled arbitrary numbers in-between their defaults to hex codes of additional colors I wanted to play around with. 

### Flexbox