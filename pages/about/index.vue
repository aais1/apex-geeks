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
					class="text-[1.05rem] font-medium leading-[1.7rem] tracking-[0.02rem] text-[#0E75E3]"
				>
					About Us
				</h3>
				<h2
					class="w-[75%] text-[2rem] font-bold leading-[3.7rem] tracking-[-0.06rem] text-Primary md:w-full md:text-[3.95rem]"
				>
					We’re Obsessed With Making Our Clients Happy
				</h2>
				<p class="mb-6 text-[1rem] text-[#474B64]">
					We’re a premium, boutique web design agency working remotely
					throughout North America and serving clients across the globe.
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
			class="py-6 md:py-10"
			v-motion-fade-visible-once
		>
			<p
				class="mx-auto w-[80vw] text-center text-[1.25rem] font-semibold leading-[2rem] tracking-[0px] text-[#0E1435] md:w-[50vw] md:text-[1.35rem]"
			>
				Established in 2018, Azuro Digital has united a group of top tier,
				highly experienced designers and developers with a passion for
				innovation, constant learning, and supporting one another.
			</p>
		</section>

		<section
			class="container py-4 md:py-10"
			v-motion-fade-visible-once
		>
			<div
				class="mt-16 grid grid-cols-1 gap-[3px] overflow-hidden rounded-[2rem] border-[3px] border-gray-100 bg-gray-100 md:grid-cols-3"
			>
				<div
					v-for="(item, index) in stats"
					:key="index"
					class="group flex flex-col bg-white px-10 py-10 transition hover:bg-BgPrimary"
				>
					<div
						class="grid size-16 place-content-center rounded-full bg-BgPrimary transition group-hover:bg-white"
					>
						<img
							:src="item.icon"
							alt="stat-icon"
							class="size-8 text-Secondary"
						/>
					</div>
					<h1
						class="my-5 cursor-pointer text-[3.9rem] font-bold leading-[4.6rem] tracking-[-0.06rem] text-Primary text-[#0E1435] transition hover:text-Secondary"
					>
						{{ item.number }}
					</h1>
					<p
						class="text-[1.5rem] font-semibold leading-[2.3rem] text-[#474B64]"
					>
						{{ item.type }}
					</p>
					<p
						class="mt-3 text-[1.1rem] font-normal leading-[1.9rem] tracking-[0rem] text-[#474B64]"
					>
						{{ item.description }}
					</p>
				</div>
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
</script>
