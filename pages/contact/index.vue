<template>
	<GlobalsNavbar />
	<section className="bg-BgPrimary py-2 md:py-12">
		<div class="mx-auto flex w-[90vw] flex-row pt-[150px] md:w-[80vw]">
			<div>
				<p class="text-[1rem] font-[500] text-[#0E75E3]">Contact Us</p>
				<h1
					className="text-[2rem] font-bold max-w-[500px] text-[#0E1435] md:text-[2.8rem]"
				>
					Let's Connect You With The Right Person
				</h1>
				<p className="text-[1rem] text-[#474B64] md:w-[50%]">
					Select one of the contact options below to connect with us. We’re
					ready to help with any questions or requests you may have.
				</p>
			</div>
			<div></div>
		</div>
	</section>

	<section class="bg-BgPrimary px-4 py-16">
		<div
			class="grid grid-cols-1 gap-3 md:mx-auto md:w-[80vw] md:grid-cols-2 md:gap-6 lg:grid-cols-4"
		>
			<div
				v-for="(card, index) in cards"
				:key="index"
				class="md:items-between w-[100%] transform cursor-pointer justify-between rounded-xl border-2 border-[#474B641C] bg-white p-5 shadow-md transition-transform hover:-translate-y-[2px] hover:bg-BgPrimary md:flex md:h-[220px] md:w-full md:flex-col"
			>
				<div class="mb-4 flex justify-start">
					<div
						class="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100"
					>
						<component
							:is="card.icon"
							class="h-6 w-6 text-blue-500"
						/>
					</div>
				</div>
				<h3 class="text-lg font-semibold text-gray-900">
					{{ card.title }}
					<span
						class="inline-block translate-x-1 transform transition-transform"
						>→</span
					>
				</h3>
			</div>
		</div>
	</section>

	<section class="bg-BgPrimary px-4 py-12">
		<div class="mx-auto w-[80vw]">
			<h3 class="text-center text-[1.2rem] font-semibold text-blue-600">
				FAQs
			</h3>
			<h2
				class="mx-auto my-4 mb-4 text-center text-[2.5rem] font-bold text-[#0E1435] md:max-w-[500px] md:text-[3.8rem]"
			>
				Your Questions, Answered
			</h2>

			<div class="mt-3 space-y-4 md:mt-6">
				<div
					v-for="(faq, index) in faqs"
					:key="index"
					class="overflow-hidden rounded-lg border bg-white"
				>
					<button
						@click="toggleFaq(index)"
						class="text-md flex w-full items-center justify-between p-3 font-medium transition duration-300 md:p-4 md:text-lg"
					>
						<span :class="{ 'text-blue-600': activeIndex === index }">
							{{ faq.question }}
						</span>
						<span class="text-gray-600">
							<svg
								:class="{ 'rotate-180 text-blue-600': activeIndex === index }"
								class="h-5 w-5 transform transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									v-if="activeIndex !== index"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								></path>
								<path
									v-else
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 15l7-7 7 7"
								></path>
							</svg>
						</span>
					</button>

					<transition name="fade">
						<div
							v-if="activeIndex === index"
							class="bg-gray-50 p-4 text-gray-700 transition-all duration-300"
						>
							{{ faq.answer }}
						</div>
					</transition>
				</div>
			</div>
		</div>
	</section>

	<section
		class="bg-BgPrimary py-12 md:flex"
		v-motion-fade-visible-once
	>
		<div
			class="container mx-auto rounded-3xl bg-white px-4 py-8 text-center md:w-[80vw] md:px-10 md:py-14"
		>
			<!-- Heading -->
			<h2
				class="mb-4 text-3xl font-bold text-Primary text-gray-900 md:text-4xl"
			>
				We Treat Our Clients Like Partners
			</h2>
			<!-- Subheading -->
			<p class="mb-8 text-lg text-gray-600">
				Let’s find out if we’re the right fit for each other.
			</p>
			<!-- Button -->
			<NuxtLink to="/proposal">
				<GlobalsButton
					intent="primary"
					animation
					class="ml-auto w-52 px-3 py-2 font-medium"
				>
					Get A Proposal
				</GlobalsButton>
			</NuxtLink>

			<!-- Footer Links -->
			<div class="mt-8 text-center text-sm text-gray-500 md:mt-16">
				<div class="h-[1px] bg-[#474B641C]"></div>
				<div class="mt-4 flex justify-center space-x-4">
					<!-- Social Media Links -->
					<a
						href="https://www.google.com"
						class="text-xl text-gray-500 transition-all hover:text-gray-700"
						target="_blank"
					>
						<i class="fab fa-google"></i>
					</a>
					<a
						href="https://www.linkedin.com"
						class="text-xl text-gray-500 transition-all hover:text-gray-700"
						target="_blank"
					>
						<i class="fab fa-linkedin"></i>
					</a>
				</div>
			</div>

			<!-- Service Categories -->
			<div
				class="mt-4 flex flex-wrap justify-between gap-8 px-2 text-left md:mt-12"
			>
				<div class="min-w-[200px] flex-1 space-y-2">
					<h3
						class="text-center text-xl font-semibold text-Primary md:text-left md:text-2xl"
					>
						ApexGeeks
					</h3>
					<p class="text-md text-center font-normal text-gray-700 md:text-left">
						Based in Faisalabad, Pakistan
					</p>
					<p class="text-md text-center font-normal text-gray-700 md:text-left">
						Serving Clients Across the Globe
					</p>
				</div>
				<div class="min-w-[200px] flex-1 text-gray-700">
					<h4 class="font-semibold text-Secondary">Creative</h4>
					<ul class="mt-2 space-y-2">
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">Custom Website Design</a>
						</li>
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">Logo Design & Branding</a>
						</li>
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">Content Writing Assistance</a>
						</li>
					</ul>
				</div>
				<div class="min-w-[200px] flex-1 text-gray-700">
					<h4 class="font-semibold text-Secondary">Technical</h4>
					<ul class="mt-2 space-y-2">
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">WordPress Development</a>
						</li>
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">Search Engine Optimization</a>
						</li>
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">Web Hosting & Maintenance</a>
						</li>
					</ul>
				</div>
				<div class="min-w-[200px] flex-1 text-gray-700">
					<h4 class="font-semibold text-Secondary">Company</h4>
					<ul class="mt-2 space-y-2">
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">About Us</a>
						</li>
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">Our Work</a>
						</li>
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">Careers</a>
						</li>
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">Blog</a>
						</li>
						<li
							class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
						>
							<span class="arrow text-2xl text-blue-500">&#8594;</span>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const toggleFaq = (index) => {
	activeIndex.value = activeIndex.value === index ? null : index;
};

import { h } from 'vue';

// Define card data with dynamic SVG icons
const cards = [
	{
		title: 'Request a proposal for your project',
		icon: h(
			'svg',
			{
				xmlns: 'http://www.w3.org/2000/svg',
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				strokeWidth: '2',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				class: 'w-6 h-6'
			},
			[h('path', { d: 'M8 7v10M12 7v10M16 7v10' })]
		)
	},
	{
		title: 'Apply for a job and join our team',
		icon: h(
			'svg',
			{
				xmlns: 'http://www.w3.org/2000/svg',
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				strokeWidth: '2',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				class: 'w-6 h-6'
			},
			[
				h('path', {
					d: 'M12 2v4M15 6h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3M16 16h-8'
				})
			]
		)
	},
	{
		title: 'Pitch your product or service to us',
		icon: h(
			'svg',
			{
				xmlns: 'http://www.w3.org/2000/svg',
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				strokeWidth: '2',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				class: 'w-6 h-6'
			},
			[
				h('circle', { cx: '12', cy: '12', r: '10' }),
				h('path', { d: 'M12 16h.01M8 12h8M8 8h8' })
			]
		)
	},
	{
		title: "I'm an existing or past client",
		icon: h(
			'svg',
			{
				xmlns: 'http://www.w3.org/2000/svg',
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				strokeWidth: '2',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				class: 'w-6 h-6'
			},
			[
				h('circle', { cx: '12', cy: '12', r: '10' }),
				h('path', { d: 'M16 14c0 1.33-2.67 2-4 2s-4-.67-4-2' })
			]
		)
	}
];

const faqs = ref([
	{
		question: 'What are the next steps to get things started?',
		answer:
			'Shortly after you submit the form, we will schedule a discovery call to discuss your project in detail. After that, we will provide a comprehensive proposal tailored to your needs.'
	},
	{
		question: 'What will your proposal include exactly?',
		answer:
			'Our proposal includes project scope, deliverables, timeline, and cost breakdown with all necessary details.'
	},
	{
		question:
			'How long will it take to receive a proposal? And when can you start?',
		answer:
			'We typically send proposals within 2-3 business days. Once approved, we can start immediately based on availability.'
	},
	{
		question:
			'Can we speak to your clients over the phone to learn about their experience?',
		answer:
			'Yes, we can arrange calls with past clients upon request, ensuring confidentiality and proper scheduling.'
	}
]);
</script>

<style scoped>
body {
	overflow: hidden;
}

.hover\:scale-105:hover {
	transition: transform 0.3s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
	transition:
		opacity 0.3s ease-out,
		transform 0.3s ease-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(-5px);
}
</style>
