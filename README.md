## This is a demo project to illustrate what may be a bug in astro.

### Steps to reproduce

1. `pnpm install`
1. Build the create-react-app app `pnpm -F cra build`
1. Build the astro app `pnpm -F astro build`
1. Check the output in `cra/build/blog`. It will be missing the assets. **_Note:_** This is the bug.
1. Comment out the `outDir` line in `astro.config.mjs`
1. Build the astro app `pnpm -F astro build`
1. Check the output in `astro/dist`. It won't be missing the assets folder. **_Note:_** This is the expected behavior.
