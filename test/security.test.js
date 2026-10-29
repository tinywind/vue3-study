import {afterEach, describe, expect, it, vi} from 'vitest'

vi.mock('@/utillities/firebase', () => ({
  createMessageCollection: vi.fn(),
  registerMessageHandler: vi.fn(),
  sendMessage: vi.fn(),
}))
vi.mock('@/router', () => ({default: {push: vi.fn()}}))

import Markdown from '../src/pages/Markdown.vue'
import Chat from '../src/pages/Chat.vue'

function render(html) {
  const element = document.createElement('div')
  element.innerHTML = html
  for (const image of element.querySelectorAll('img')) image.dispatchEvent(new Event('error'))
  return element
}

afterEach(() => {delete window.securityInjected})

describe('untrusted content cannot execute markup', () => {
  it('sanitizes Markdown HTML while preserving normal formatting', () => {
    const text = '**bold** <img src="data:," onerror="window.securityInjected=1"><a href="javascript:alert(1)">bad</a>'
    const element = render(Markdown.computed.getMarked.call({text}))
    expect(window.securityInjected).toBeUndefined()
    expect(element.querySelector('[onerror]')).toBeNull()
    expect(element.querySelector('a[href^="javascript:"]')).toBeNull()
    expect(element.querySelector('strong').textContent).toBe('bold')
  })

  it('treats chat markup as text and preserves ordinary links', () => {
    const text = '<img src="data:," onerror="window.securityInjected=1"> https://example.test/path?a=1&b=2'
    const element = render(Chat.methods.convertToLink(text))
    expect(window.securityInjected).toBeUndefined()
    expect(element.querySelector('img')).toBeNull()
    expect(element.textContent).toBe(text)
    expect(element.querySelector('a').href).toBe('https://example.test/path?a=1&b=2')
    expect(element.querySelector('a').rel).toContain('noreferrer')
  })
})
