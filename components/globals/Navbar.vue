<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
	const offset = window.scrollY;
	isScrolled.value = offset > 200;
};

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
	<nav
		class="fixed top-0 z-[100] w-full transition duration-500"
		:class="isScrolled ? 'bg-white shadow-md' : 'bg-BgPrimary'"
	>
		<div
			class="container mx-auto grid grid-cols-2 place-content-center items-center justify-between px-5 py-4 transition-[height] duration-500 md:grid-cols-3 md:py-6"
			:class="isScrolled ? 'h-20' : ''"
		>
			<NuxtLink to="/">
				<h1 class="text-xl font-semibold text-Primary">ApexGeeks</h1>
			</NuxtLink>

			<!-- Hamburger Menu Icon for Mobile -->
			<div class="ml-auto md:hidden">
				<button
					@click="toggleMenu"
					class="rounded-[50px] bg-[#0E75E3] p-2 text-Primary text-white focus:outline-none"
				>
					<svg
						class="h-7 w-10 font-bold"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</div>

			<!-- Desktop Navigation -->
			<ul class="hidden items-center justify-center gap-7 md:flex">
				<li
					class="cursor-pointer text-lg text-Primary transition-all hover:text-Secondary"
				>
					Work
				</li>
				<li
					class="cursor-pointer text-lg text-Primary transition-all hover:text-Secondary"
				>
					About
				</li>
				<li
					class="cursor-pointer text-lg text-Primary transition-all hover:text-Secondary"
				>
					Contact
				</li>
			</ul>

			<GlobalsButton
				intent="primary"
				animation
				class="ml-auto hidden w-52 px-3 py-2 font-medium md:block"
			>
				Get A Proposal →
			</GlobalsButton>
		</div>

		<!-- Mobile Navigation -->
		<div
			v-if="isMenuOpen"
			class="absolute left-0 right-0 top-full w-full bg-white shadow-lg md:hidden"
		>
			<ul class="flex flex-col items-start">
				<li
					class="cursor-pointer px-[30px] py-[15px] text-lg text-Primary transition-all hover:text-Secondary"
				>
					Work
				</li>
				<li
					class="cursor-pointer px-[30px] py-[15px] text-lg text-Primary transition-all hover:text-Secondary"
				>
					About
				</li>
				<li
					class="cursor-pointer px-[30px] py-[15px] text-lg text-Primary transition-all hover:text-Secondary"
				>
					Contact
				</li>
				<GlobalsButton
					intent="primary"
					animation
					class="mt-4 w-full rounded-none bg-blue-500 px-[30px] py-[15px] text-left font-medium text-white"
				>
					Get A Proposal →
				</GlobalsButton>
			</ul>
		</div>
	</nav>
</template>

<style scoped>
/* No extra styles needed, using Tailwind utilities */
</style>
