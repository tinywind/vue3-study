import {afterEach, beforeEach, expect, it, vi} from 'vitest'

vi.mock('firebase/app', () => ({initializeApp: vi.fn(() => ({name: 'fixture'}))}))
vi.mock('firebase/auth', () => ({getAuth: vi.fn(), onAuthStateChanged: vi.fn(),
  signInWithEmailAndPassword: vi.fn(), signOut: vi.fn()}))
vi.mock('firebase/firestore', () => ({addDoc: vi.fn(), collection: vi.fn(), doc: vi.fn(),
  getDocs: vi.fn(), getFirestore: vi.fn(), onSnapshot: vi.fn(), query: vi.fn(),
  serverTimestamp: vi.fn(), setDoc: vi.fn()}))

import {initializeApp} from 'firebase/app'

beforeEach(() => {vi.resetModules(); vi.clearAllMocks()})
afterEach(() => vi.unstubAllEnvs())

it('preserves an existing Firebase app ID configured with the legacy key', async () => {
  vi.stubEnv('VUE_APP_APP_ID', undefined)
  vi.stubEnv('VUE_APP_VUE_APP_ID', 'fixture-legacy-id')
  await import('../src/utillities/firebase')
  expect(initializeApp.mock.calls[0][0].appId).toBe('fixture-legacy-id')
})

it('prefers the documented Firebase app ID key when both are configured', async () => {
  vi.stubEnv('VUE_APP_APP_ID', 'fixture-documented-id')
  vi.stubEnv('VUE_APP_VUE_APP_ID', 'fixture-legacy-id')
  await import('../src/utillities/firebase')
  expect(initializeApp.mock.calls[0][0].appId).toBe('fixture-documented-id')
})
