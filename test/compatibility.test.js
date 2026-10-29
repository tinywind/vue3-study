import {afterEach, describe, expect, it, vi} from 'vitest'
import * as tf from '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-cpu'

vi.mock('@/utillities/firebase', () => ({
  createMessageCollection: vi.fn(), registerMessageHandler: vi.fn(),
  sendMessage: vi.fn(), login: vi.fn(), logout: vi.fn(),
}))

import router from '../src/router'
import store from '../src/store/index'

afterEach(async () => {
  store.commit('user/logout')
  store.commit('login/hide')
  await router.push('/')
})

describe('router and dependency compatibility', () => {
  it('redirects an unauthenticated chat request and opens the login modal', async () => {
    await router.push('/chat')
    expect(router.currentRoute.value.path).toBe('/')
    expect(store.state.login.showing).toBe(true)
  })

  it('allows the authenticated chat route and rejects it after logout', async () => {
    store.commit('user/login', {uid: 'fixture-user'})
    await router.push('/chat')
    expect(router.currentRoute.value.path).toBe('/chat')
    expect(store.state.login.showing).toBe(false)
    store.commit('user/logout')
    await router.push('/markdown')
    await router.push('/chat')
    expect(router.currentRoute.value.path).toBe('/')
    expect(store.state.login.showing).toBe(true)
  })

  it('executes a tensor operation with the installed CPU backend and core', async () => {
    expect(await tf.setBackend('cpu')).toBe(true)
    await tf.ready()
    const result = tf.tidy(() => tf.add(tf.tensor([1, 2]), tf.tensor([3, 4])))
    try { expect(Array.from(await result.data())).toEqual([4, 6]) }
    finally { result.dispose() }
  })
})
