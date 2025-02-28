<template>
	<GlobalsNavbar />
	<div class="mt-10 overflow-hidden bg-BgPrimary">
		<section
			class="mx-auto flex min-h-screen w-[90vw] flex-col items-center bg-BgPrimary py-16 text-center md:w-[80vw] md:flex-row"
			v-motion-fade-visible-once
		>
			<div
				class="max-w-xl space-y-4 text-left md:max-w-2xl md:space-y-10 md:px-10"
			>
				<h3
					class="text-[1.00rem] font-medium leading-[1.7rem] tracking-[0.02rem] text-[#0E75E3]"
				>
					Custom Web Design Services
				</h3>
				<h2
					class="w-[85%] text-[2rem] font-bold leading-[3.7rem] tracking-[-0.06rem] text-Primary md:w-full md:text-[3rem]"
				>
					Grow Your Business with a Top-Tier Custom Website Design Agency
				</h2>
				<p class="mb-6 text-[1rem] text-[#474B64]">
					Our custom websites are crafted to drive bottom-line results for our
					clients. Let’s take your business to the next level.
				</p>
				<NuxtLink
					to="/contact"
					class="mb-4 inline-block rounded-3xl bg-[#0E75E3] px-6 py-3 text-white shadow-lg"
				>
					Get a Proposal →
				</NuxtLink>
				<!-- <div class="flex items-center justify-center space-x-2 text-Primary">
				<span class="font-semibold">RATED 4.9/5</span>
				<span class="text-red-500">★★★★★</span>
				<span class="text-Secondary">79 REVIEWS</span>
			</div> -->
			</div>
			<div class="mt-10 w-full md:-mr-[12vw]">
				<img
					src="https://azurodigital.com/wp-content/uploads/about-featured-3-1536x1050.jpg"
					alt="Modern Workstation"
					class="mx-auto w-full max-w-5xl rounded-3xl shadow-lg md:rounded-bl-3xl md:rounded-tl-3xl"
				/>
			</div>
		</section>

		<section
			class="bg-BgPrimary py-16"
			v-motion-fade-visible-once
		>
			<div class="container">
				<div
					class="mt-16 grid gap-[3px] overflow-hidden rounded-[2rem] border-[3px] border-gray-100 bg-gray-100 sm:grid-cols-2 lg:grid-cols-3"
				>
					<!-- Custom Website Design -->
					<div
						class="group flex flex-col bg-white px-10 py-10 transition hover:bg-BgPrimary"
					>
						<div
							class="grid size-16 place-content-center rounded-full bg-BgPrimary transition group-hover:bg-white"
						>
							<LogosComputerPaint class="size-8 text-Secondary" />
						</div>
						<NuxtLink>
							<h1
								class="my-5 cursor-pointer text-2xl font-semibold text-Primary transition hover:text-Secondary"
							>
								Industry Research
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							We analyze your target market and competitors to ensure that your
							website stands out from the crowd with the perfect design, user
							experience and content.
						</p>
					</div>

					<!-- WordPress Development -->
					<div
						class="group flex flex-col bg-white px-10 py-10 transition hover:bg-BgPrimary"
					>
						<div
							class="grid size-16 place-content-center rounded-full bg-BgPrimary transition group-hover:bg-white"
						>
							<LogosComputerPaint class="size-8 text-Secondary" />
						</div>
						<NuxtLink>
							<h1
								class="my-5 cursor-pointer text-2xl font-semibold text-Primary transition hover:text-Secondary"
							>
								Multiple Design Concepts
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							We develop websites at the highest standard of security,
							responsiveness, accessibility, reliability, loading speed and
							ease-of-use.
						</p>
					</div>

					<!-- Search Engine Optimization -->
					<div
						class="group flex flex-col bg-white px-10 py-10 transition hover:bg-BgPrimary"
					>
						<div
							class="grid size-16 place-content-center rounded-full bg-BgPrimary transition group-hover:bg-white"
						>
							<LogosComputerPaint class="size-8 text-Secondary" />
						</div>
						<NuxtLink>
							<h1
								class="my-5 cursor-pointer text-2xl font-semibold text-Primary transition hover:text-Secondary"
							>
								Unlimited Revisions
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							Web design is a highly collaborative process. Our team is flexible
							and we act as a true partner. We provide unlimited revisions with
							no unexpected fees.
						</p>
					</div>

					<!-- Web Hosting & Maintenance (Replaced Logo Design & Branding) -->
					<div
						class="group flex flex-col bg-white px-10 py-10 transition hover:bg-BgPrimary"
					>
						<div
							class="grid size-16 place-content-center rounded-full bg-BgPrimary transition group-hover:bg-white"
						>
							<LogosComputerPaint class="size-8 text-Secondary" />
						</div>
						<NuxtLink>
							<h1
								class="my-5 cursor-pointer text-2xl font-semibold text-Primary transition hover:text-Secondary"
							>
								Perfectly Responsive
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							Your website will look flawless on all devices, screen sizes and
							browsers. Our meticulous designers are obsessed with every last
							detail of your website.
						</p>
					</div>

					<!-- Content Writing Assistance -->
					<div
						class="group flex flex-col bg-white px-10 py-10 transition hover:bg-BgPrimary"
					>
						<div
							class="grid size-16 place-content-center rounded-full bg-BgPrimary transition group-hover:bg-white"
						>
							<LogosComputerPaint class="size-8 text-Secondary" />
						</div>
						<NuxtLink>
							<h1
								class="my-5 cursor-pointer text-2xl font-semibold text-Primary transition hover:text-Secondary"
							>
								Accessibility-Focused
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							Do the right thing and help website visitors with disabilities. Be
							compliant with accessibility laws such as WCAG, ADA, and AODA.
							You’ll attract more customers.
						</p>
					</div>

					<!-- Mobile Application Development (Last Item) -->
					<div
						class="group flex flex-col bg-white px-10 py-10 transition hover:bg-BgPrimary"
					>
						<div
							class="grid size-16 place-content-center rounded-full bg-BgPrimary transition group-hover:bg-white"
						>
							<LogosComputerPaint class="size-8 text-Secondary" />
						</div>
						<NuxtLink>
							<h1
								class="my-5 cursor-pointer text-2xl font-semibold text-Primary transition hover:text-Secondary"
							>
								Transparent Communication
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							We make helpful recommendations and we don’t hold back our
							opinions. We’re a strategic partner and we immerse ourselves in
							every aspect of your website.
						</p>
					</div>
				</div>
			</div>
		</section>

		s
		<section class="bg-BgPrimary px-4 py-20">
			<div class="mx-auto w-[80vw]">
				<h3 class="text-center text-[1.2rem] font-semibold text-blue-600">
					FAQs
				</h3>
				<h2
					class="mx-auto my-4 mb-4 text-center text-[1.5rem] font-bold text-[#0E1435] md:max-w-[500px] md:text-[3rem]"
				>
					Your Questions, Answered
				</h2>

				<div class="mt-3 space-y-4 md:mt-6">
					<div
						v-for="(faq, index) in faqs"
						:key="index"
						class="mx-auto overflow-hidden rounded-lg border bg-white md:w-[50vw]"
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
			class="bg-BgPrimary md:flex"
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
				<NuxtLink to="/contact">
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
						<p
							class="text-md text-center font-normal text-gray-700 md:text-left"
						>
							Based in Faisalabad, Pakistan
						</p>
						<p
							class="text-md text-center font-normal text-gray-700 md:text-left"
						>
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
								<a href="/custom-web-design">Custom Website Design</a>
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
								<a href="/about">About Us</a>
							</li>
							<li
								class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
							>
								<span class="arrow text-2xl text-blue-500">&#8594;</span>
								<a href="/#recent-work">Our Work</a>
							</li>
							<li
								class="flex cursor-pointer items-center text-lg text-Primary transition-all hover:text-Secondary"
							>
								<span class="arrow text-2xl text-blue-500">&#8594;</span>
								<a href="/contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<div class="bg-BgPrimary">
			<div class="mx-auto flex w-1/2 justify-center py-10">
				<p class="text-gray-700">@2025 Apex Geeks</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const stats = [
	{
		icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828490.png', // Blue monitor icon
		number: 129,
		type: 'Websites Launched',
		description:
			'This ain’t our first rodeo. We’re always testing, learning, adapting and growing.'
	},
	{
		icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png', // Blue trophy icon
		number: 16,
		type: 'Design Awards Won',
		description:
			'Recognized by DesignRush, The Web Excellence Awards and many more.'
	},
	{
		icon: '/calendar.png', // Blue globe with timezones
		number: 14,
		type: 'Client Timezones',
		description:
			'We accommodate all timezones and are working with clients all over the world.'
	}
];

const teamMembers = [
	{
		name: 'Daniel Houle',
		position: 'Founder & Creative Director',
		photo: '/path-to-photos/daniel.jpg' // Replace with actual photo path
	},
	{
		name: 'Cassandra Disano',
		position: 'Web Designer & Developer',
		photo: '/path-to-photos/cassandra.jpg' // Replace with actual photo path
	},
	{
		name: 'Kaylene Holman',
		position: 'Web Designer & Developer',
		photo: '/path-to-photos/kaylene.jpg' // Replace with actual photo path
	},
	{
		name: 'Rebecca Luu',
		position: 'Web Designer & Developer',
		photo: '/path-to-photos/rebecca.jpg' // Replace with actual photo path
	},
	{
		name: 'Aman Saini',
		position: 'Web Developer & WordPress Specialist',
		photo: '/path-to-photos/aman.jpg' // Replace with actual photo path
	}
];

// FAQ toggle functionality
const activeIndex = ref(null);
const toggleFaq = (index) => {
	activeIndex.value = activeIndex.value === index ? null : index;
};

// FAQ data
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
