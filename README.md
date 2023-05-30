# ATM API Project

ATM API project, utilizing [NestJS v9](https://github.com/nestjs/nest).

The matching frontend for this project can be found here: [https://github.com/Kikorono/atm-ui](https://github.com/Kikorono/atm-ui)

## Prerequisites

* NodeJS v16+
* Postgres

### Database setup

Create a database named `atm_db` within Postgres.

### Environment file setup

1. Create a new file at the project root named `.env` and copy the contents of the `.env.example` file into it.
2. Fill in the appropriate database credentials for your Postgres instance - `DB_HOST`, `DB_PORT`, `DB_USERNAME`, and `DB_PASSWORD`. Leave `DB_NAME` as `atm_db`.
3. Retrieve the Auth0 client secret and add it to `AUTH0_CLIENT_SECRET` or replace Auth0 variable values as desired.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
