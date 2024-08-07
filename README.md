# Cupcake UI

A design system for a fintech startup that is changing the world.

![Banner](https://my-cupcake-ui-001.netlify.app/banners/01-cupcake-ui-banner.png)

## Screenshots

- Storybook home page

![Storybook home page](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/01-storybook-home-page.png)

- Atomic design: stories

![Atomic design: stories](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/02-atomic-design-stories.png)

- Combobox storybook: default

![Combobox storybook: default](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/03-combobox-storybook-default.png)

- Combobox storybook: open

![Combobox storybook: open](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/04-page-storybook-open.png)

- Combobox storybook: select

![Combobox storybook: select](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/05-page-storybook-select.png)

- Combobox storybook: search

![Combobox storybook: search](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/06-page-storybook-search.png)

## Tech Stack

**Client:** Typescript, React, React hooks, React Router, TailwindCSS, Storybook

**Server:** Vite.js

## Storybook

- [Storybook: Github Page](https://alxmcr.github.io/cupcake-ui-ale)
- [Cupcake UI - Storybook at Chromatic\*](https://66b1bf8878373c966dd1bcab-hrhfrvfedy.chromatic.com/)

(\*) Chromatic: you need to create an account at [chromatic.com](https://www.chromatic.com/)

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` or `.env.local` file: `VITE_APP_PORT`

**For example:**

`VITE_APP_PORT=7012`

## Run Locally

Clone the project

```bash
  git clone https://github.com/alxmcr/cupcake-ui
```

Go to the project directory

```bash
  cd cupcake-ui
```

Install dependencies

```bash
  npm install
```

Start the storybook server

```bash
  npm run storybook

  # http://localhost:6006/
```

Start the development server

```bash
  npm run dev

  # http://localhost:<your_port>/
```

`<your_port>`: on enviroment variables (`.env`, `.env.local`).

## Discoveries

(\*) Some comments left on Figma design.

- Multiple color palette.
- Different spacing: line-height and letter-spacing.
- Research about more box-shadow best practices with Tailwind.
- Reduce scope about scrollbar and styles definition.
- Atomic design and naming conventions, we need some research about missing information

## Next releases

- Add more unit testing with React Testing Library.
- Improve components considering a11y.
- Enable on components i18n.
- Tailwind customization.
- Dark/Light mode.
- Research, implement multibranding for multiple companies and customers.
- Add more use cases about components built.
- After more uses cases, work on integration testing.
- Research about a customization developers documentation (on top Storybook)
- Publish NPM package and GitHub Package.

## Authors

- [Alejandro M. Coca Rojas (@alxmcr)](https://www.github.com/alxmcr)

## Feedback

If you have any feedback, please reach out to us at amcocarojas@gmail.com.
