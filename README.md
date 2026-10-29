# vue3-study

* https://www.youtube.com/watch?v=e-E0UB-YDRk&t=3827s
* https://tailwindcss.com/docs/guides/vue-3-vite
* https://tailwindcss.com/docs
* https://vite.dev/guide/env-and-mode.html
* https://github.com/AykutSarac/chatify/blob/main/src/client/src/components/ChatScreen.vue

# UI components

* https://tailwindui.com/ `아마 유료?`
* https://headlessui.dev/
* https://vue-feather-icons.egoist.sh/
* https://tailwindcomponents.com/
* https://next.vuetifyjs.com/en/

# non-solved issue
* when refresh chat page, do auth-middleware. It's from `doing middle is before than creating App`

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

# I don't know yet....

- Why use composition API: ref(), reactive() ? We can do without ref(), reactive() functions. Really need to use them? Which situations do you absolutely need them?? why use? for performance? or for code readability?
```
Great! We can use ref(), reactive() when make composition APIs util functions!
```


## Project setup

Use Node 22.22.2, 24.15 or a newer supported LTS/current release and the committed npm lockfile. Node 24 is used for verification.

```sh
npm ci
npm run serve
```

Vite reads the existing public `VUE_APP_*` variables from `.env.local`. The Firebase app ID is `VUE_APP_APP_ID`. These values are bundled into the client; never put service account keys or other private credentials in them.

```sh
npm test
npm run lint
npm run build
npm audit
```

The production output is `dist/`; `npm run preview` serves it locally. See [security verification](SECURITY_CHECKS.md) for the dependency and content-rendering checks.
