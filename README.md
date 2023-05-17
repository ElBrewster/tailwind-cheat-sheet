# **Tailwind Cheatsheet**

## What's this?

This Vite app is a mock-up so my friends can quickly style SPAs with Tailwind. I found the docs a bit frustrating to navigate and decided a shortcut would be great. The important bits are this README, the example `src/App.jsx`, and `tailwind.config.ts`. Feel free to beg, borrow, or steal any of it 😊.

And if you know a cool way to stack linear-gradients in Tailwind please @me.

## What's Tailwind?

Tailwind is a CSS framework that uses short-hand for pre-existing CSS stylesheet declarations. These short-hand phrases are called "utility classes", referring to a styling property and its value. They are declared inside the class/className of an html attribute. Many utility classes can be used in one attribute statement like so:

`<footer className="sticky p-2 bottom-0 flex flex-row bg-indigo-950"></footer>`

## Screenshots

<img width="510" alt="Screen Shot 2023-05-17 at 1 21 16 PM" src="https://github.com/ElBrewster/tailwind-cheat-sheet/assets/113723085/1f7ea78f-a03b-40db-945d-1d0910250d6f">

<img width="1649" alt="Screen Shot 2023-05-17 at 1 21 35 PM" src="https://github.com/ElBrewster/tailwind-cheat-sheet/assets/113723085/2b7fbcbb-622b-4985-8e52-1aed57aa3c29">

## Setup

1. [Click here](https://github.com/ElBrewster/tailwind-cheat-sheet) to open the repo. Browse, or:
2. Click the "Fork" button. (This will create a user copy of the repository.)
3. Open the Terminal application.
4. In Terminal, use the "cd" command to navigate to where the local repository will live.
5. In GitHub, click on the green "Code" dropdown. You will see three clone options. Select "SSH" and copy the SSH key.
6. In Terminal, run "git clone [insert copied SSH key here]", and then use the "cd" command to navigate into the newly created directory.
7. Open the local repository in VS Code by typing: `code .`
8. Type `npm run dev` in your Terminal to run the Vite app, and view in browser at [http://localhost:5173/](http://localhost:5173/).

9. To install Tailwind in your own project go [here](https://tailwindcss.com/docs/installation).
   For the Vite install in particular, go [here](https://tailwindcss.com/docs/guides/vite) and follow their instructions:
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

## **Cheatsheet**

I'll start out by highlighting this App wrapper:

`<div className='min-h-screen flex flex-col bg-blue-800'></div>`

and main tag:

`<main className='flex flex-1 flex-col'></main>`

These should give your app a good starting point by setting the content to fit screen height and having the main content fill available space with `flex-1`.
I like to do the classic header, main, footer setup for a quick SPA with semantic HTML.

```
<div>
    <header></header>
    <main></main>
    <footer></footer>
</div>
```

## Tailwind Numbers

_Don't guess what number to use for sizes. Only some work._

- In general, 1 = 4px
- `h-px` is height of 1px
- `h-1` is `height: 4px;`

> [Here's](https://tailwindcss.com/docs/padding#add-padding-to-a-single-side) an example of applying pixels to padding to show what I mean: `p-0` is 0px padding, `p-1` is 4px padding, and after `p-12` some numbers are skipped.

For _font sizes_ you can try `text-xs` or -sm/-base/-lg/-xl/-2xl...-9xl.

Tailwind's `text-base` is `1rem`, which is 16px in vanilla CSS.

## Measurements: Height, Width, Margin, Padding

Generally helpful container values:

- `h-full` to fill container's height
- `h-screen` or `min-h-screen` to fill viewport
- `min-h-min`, `min-h-max`
- `w-screen`
- `w-1` is `width: 4px;`
- `p-2` is `padding: 8px;`
- `m-4` is `margin: 1rem;`

Percentages as fractions:

- `w-1/4` or `w-full` is width: 25% or width: 100%

You can add x/y for left&right, top&bottom like the x/y (vertical/horizontal) axes: `px-1` is `padding-left: 4px;` and `padding-right: 4px;`, or `padding: 0 4px;`

t,r,b,l is top, right, bottom, left, so `pt-1` is `padding-top: 4px;`

## Breakpoints

default breakpoints:

- sm (640px wide),
- md (768px),
- lg (1024px),
- xl (1280px),
- 2xl (1536px)

Adding a value at a breakpoint looks like this: `sm:text-center`

## Colors

- The default colors are [here](https://tailwindcss.com/docs/customizing-colors).
- They are: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose.
- You apply color using the color name and then a number (scaling from light to dark): 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950.

```
`background-color: #4b5563` is written in the `className` as `bg-gray-600`:
`<div className="bg-gray-600 text-gray-100"></div>`
```

I included an example of how to add custom colors in the `tailwind.config.ts` file. Label hex codes with a name and number to reference in your className elements. I used numbers in-between the pre-existing Tailwind designations.

## Flexbox & Grid

I've included a few simple examples in `App.jsx`, however I would suggest using dev tools to get the flex properties you want and use the search field in the tailwind docs to find their special syntax.

If I wanted a grid display:

```
.container{
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
}
```

it would be something like this:
`<div className="grid gap-5 grid-cols-3"></div>`
Or for a flex display:

```
.profile-form{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
```

it might look like this:
`<div className="flex flex-col items-start justify-evenly"></div>`
