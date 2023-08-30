# Reproduction repository

This repository reproduces the following issue: When updating an entity with a OneToMany relation, if the entity has a
composite key, then the ORM tries to set the relation key attributes as null.

## How to run it

### 1. install the dependencies

```
npm install
```

### 2. ensure you have a postgresql database matching the configuration

### 3. build the application

```
npm run build
```

### 4. run the command

run the following command twice:

```
node dist/main.js reproduce
```

The first run should create a bunch of entities, which should work. Second run will update the data, which will cause the
error `QueryFailedError: null value in column "bookAuthor" of relation "book_to_shelf" violates not-null constraint`
