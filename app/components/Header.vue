<template>
  <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <!-- Logo and Navigation -->
        <div class="flex items-center space-x-8">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">K</span>
            </div>
            <span class="text-xl font-bold text-gray-900">KochinGo</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-6">
            <div class="relative group">
              <button 
                @click="toggleExploreMenu"
                class="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                <span>Explore</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': showExploreMenu }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div v-if="showExploreMenu" class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <div class="px-4 py-2 text-sm font-semibold text-gray-900 border-b border-gray-100">Categories</div>
                <NuxtLink v-for="category in categories" :key="category.name" :to="category.link" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150">
                  {{ category.name }}
                </NuxtLink>
              </div>
            </div>
            
            <NuxtLink to="/pricing" class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              Plans & Pricing
            </NuxtLink>
            
            <NuxtLink to="/business" class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              For Business
            </NuxtLink>
            
            <NuxtLink to="/teach" class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              Teach
            </NuxtLink>
          </nav>
        </div>

        <!-- Search Bar -->
        <div class="hidden md:flex flex-1 max-w-lg mx-8">
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search for courses, skills, or topics"
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200"
              @keyup.enter="handleSearch"
            />
          </div>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-4">
          <!-- Shopping Cart -->
          <button class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 21H18a2 2 0 002-2V9a2 2 0 00-2-2H6l-2-5H2" />
            </svg>
            <span v-if="cartCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {{ cartCount }}
            </span>
          </button>

          <!-- Language Selector -->
          <div class="relative">
            <button 
              @click="toggleLanguageMenu"
              class="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>

            <div v-if="showLanguageMenu" class="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
              <button v-for="lang in languages" :key="lang.code" 
                @click="selectLanguage(lang.code)"
                class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                :class="{ 'bg-blue-50 text-blue-600': currentLanguage === lang.code }">
                {{ lang.name }}
              </button>
            </div>
          </div>

          <!-- Auth Buttons -->
          <div class="flex items-center space-x-3">
            <NuxtLink to="/login" 
              class="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200">
              Log in
            </NuxtLink>
            
            <NuxtLink to="/signup" 
              class="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105">
              Sign up
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            <svg v-if="!showMobileMenu" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="lg:hidden border-t border-gray-200 bg-white">
        <div class="px-4 py-4 space-y-4">
          <!-- Mobile Search -->
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search for courses"
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              @keyup.enter="handleSearch"
            />
          </div>

          <!-- Mobile Navigation -->
          <nav class="space-y-2">
            <button 
              @click="toggleMobileExploreMenu"
              class="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              <span>Explore</span>
              <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': showMobileExploreMenu }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div v-if="showMobileExploreMenu" class="pl-4 space-y-2">
              <NuxtLink v-for="category in categories" :key="category.name" :to="category.link" 
                class="block py-1 text-gray-600 hover:text-gray-900">
                {{ category.name }}
              </NuxtLink>
            </div>
            
            <NuxtLink to="/pricing" class="block py-2 text-gray-700 hover:text-gray-900 font-medium">
              Plans & Pricing
            </NuxtLink>
            
            <NuxtLink to="/business" class="block py-2 text-gray-700 hover:text-gray-900 font-medium">
              For Business
            </NuxtLink>
            
            <NuxtLink to="/teach" class="block py-2 text-gray-700 hover:text-gray-900 font-medium">
              Teach
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// Component state
const searchQuery = ref('')
const showExploreMenu = ref(false)
const showLanguageMenu = ref(false)
const showMobileMenu = ref(false)
const showMobileExploreMenu = ref(false)
const cartCount = ref(2)
const currentLanguage = ref('en')

// Data
const categories = [
  { name: 'Web Development', link: '/category/web-development' },
  { name: 'Data Science', link: '/category/data-science' },
  { name: 'Mobile Development', link: '/category/mobile' },
  { name: 'Design', link: '/category/design' },
  { name: 'Business', link: '/category/business' },
  { name: 'Photography', link: '/category/photography' },
  { name: 'Music', link: '/category/music' },
  { name: 'Fitness', link: '/category/fitness' }
]

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'hi', name: 'हिन्दी' }
]

// Methods
const toggleExploreMenu = () => {
  showExploreMenu.value = !showExploreMenu.value
  showLanguageMenu.value = false
}

const toggleLanguageMenu = () => {
  showLanguageMenu.value = !showLanguageMenu.value
  showExploreMenu.value = false
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const toggleMobileExploreMenu = () => {
  showMobileExploreMenu.value = !showMobileExploreMenu.value
}

const selectLanguage = (langCode) => {
  currentLanguage.value = langCode
  showLanguageMenu.value = false
  // Handle language change logic here
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // Handle search logic here
    console.log('Searching for:', searchQuery.value)
    // navigateTo(`/search?q=${encodeURIComponent(searchQuery.value)}`)
  }
}

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    showExploreMenu.value = false
    showLanguageMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>