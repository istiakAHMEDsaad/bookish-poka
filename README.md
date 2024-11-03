# Bookish Poka

_Deploy Link -->_

## [_website_](https://bookish_poka_react_simple_project.surge.sh/)

![Screenshot](./src/assets/ss.png)

## Technology i used:
[Vite + React](https://vite.dev/guide/) <br />
[Vite + Tailwindcss](https://tailwindcss.com/docs/guides/vite) <br />
[Daisyui](https://daisyui.com/docs/install/) <br />
[React Router](https://reactrouter.com/en/main/start/tutorial) <br />
[React props type](https://www.npmjs.com/package/prop-types) <br />
[React icons](https://react-icons.github.io/react-icons/) <br />
[React Toastify](https://www.npmjs.com/package/react-toastify) <br />
[Rechart](https://recharts.org/en-US/guide) <br />




## Deploy Note
**Netlify -->**
1. Create ```_redirects``` file in ```/public``` folder and insert ```/* /index.html 200```

**Surge -->**
1. in bash ```npm run build```
2. ```cd dist```
3. ```cp index.html 200.html```
4. ```surge```

## Tearing down a published website
1. ```npm install --global surge```
2. ```surge teardown {deploy site link}```