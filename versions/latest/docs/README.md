# Quick Installation

## Vue

```bash
$ cd ./versions/latest/vue/
```

### Vue Install

```bash
$ npm install
```

or

```bash
$ yarn install
```

or

```bash
$ pnpm install
```

### Vue Development

```bash
$ npm dev
```

or

```bash
$ yarn dev
```

or

```bash
$ pnpm dev
```

### Vue Build

```bash
$ npm build
```

or

```bash
$ yarn build
```

or

```bash
$ pnpm build
```

### To use

Customize the .env file and get build.

```bash
VITE_CORPYRIGHT_FROM_TITLE="demo.com"
VITE_CORPYRIGHT_FROM_URL="https://demo.com"

VITE_POWEREDBY_TITLE="example.com"
VITE_POWEREDBY_URL="https://example.com"

VITE_HOST_NAMESERVER_1="ns1.example.com"
VITE_HOST_NAMESERVER_2="ns2.example.com"
```

After building, publish the files in the dist folder from your server.

```bash
$ cd ./dist/
```

Redirect the page you want to show to yourdomain.com/?sp=

Ex 1:

> [!TIP]
> yourdomain.com/?sp=404

Ex 2:

> [!TIP]
> yourdomain.com/?sp=maintenance-mode

> [!NOTE]
> Default page : host default
> You can edit description messages from translation files

# Status Pages List

- 400
- 401
- 403
- 404
- 410
- 500

# Other Modes List

- building
- closed
- coming soon
- host default
- host nameserver
- maintenance mode
- planned
- soon
- source exceed
- source redirected
