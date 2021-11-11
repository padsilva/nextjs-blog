# :memo: Blog

A blog that reads and understand Markdown files, creating pages automatically from the content of those files.

## :rocket: Getting Started

### Aloglia

This project uses [Algolia](https://www.algolia.com/), so you need to create an account there first.

#### 1. Create Application

First, you need to create the application, giving a name, pick a subscription of your choise and configure the products.

#### 2. Create Index

After that, you need to create the index with name "dev_POSTS". Go to Index Configuration sub-menu and set which attributes you want to use for searching, and in what order and manner you will search them.

### NextJS

After creating your account on [Algolia](https://www.algolia.com/) and following the previous steps, you just need to execute the next steps:

- Clone the project:

```bash
  git clone https://github.com/padsilva/nextjs-blog
```

- Go to the project directory:

```bash
  cd nextjs-blog
```

- Install dependencies:

```bash
  npm install
  # or
  yarn
```

- Rename the `.env.example` to `.env.local` (if you plan to run locally) and edit the keys there.

- Run the development server:

```bash
  npm run dev
  # or
  yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## :computer: Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages

## :construction_worker: Author

[@padsilva](https://www.github.com/padsilva)

## :mailbox: Feedback

If you have any feedback, please reach out to me at pauloalexandreduartesilva@gmail.com.
