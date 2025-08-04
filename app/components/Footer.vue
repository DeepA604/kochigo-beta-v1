<template>
  <footer class="bg-gray-900 text-white">
    <!-- Company Trust Banner -->
    <div class="bg-gray-800 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6">
          <h3 class="text-lg font-semibold text-gray-300 mb-4">
            Trusted by leading companies worldwide
          </h3>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <!-- Company Logos -->
          <div class="flex items-center space-x-2 text-gray-400">
            <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span class="text-white font-bold text-xs">M</span>
            </div>
            <span class="font-semibold">Microsoft</span>
          </div>
          
          <div class="flex items-center space-x-2 text-gray-400">
            <div class="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <span class="text-white font-bold text-xs">S</span>
            </div>
            <span class="font-semibold">Spotify</span>
          </div>
          
          <div class="flex items-center space-x-2 text-gray-400">
            <div class="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span class="text-white font-bold text-xs">N</span>
            </div>
            <span class="font-semibold">Netflix</span>
          </div>
          
          <div class="flex items-center space-x-2 text-gray-400">
            <div class="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span class="text-white font-bold text-xs">A</span>
            </div>
            <span class="font-semibold">Adobe</span>
          </div>
          
          <div class="flex items-center space-x-2 text-gray-400">
            <div class="w-8 h-8 bg-yellow-600 rounded flex items-center justify-center">
              <span class="text-white font-bold text-xs">U</span>
            </div>
            <span class="font-semibold">Uber</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <!-- Learning Paths -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-white">Learning Paths</h4>
            <ul class="space-y-3">
              <li><NuxtLink to="/path/web-development" class="text-gray-300 hover:text-white transition-colors duration-200">Full Stack Development</NuxtLink></li>
              <li><NuxtLink to="/path/data-science" class="text-gray-300 hover:text-white transition-colors duration-200">Data Science Mastery</NuxtLink></li>
              <li><NuxtLink to="/path/mobile" class="text-gray-300 hover:text-white transition-colors duration-200">Mobile App Development</NuxtLink></li>
              <li><NuxtLink to="/path/ui-ux" class="text-gray-300 hover:text-white transition-colors duration-200">UI/UX Design</NuxtLink></li>
              <li><NuxtLink to="/path/devops" class="text-gray-300 hover:text-white transition-colors duration-200">DevOps Engineering</NuxtLink></li>
              <li><NuxtLink to="/path/ai-ml" class="text-gray-300 hover:text-white transition-colors duration-200">AI & Machine Learning</NuxtLink></li>
              <li><NuxtLink to="/paths" class="text-blue-400 hover:text-blue-300 transition-colors duration-200">View All Paths</NuxtLink></li>
            </ul>
          </div>

          <!-- Technologies -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-white">Technologies</h4>
            <ul class="space-y-3">
              <li><NuxtLink to="/tech/javascript" class="text-gray-300 hover:text-white transition-colors duration-200">JavaScript</NuxtLink></li>
              <li><NuxtLink to="/tech/python" class="text-gray-300 hover:text-white transition-colors duration-200">Python</NuxtLink></li>
              <li><NuxtLink to="/tech/react" class="text-gray-300 hover:text-white transition-colors duration-200">React</NuxtLink></li>
              <li><NuxtLink to="/tech/vue" class="text-gray-300 hover:text-white transition-colors duration-200">Vue.js</NuxtLink></li>
              <li><NuxtLink to="/tech/nodejs" class="text-gray-300 hover:text-white transition-colors duration-200">Node.js</NuxtLink></li>
              <li><NuxtLink to="/tech/aws" class="text-gray-300 hover:text-white transition-colors duration-200">AWS Cloud</NuxtLink></li>
              <li><NuxtLink to="/tech/docker" class="text-gray-300 hover:text-white transition-colors duration-200">Docker</NuxtLink></li>
            </ul>
          </div>

          <!-- Certifications -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-white">Certifications</h4>
            <ul class="space-y-3">
              <li><NuxtLink to="/cert/aws" class="text-gray-300 hover:text-white transition-colors duration-200">AWS Certified</NuxtLink></li>
              <li><NuxtLink to="/cert/google-cloud" class="text-gray-300 hover:text-white transition-colors duration-200">Google Cloud Professional</NuxtLink></li>
              <li><NuxtLink to="/cert/azure" class="text-gray-300 hover:text-white transition-colors duration-200">Microsoft Azure</NuxtLink></li>
              <li><NuxtLink to="/cert/pmp" class="text-gray-300 hover:text-white transition-colors duration-200">Project Management</NuxtLink></li>
              <li><NuxtLink to="/cert/scrum" class="text-gray-300 hover:text-white transition-colors duration-200">Scrum Master</NuxtLink></li>
              <li><NuxtLink to="/cert/cybersecurity" class="text-gray-300 hover:text-white transition-colors duration-200">Cybersecurity</NuxtLink></li>
              <li><NuxtLink to="/certifications" class="text-blue-400 hover:text-blue-300 transition-colors duration-200">All Certifications</NuxtLink></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul class="space-y-3">
              <li><NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors duration-200">About Us</NuxtLink></li>
              <li><NuxtLink to="/careers" class="text-gray-300 hover:text-white transition-colors duration-200">Careers</NuxtLink></li>
              <li><NuxtLink to="/press" class="text-gray-300 hover:text-white transition-colors duration-200">Press</NuxtLink></li>
              <li><NuxtLink to="/blog" class="text-gray-300 hover:text-white transition-colors duration-200">Blog</NuxtLink></li>
              <li><NuxtLink to="/investors" class="text-gray-300 hover:text-white transition-colors duration-200">Investors</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors duration-200">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- Support & Resources -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-white">Support & Resources</h4>
            <ul class="space-y-3">
              <li><NuxtLink to="/help" class="text-gray-300 hover:text-white transition-colors duration-200">Help Center</NuxtLink></li>
              <li><NuxtLink to="/community" class="text-gray-300 hover:text-white transition-colors duration-200">Community</NuxtLink></li>
              <li><NuxtLink to="/mobile-app" class="text-gray-300 hover:text-white transition-colors duration-200">Mobile App</NuxtLink></li>
              <li><NuxtLink to="/teach" class="text-gray-300 hover:text-white transition-colors duration-200">Teach on Platform</NuxtLink></li>
              <li><NuxtLink to="/business" class="text-gray-300 hover:text-white transition-colors duration-200">LearnHub Business</NuxtLink></li>
              <li><NuxtLink to="/affiliate" class="text-gray-300 hover:text-white transition-colors duration-200">Affiliate Program</NuxtLink></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="mt-12 pt-8 border-t border-gray-700">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div class="lg:w-1/2">
              <h4 class="text-xl font-semibold mb-2">Stay Updated</h4>
              <p class="text-gray-300">Get the latest courses, tips, and industry insights delivered to your inbox.</p>
            </div>
            <div class="lg:w-1/2">
              <form @submit.prevent="handleNewsletterSignup" class="flex gap-3">
                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  class="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 disabled:opacity-50"
                  :disabled="isSubmitting"
                >
                  <span v-if="!isSubmitting">Subscribe</span>
                  <span v-else>...</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Social Media & App Downloads -->
        <div class="mt-8 pt-8 border-t border-gray-700">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            <!-- Social Media -->
            <div>
              <h5 class="text-sm font-semibold mb-3 text-gray-300">Follow Us</h5>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.745.099.12.112.225.083.346-.09.375-.293 1.199-.332 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.766-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- App Download -->
            <div>
              <h5 class="text-sm font-semibold mb-3 text-gray-300">Download Our App</h5>
              <div class="flex space-x-3">
                <a href="#" class="inline-flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div class="text-left">
                    <div class="text-xs text-gray-400">Download on the</div>
                    <div class="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                
                <a href="#" class="inline-flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div class="text-left">
                    <div class="text-xs text-gray-400">Get it on</div>
                    <div class="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-gray-950 py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          <!-- Logo and Copyright -->
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">L</span>
              </div>
              <span class="text-xl font-bold text-white">LearnHub</span>
            </NuxtLink>
            <span class="text-gray-400 text-sm">© 2025 LearnHub, Inc.</span>
          </div>

          <!-- Legal Links -->
          <div class="flex flex-wrap items-center gap-6 text-sm">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/cookies" class="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </NuxtLink>
            <NuxtLink to="/accessibility" class="text-gray-400 hover:text-white transition-colors duration-200">
              Accessibility
            </NuxtLink>
            <NuxtLink to="/sitemap" class="text-gray-400 hover:text-white transition-colors duration-200">
              Sitemap
            </NuxtLink>
            
            <!-- Language/Region Selector -->
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <button class="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                English (US)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Component state
const email = ref('')
const isSubmitting = ref(false)

// Methods
const handleNewsletterSignup = async () => {
  if (!email.value.trim()) return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Handle newsletter signup logic here
    console.log('Newsletter signup for:', email.value)
    
    // Show success message or redirect
    email.value = ''
    
  } catch (error) {
    console.error('Newsletter signup error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>