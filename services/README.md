# Task List Mono Repo

## Folders

  - `apps`: Applications that customers will interact with (ie. Website, Mobile App, Downloadable Application)
  - `services`: Supporting Servers and Job Runners
  - `packages`: NPM Packages that our apps and services use internally

## React Web Application @`apps/web-app`

This is the application available through the browser. It accesses the `crud-server` service.

## Task List CRUD Server @`services/crud-server

This service provides a REST API to create tasks, list tasks, update and delete tasks.

# authentication-server
Express Authentication Server

## Creating Your Access Token

Generate a random access token:

```
$~> node
Welcome to Node.js v12.14.1.
Type ".help" for more information.
> require('crypto').randomBytes(64).toString('hex');
'51b6ee4e1e0950ffec7bee750130f3664ccb6a1b9b1759bf4efa7739a0bd946a0948c6f63132e537e7ba268b048594922df0c40ae184eeffbd39439db1c0cc05'
```

Create a `.env` file in the root of your application.

Set the `ACCESS_TOKEN_SECRET` value to the output above.

```
ACCESS_TOKEN_SECRET=51b6ee4e1e0950ffec7bee750130f3664ccb6a1b9b1759bf4efa7739a0bd946a0948c6f63132e537e7ba268b048594922df0c40ae184eeffbd39439db1c0cc05
```