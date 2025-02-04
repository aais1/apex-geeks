<script setup lang="ts">
const isScrolled = ref(false);

const handleScroll = () => {
	const offset = window.scrollY;
	if (offset > 200) isScrolled.value = true;
	else isScrolled.value = false;
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
		class="fixed top-0 z-[100] w-screen transition duration-500"
		:class="isScrolled ? 'bg-white' : 'bg-BgPrimary'"
	>
		<div
			class="container grid grid-cols-3 items-center justify-between font-['Poppins'] transition-[height] duration-500"
			:class="isScrolled ? 'h-20' : 'h-24'"
		>
			<NuxtLink to="/">
				<h1 class="text-xl font-semibold text-Primary">ApexGeeks</h1>
			</NuxtLink>
			<ul class="mx-auto flex items-center gap-7">
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
					Blog
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
				class="ml-auto w-52 px-3 py-2 font-medium"
			>
				Get A Proposal
			</GlobalsButton>
		</div>
	</nav>
</template>
