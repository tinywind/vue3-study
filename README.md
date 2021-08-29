# vue3-study

* https://www.youtube.com/watch?v=e-E0UB-YDRk&t=3827s
* https://tailwindcss.com/docs/guides/vue-3-vite
* https://tailwindcss.com/docs
* https://cli.vuejs.org/guide/mode-and-env.html#environment-variables

# UI components

* https://tailwindui.com/
* https://headlessui.dev/
* https://vue-feather-icons.egoist.sh/
* https://tailwindcomponents.com/

# Login Setup

1. create a Firebase project in the Firebase console: `https://console.firebase.google.com/`
2. add Web app to your project: `https://console.firebase.google.com/u/0/project/{project-id}/overview`
3. copy Firebase keys and paste to `.env` (if no exist file, create .env file at project root directory)

```
VUE_APP_API_KEY={yours}
VUE_APP_AUTH_DOMAIN={yours}
VUE_APP_PROJECT_ID={yours}
VUE_APP_STORAGE_BUCKET={yours}
VUE_APP_MESSAGING_SENDER_ID={yours}
VUE_APP_APP_ID={yours}
VUE_APP_MEASUREMENT_ID={yours}
```

4. enable Google Email sign-in: `https://console.firebase.google.com/u/0/project/{project-id}/authentication/providers`


#### ref:

- https://firebase.google.com/docs/firestore/quickstart
- https://firebase.google.com/docs/database/security

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
