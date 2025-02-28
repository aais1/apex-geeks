<script setup lang="ts">
import { ref, onMounted } from 'vue';

const imagesScrollOne = ref<HTMLDivElement | null>(null);
const imagesScrollTwo = ref<HTMLDivElement | null>(null);

let scrollPosition = 0;
const speedOne = 0.4; // Speed for the first slider (moving left)
const speedTwo = 0.6; // Speed for the second slider (moving right)

const handleScroll = () => {
	scrollPosition = window.scrollY;

	if (imagesScrollOne.value && imagesScrollTwo.value) {
		// Apply horizontal parallax movement
		imagesScrollOne.value.style.transform = `translateX(-${scrollPosition * speedOne}px)`; // Scroll left
		imagesScrollTwo.value.style.transform = `translateX(${scrollPosition * speedTwo}px)`; // Scroll right
	}
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	handleScroll(); // Initialize the scroll effect
});
</script>

<template>
	<GlobalsNavbar />
	<main class="bg-BgPrimary">
		<div
			class="container"
			v-motion-fade-visible-once
		>
			<div class="py-16 md:py-20" />
			<h4 class="text-center text-lg font-medium text-Secondary">
				Cutting-Edge Web Design, Development & SEO
			</h4>
			<h1
				class="mx-auto max-w-[650px] py-7 text-center text-4xl font-semibold text-Primary md:text-5xl md:font-bold"
			>
				Creating Beautiful Websites That Drive Revenue
			</h1>
		</div>
	</main>

	<section
		class="bg-BgPrimary"
		style="overflow: hidden"
	>
		<div
			ref="imagesScrollOne"
			class="scroll-container"
		>
			<UiImage
				v-for="i in 10"
				:key="i"
				:image="`https://picsum.photos/${400 + i * 5}/300`"
				class="image-item"
			/>
		</div>
		<div
			ref="imagesScrollTwo"
			class="scroll-container"
			style="margin-left: -400px"
		>
			<UiImage
				v-for="i in 10"
				:key="i"
				:image="`https://picsum.photos/${400 + i * 5}/300`"
				class="image-item"
			/>
		</div>
	</section>

	<section
		class="bg-BgPrimary py-16"
		v-motion-fade-visible-once
	>
		<div class="container relative">
			<div class="fade-gradient absolute inset-0 z-50"></div>
			<h4 class="mb-7 text-center text-lg font-medium text-Secondary">
				We Win Awards For Our Work
			</h4>
			<div
				class="flex justify-around gap-10 overflow-hidden *:max-w-44 sm:*:max-w-60"
			>
				<img
					src="/images/logos/awwwards-logo.svg"
					alt=""
				/>
				<img
					src="/images/logos/css-design-logo.svg"
					alt=""
				/>
				<img
					src="/images/logos/design-rush-best-design-logo.svg"
					alt=""
				/>
				<img
					src="/images/logos/web-excellence-award-logo.svg"
					alt=""
				/>
			</div>
		</div>
	</section>

	<section
		class="bg-BgPrimary py-16"
		v-motion-fade-visible-once
	>
		<div class="container">
			<h4 class="text-center text-xl font-medium text-Secondary">
				Our Services
			</h4>
			<h1
				class="mx-auto my-5 max-w-[500px] text-center text-5xl font-bold leading-snug text-Primary"
			>
				Everything Your Website Needs For Success
			</h1>
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
							Custom Website Design
						</h1>
					</NuxtLink>
					<p class="text-lg text-Neutral">
						From industry research to A/B testing, we will design a unique
						website that will WOW your visitors and motivate them to take
						action.
					</p>
					<NuxtLink
						to="/"
						class="mt-5 flex items-center text-lg text-Secondary"
					>
						Learn More
						<Icon
							name="material-symbols:arrow-right-alt"
							size="24"
							class="mx-1 mt-1"
						/>
					</NuxtLink>
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
							WordPress Development
						</h1>
					</NuxtLink>
					<p class="text-lg text-Neutral">
						We develop websites at the highest standard of security,
						responsiveness, accessibility, reliability, loading speed, and
						ease-of-use.
					</p>
					<NuxtLink
						to="/"
						class="mt-5 flex items-center text-lg text-Secondary"
					>
						Learn More
						<Icon
							name="material-symbols:arrow-right-alt"
							size="24"
							class="mx-1 mt-1"
						/>
					</NuxtLink>
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
							Search Engine Optimization
						</h1>
					</NuxtLink>
					<p class="text-lg text-Neutral">
						Dominate Google and maximize organic traffic with an SEO-focused
						website. We skyrocket our clients' rankings and accelerate growth.
					</p>
					<NuxtLink
						to="/"
						class="mt-5 flex items-center text-lg text-Secondary"
					>
						Learn More
						<Icon
							name="material-symbols:arrow-right-alt"
							size="24"
							class="mx-1 mt-1"
						/>
					</NuxtLink>
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
							Web Hosting & Maintenance
						</h1>
					</NuxtLink>
					<p class="text-lg text-Neutral">
						Avoid technical headaches and gain peace of mind. We ensure that our
						clients' websites are always performing at the highest level.
					</p>
					<NuxtLink
						to="/"
						class="mt-5 flex items-center text-lg text-Secondary"
					>
						Learn More
						<Icon
							name="material-symbols:arrow-right-alt"
							size="24"
							class="mx-1 mt-1"
						/>
					</NuxtLink>
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
							Content Writing Assistance
						</h1>
					</NuxtLink>
					<p class="text-lg text-Neutral">
						We write content that engages the reader, drives conversions,
						improves SEO, and allows the design to look aesthetically pleasing.
					</p>
					<NuxtLink
						to="/"
						class="mt-5 flex items-center text-lg text-Secondary"
					>
						Learn More
						<Icon
							name="material-symbols:arrow-right-alt"
							size="24"
							class="mx-1 mt-1"
						/>
					</NuxtLink>
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
							Mobile Application Development
						</h1>
					</NuxtLink>
					<p class="text-lg text-Neutral">
						We specialize in creating mobile applications with a focus on user
						experience, functionality, and performance. Let’s build an app that
						will elevate your business.
					</p>
					<NuxtLink
						to="/"
						class="mt-5 flex items-center text-lg text-Secondary"
					>
						Learn More
						<Icon
							name="material-symbols:arrow-right-alt"
							size="24"
							class="mx-1 mt-1"
						/>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>

	<section
		id="recent-work"
		class="overflow-hidden bg-BgPrimary py-16"
	>
		<h4 class="text-center text-lg font-medium text-Secondary">Recent Work</h4>
		<h1
			class="mx-auto my-7 max-w-[400px] text-center text-[2.1rem] font-semibold text-Primary md:max-w-[500px] md:text-5xl md:font-bold"
		>
			Powerful Websites & Happy Clients
		</h1>

		<!-- WORK Section -->
		<div class="flex flex-col gap-y-6">
			<!-- Testimonial Card -->
			<div
				class="mx-auto flex max-h-fit flex-col-reverse gap-8 rounded-xl px-6 py-8 md:max-w-[80vw] md:flex-row md:items-center"
			>
				<!-- Testimonial Content -->
				<div class="space-y-8 md:w-1/2 md:space-y-20">
					<div class="text-center md:text-left">
						<RouterLink
							to="/"
							class="text-lg font-semibold text-Secondary"
							>twistednail.com</RouterLink
						>
						<h4 class="text-xl text-gray-700">Trucking & Aggregate Supply</h4>
					</div>
					<div>
						<p
							class="mb-6 text-center text-[1.3rem] font-bold text-black md:text-left md:text-[1.5rem]"
						>
							"The Azuro team was talented, communicative, and provided expert
							advice. Our team loves the design of our new website. Most
							importantly, since partnering with Azuro, we have seen a large
							increase in traffic from ranking better on search engines, and
							have been receiving higher quality leads."
						</p>
					</div>
					<div class="flex justify-center gap-x-2 md:justify-start">
						<img
							src="https://azurodigital.com/wp-content/uploads/hunter_kosar-hs-1.jpg"
							alt=""
							width="45"
							height="45"
							class="inline rounded-full"
						/>
						<div>
							<p class="font-semibold text-Primary">Hunter Kosar</p>
							<p class="text-gray-500">President of Twisted Nail</p>
						</div>
					</div>
				</div>
				<!-- Website Screenshot -->
				<div
					v-motion-slide-visible-right
					class="group relative mt-6 overflow-hidden rounded-3xl bg-white p-2 md:mt-0 md:w-1/2"
				>
					<img
						src="https://azurodigital.com/wp-content/uploads/twisted-nail-testimonial-1024x911.jpg"
						alt="Website Screenshot"
						class="h-auto w-full cursor-pointer rounded-3xl"
					/>

					<!-- White Overlay Effect -->
					<div
						class="absolute inset-0 cursor-pointer bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-25"
					></div>
				</div>
			</div>

			<div
				class="mx-auto flex max-h-fit flex-col gap-8 rounded-xl px-6 py-8 md:max-w-[80vw] md:flex-row md:items-center"
			>
				<!-- Website Screenshot -->
				<div
					v-motion-slide-visible-left
					class="group relative mt-6 overflow-hidden rounded-3xl bg-white p-2 md:mt-0 md:w-1/2"
				>
					<img
						src="https://azurodigital.com/wp-content/uploads/twisted-nail-testimonial-1024x911.jpg"
						alt="Website Screenshot"
						class="h-auto w-full cursor-pointer rounded-3xl"
					/>

					<!-- White Overlay Effect -->
					<div
						class="absolute inset-0 cursor-pointer bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-25"
					></div>
				</div>

				<!-- Testimonial Content -->
				<div class="space-y-8 md:w-1/2 md:space-y-20">
					<div class="text-center md:text-left">
						<RouterLink
							to="/"
							class="text-lg font-semibold text-Secondary"
							>twistednail.com</RouterLink
						>
						<h4 class="text-xl text-gray-700">Trucking & Aggregate Supply</h4>
					</div>
					<div>
						<p
							class="mb-6 text-center text-[1.3rem] font-bold text-black md:text-left md:text-[1.5rem]"
						>
							"The Azuro team was talented, communicative, and provided expert
							advice. Our team loves the design of our new website. Most
							importantly, since partnering with Azuro, we have seen a large
							increase in traffic from ranking better on search engines, and
							have been receiving higher quality leads."
						</p>
					</div>
					<div class="flex justify-center gap-x-2 md:justify-start">
						<img
							src="https://azurodigital.com/wp-content/uploads/hunter_kosar-hs-1.jpg"
							alt=""
							width="45"
							height="45"
							class="inline rounded-full"
						/>
						<div>
							<p class="font-semibold text-Primary">Hunter Kosar</p>
							<p class="text-gray-500">President of Twisted Nail</p>
						</div>
					</div>
				</div>
			</div>

			<div
				class="mx-auto flex max-h-fit flex-col-reverse gap-8 rounded-xl px-6 py-8 md:max-w-[80vw] md:flex-row md:items-center"
			>
				<!-- Testimonial Content -->
				<div class="space-y-8 md:w-1/2 md:space-y-20">
					<div class="text-center md:text-left">
						<RouterLink
							to="/"
							class="text-lg font-semibold text-Secondary"
							>twistednail.com</RouterLink
						>
						<h4 class="text-xl text-gray-700">Trucking & Aggregate Supply</h4>
					</div>
					<div>
						<p
							class="mb-6 text-center text-[1.3rem] font-bold text-black md:text-left md:text-[1.5rem]"
						>
							"The Azuro team was talented, communicative, and provided expert
							advice. Our team loves the design of our new website. Most
							importantly, since partnering with Azuro, we have seen a large
							increase in traffic from ranking better on search engines, and
							have been receiving higher quality leads."
						</p>
					</div>
					<div class="flex justify-center gap-x-2 md:justify-start">
						<img
							src="https://azurodigital.com/wp-content/uploads/hunter_kosar-hs-1.jpg"
							alt=""
							width="45"
							height="45"
							class="inline rounded-full"
						/>
						<div>
							<p class="font-semibold text-Primary">Hunter Kosar</p>
							<p class="text-gray-500">President of Twisted Nail</p>
						</div>
					</div>
				</div>
				<!-- Website Screenshot -->
				<div
					v-motion-slide-visible-right
					class="group relative mt-6 overflow-hidden rounded-3xl bg-white p-2 md:mt-0 md:w-1/2"
				>
					<img
						src="https://azurodigital.com/wp-content/uploads/twisted-nail-testimonial-1024x911.jpg"
						alt="Website Screenshot"
						class="h-auto w-full cursor-pointer rounded-3xl"
					/>

					<!-- White Overlay Effect -->
					<div
						class="absolute inset-0 cursor-pointer bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-25"
					></div>
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
				class="gap-08 mt-4 flex flex-wrap justify-start gap-8 gap-x-16 px-2 text-left md:mt-12"
			>
				<div class="space-y-2">
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

				<div class="text-gray-700">
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
</template>

<style scopped>
.scroll-container {
	display: flex;
	overflow: hidden;
	white-space: nowrap;
	width: 500vw;
	margin: 10px;
	position: relative;
	transition: transform 0.1s ease-out;
	will-change: transform; /* Optimizing transform for better performance */
	transform-style: preserve-3d; /* Ensuring 3D transforms are preserved */
	backface-visibility: hidden; /* Hides back faces during 3D transforms */
}

.image-item {
	display: inline-block;
	width: 350px;

	margin-right: 15px;
	object-fit: cover;
	transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
		skew(0deg);
}

.scroll-container::-webkit-scrollbar {
	display: none;
}

.scrollbar-hidden {
	scrollbar-width: 0;
}
.scrollbar-hidden::-webkit-scrollbar {
	display: none;
}

.fade-gradient {
	background: rgb(224, 224, 224);
	background: radial-gradient(
		circle,
		rgba(224, 224, 224, 0) 50%,
		rgba(245, 247, 255, 1) 95%
	);
}
</style>
