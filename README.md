# Vault Hunter Item Viewer

I wanted to learn more about `three.js` and `react-three-fiber` and improve my React and Next.js knowledge so I built this small web app to render Vault Hunter items.

Thanks to [iGoodie](https://github.com/iGoodie) for pointing me in the right direction and the [iskallia/item-model-renderer](https://github.com/Iskallia/item-model-renderer) repository for helping me understand how to translate Blockbench JSON to something `Three.js` can understand.

Models and images owned by Iskallia and their artists. Visit [vaulthunters.gg](https://vaulthunters.gg) and play the modpack! Thank you to the team for building such a fun experience.

## Development

If you're using [DDEV](https://github.com/ddev/ddev), you can run the following commands. Once the dev server is running, go to (vh-gear-viewer.ddev.site)[https://vh-gear-viewer.ddev.site].

```sh
ddev start
ddev npm install

ddev npm run dev
```

Otherwise, you can run the following commands and visit [localhost:3000](http://localhost:3000)

```sh
nvm use
npm install
npm run dev
```
