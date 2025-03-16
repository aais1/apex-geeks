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
					Professional WordPress Developers
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
					src="https://azurodigital.com/wp-content/uploads/wordpress-development-featured-v2-1536x1050.jpg"
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
								Fast Loading Speed
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							Your site speed is not only important for the user experience and
							the conversion rate, but it’s also an SEO ranking factor. We’ll
							make your website fly.
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
								Robust Security
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							WordPress can be vulnerable to hackers if you don’t configure the
							application correctly. We add multiple layers of security to keep
							your website safe.
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
								Perfectly Responsive
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							Your website will look flawless on all devices, screen sizes and
							browsers. Our meticulous designers are obsessed with every last
							detail of your website.
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
								Accessibility-Focused
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							Do the right thing and help website visitors with disabilities. Be
							compliant with accessibility laws such as WCAG, ADA, and AODA.
							You’ll attract more customers.
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
								Easy to Edit Yourself
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							We know you don’t want to rely on us for every minor edit. That’s
							why we provide training and build your site in a way that’s easy
							for you to make small changes.
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
								Own Your Website
							</h1>
						</NuxtLink>
						<p class="text-lg text-Neutral">
							Some agencies technically own their clients’ websites. Not us. You
							have full administrative access to your website and own the entire
							thing outright.
						</p>
					</div>
				</div>
			</div>
		</section>

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
								<a href="/wordpress-development">WordPress Development</a>
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
		question: 'Why is WordPress the best web development platform?',
		answer: `WordPress is by far the most popular web development platform for a number of reasons. To put its popularity into perspective, according to HubSpot and many other sources, WordPress powers roughly 43% of all websites on the internet. Meanwhile, Shopify is the 2nd most popular platform and only powers about 6% of websites.
The reason why WordPress is so popular is due to its flexibility. You can integrate any type of functionality with efficiency and effectiveness. Other platforms are often more restrictive and don’t allow you to have full control.

WordPress is “open source” which means that you can customize anything, and it also means that you have complete ownership of the website. There are other open source platforms out there, but most professionals believe that WordPress provides the most seamless design and development experience on the market.`
	},
	{
		question: 'As WordPress developers, what tools and plugins do you use?',
		answer: `We use a variety of tools and plugins to ensure that your website is fast, secure, and user-friendly. Some of the tools we use include:`
	},
	{
		question: 'Why do I need a WordPress maintenance plan?',
		answer:
			'As a result of the flexibility and vast customization capabilities that WordPress provides, it also requires ongoing technical maintenance to prevent it from breaking down or getting hacked. For more information, we’ve written a comprehensive article on why you need a WordPress maintenance plan.'
	},
	{
		question: 'How do you optimize website speed on WordPress?',
		answer:
			'Website speed is crucial for user experience and SEO. We optimize website speed by compressing images, minifying CSS and JavaScript, leveraging browser caching, and more. For more information, we’ve written a comprehensive article on how to optimize website speed on WordPress.'
	}
]);
</script>
