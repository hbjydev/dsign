![Continuous Deployment (dev)](https://github.com/itshaydendev/dsign/workflows/Continuous%20Deployment%20(dev)/badge.svg)
![NPM](https://img.shields.io/npm/v/@itshaydendev/dsign?label=%40itshaydendev%2Fdsign&logo=npm)

# Dsign

Dsign is a component library built by [Hayden Young](https://github.com/itshaydendev) to be modern, easy-to-use and highly extensible.

Its main use case is for the [Playroles](https://playroles.app) suite of apps, but it's easily adaptable to any project through its Context-powered theming system.

## Getting Started

To begin, install the library and `styled-jsx`. This is an external dependency, so as to keep the bundle size of the library small.

```bash
# With Yarn (recommended)
$ yarn add @itshaydendev/dsign styled-jsx

# With NPM
$ npm install @itshaydendev/dsign styled-jsx
```

Then, all you need to do is import and use the `Dsign` component as a 'shell' around your app.

```jsx
import Dsign from '@itshaydendev/dsign'

export default ({ children }) => (
  <Dsign>
    { children }
  </Dsign>
)
```

Now you're all set, our CSS should be automatically injected into your app!

## Development

The dev environment setup is quite simple!

```bash
# rollup -c -w
$ yarn start

# in another terminal...
# start-storybook
$ yarn storybook
```

This will open the Storybook dev environment and you can start working!

## Contributing

As Dsign is open-source, it's be great to see you contribute to its development!

See a component you think you could improve? Want to add a new one? Want to help keep our bundle size small? [Make a fork of the Github repo](https://github.com/itshaydendev/dsign/fork) and submit a PR!

Spotted an issue or want to ask a question? [Submit an issue to the Github repo](https://github.com/itshaydendev/dsign/issues/new)