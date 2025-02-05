<script setup lang="ts">
import { useElementBounding } from '@vueuse/core';

const imagesScrollOne = ref<HTMLDivElement>();
const { top: topOne, y: yOne } = useElementBounding(imagesScrollOne);
const imagesScrollTwo = ref<HTMLDivElement>();
const { top: topTwo, y: yTwo } = useElementBounding(imagesScrollOne);

onMounted(() => {
	const widthOne = imagesScrollOne.value!.scrollWidth;
	const widthTwo = imagesScrollTwo.value!.scrollWidth;

	imagesScrollOne.value!.scrollTo({
		left: widthOne * 0.2
	});

	imagesScrollTwo.value!.scrollTo({
		left: widthTwo * 0.2
	});
});

watch(topOne, () => {
	if (topOne.value > 0) {
		const percentageOne = topOne.value / imagesScrollOne.value!.offsetTop;
		const amountToScrollOne =
			imagesScrollOne.value!.scrollWidth * (percentageOne + 0.3) * 0.4;

		imagesScrollOne.value!.scrollTo({ left: amountToScrollOne });

		const percentageTwo = topTwo.value / imagesScrollTwo.value!.offsetTop;
		const amountToScrollTwo =
			imagesScrollTwo.value!.scrollWidth -
			imagesScrollTwo.value!.scrollWidth * (percentageTwo + 0.3) * 0.8;

		imagesScrollTwo.value!.scrollTo({ left: amountToScrollTwo });
	}
});
</script>

<template>
	<GlobalsNavbar />
	<main class="bg-BgPrimary">
		<div class="container">
			<div class="py-16 md:py-20" />
			<h4 class="text-center text-lg font-medium text-Secondary">
				Cutting-Edge Web Design, Development & SEO
			</h4>
			<h1
				class="mx-auto my-7 max-w-[650px] text-center text-4xl font-semibold text-Primary md:text-5xl md:font-bold"
			>
				Creating Beautiful Websites That Drive Revenue
			</h1>
		</div>
	</main>
	<section class="bg-BgPrimary">
		<div
			class="scrollbar-hidden flex flex-nowrap space-x-3 overflow-x-auto py-5 pt-10"
			ref="imagesScrollOne"
		>
			<UiImage
				v-for="i in 10"
				:key="i"
				:image="`https://picsum.photos/${400 + i * 5}/300`"
				class="inline-block max-h-[250px] min-w-[450px]"
			/>
		</div>
		<div
			class="scrollbar-hidden flex flex-nowrap space-x-3 overflow-x-auto py-5 pt-10"
			ref="imagesScrollTwo"
		>
			<UiImage
				v-for="i in 10"
				:key="i"
				:image="`https://picsum.photos/${400 + i * 5}/300`"
				class="inline-block max-h-[250px] min-w-[450px]"
			/>
		</div>
	</section>
	<section class="bg-BgPrimary py-16">
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
	<section class="bg-BgPrimary py-16">
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
				<div
					v-for="i in 6"
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
			</div>
		</div>
	</section>

	<section class="bg-BgPrimary py-16">
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
				<div class="mt-6 rounded-3xl bg-white p-2 md:mt-0 md:w-1/2">
					<img
						src="https://azurodigital.com/wp-content/uploads/twisted-nail-testimonial-1024x911.jpg"
						alt="Website Screenshot"
						class="h-auto w-full cursor-pointer rounded-3xl"
					/>
				</div>
			</div>

			<div
				class="mx-auto flex max-h-fit flex-col gap-8 rounded-xl px-6 py-8 md:max-w-[80vw] md:flex-row md:items-center"
			>
				<!-- Website Screenshot -->
				<div class="mt-6 rounded-3xl bg-white p-2 md:mt-0 md:w-1/2">
					<img
						src="https://azurodigital.com/wp-content/uploads/twisted-nail-testimonial-1024x911.jpg"
						alt="Website Screenshot"
						class="h-auto w-full cursor-pointer rounded-3xl"
					/>
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
				<div class="mt-6 rounded-3xl bg-white p-2 md:mt-0 md:w-1/2">
					<img
						src="https://azurodigital.com/wp-content/uploads/twisted-nail-testimonial-1024x911.jpg"
						alt="Website Screenshot"
						class="h-auto w-full cursor-pointer rounded-3xl"
					/>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-BgPrimary md:flex">
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
			<GlobalsButton
				intent="primary"
				animation
				class="ml-auto w-52 px-3 py-2 font-medium"
			>
				Get A Proposal
			</GlobalsButton>

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
						Based in Faisalabad, Pakistan, Earth, MikyWay, Universe
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

	<div class="bg-BgPrimary">
		<div class="mx-auto flex w-1/2 justify-center py-10">
			<p class="text-gray-700">@2025 Apex Geeks</p>
		</div>
	</div>
</template>

<style scopped>
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
