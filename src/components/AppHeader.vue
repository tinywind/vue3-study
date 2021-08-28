<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" aria-hidden="true" class="block h-6 w-6" size="1.5x"/>
            <XIcon v-else aria-hidden="true" class="block h-6 w-6" size="1.5x"/>
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/">
              <img alt="logo" class="block lg:hidden h-8 w-auto" src="../assets/logo.png"/>
              <img alt="logo" class="hidden lg:block h-8 w-auto" src="../assets/logo.png"/>
            </router-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :key="item.name" :aria-current="item.current && 'page'"
                           :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
                           :to="item.href">{{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
              class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              type="button">
            <span class="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" class="h-6 w-6" size="1.5x"/>
          </button>

          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                  class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img alt=""
                     class="h-8 w-8 rounded-full"
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" href="#">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" href="#">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" href="#">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navigation" :key="item.name" :aria-current="item.current ? 'page' : undefined"
           :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
           :href="item.href">{{ item.name }}</a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<script>
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {BellIcon, MenuIcon, XIcon} from "@zhuowenli/vue-feather-icons";

export default {
  name: 'AppHeader',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon
  },
  setup() {
    return {
      navigation: [
        {name: 'Calendar', href: '/calendar', current: false},
      ],
    }
  },
}
</script>