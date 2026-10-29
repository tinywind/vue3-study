# Security verification

## Dependencies and build

The original Vue CLI 4 dependency tree failed a strict install because COCO-SSD required TensorFlow 4 while the app selected TensorFlow 3. A diagnostic legacy-peer install reported 120 npm advisories and its webpack build could not parse current transitive dependencies. Vite replaces that unsupported build chain, and all four TensorFlow packages use the same 4.22 release. The committed lockfile installs without legacy-peer flags.

Firebase 13 still allows an older vulnerable grpc-js release. The scoped npm override selects patched `@grpc/grpc-js` 1.14.6. The frozen candidate passes installation, lint, production build and npm audit, including development dependencies, with zero reported advisories. This is a snapshot of the checked dependency tree rather than a guarantee about future releases.

## Content rendering and compatibility

Markdown output is sanitized with DOMPurify. Chat messages create text nodes and explicit links before the same sanitizer, so markup stays visible as text and URL query parameters remain unchanged. The original implementations failed both malicious-markup regression tests.

`npm test` runs five checks against the actual Vue component methods/computed value, router guard, Vuex state and installed TensorFlow CPU backend. It verifies removed event-handler and JavaScript URL payloads, preserved formatting and links, unauthenticated redirects/login modal, authenticated access followed by logout, and a real tensor operation. Firebase boundaries are intercepted; no provider operation, message write, camera access or model download occurs.

Real Firebase sign-in, Firestore permissions and camera/model inference require the owner's configured environment and are outside these local checks. No private provider credentials are included in the tests or client environment.
