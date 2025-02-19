<template>
	<GlobalsNavbar />
	<section className="bg-BgPrimary py-2 md:py-12 w-full">
		<div class="mx-auto flex w-[90vw] flex-row md:w-[80vw]">
			<div class="bg-BgPrimary pt-10 md:pt-20">
				<div class="mx-auto px-6 py-12 md:w-[80vw]">
					<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
						<div v-motion-slide-visible-once-left>
							<h1
								class="mb-4 text-[2.8rem] font-bold text-[#0E1435] md:w-1/2 md:text-[3.9rem]"
							>
								Start the Conversation
							</h1>
							<p class="mb-6 text-[1.1rem] text-gray-600 md:w-[80%]">
								Let’s establish the basic details of your project in two simple
								steps. We’ll be in touch to book a discovery call shortly after
								you submit the form.
							</p>
						</div>
						<div
							v-motion-fade-visible-once
							class="rounded-lg bg-white p-8 shadow-lg"
						>
							<h2 class="mb-4 text-[2rem] font-bold text-gray-900">
								Let's Get to Know You
							</h2>
							<form
								@submit.prevent="submitProposal"
								class="space-y-4"
								enctype="multipart/form-data"
							>
								<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
									<label class="block text-gray-700"
										>First Name
										<input
											type="text"
											v-model="form.firstName"
											required
											class="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-300"
										/>
									</label>
									<label class="block text-gray-700"
										>Last Name
										<input
											type="text"
											v-model="form.lastName"
											required
											class="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-300"
										/>
									</label>
								</div>
								<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
									<label class="block text-gray-700"
										>Email Address
										<input
											type="email"
											v-model="form.email"
											required
											class="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-300"
										/>
									</label>
									<label class="block text-gray-700"
										>Phone Number
										<input
											type="tel"
											v-model="form.phone"
											required
											class="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-300"
										/>
									</label>
								</div>
								<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
									<label class="block text-gray-700"
										>Company Name
										<input
											type="text"
											v-model="form.company"
											required
											class="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-300"
										/>
									</label>
									<label class="block text-gray-700"
										>Website URL
										<input
											type="url"
											v-model="form.website"
											required
											class="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-300"
										/>
									</label>
								</div>
								<label class="block text-gray-700"
									>Upload Project Files (Optional)
									<input
										type="file"
										@change="handleFileUpload"
										class="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-300"
									/>
								</label>
								<label class="block text-gray-700"
									>Project Summary
									<textarea
										v-model="form.projectSummary"
										required
										class="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-300"
									></textarea>
								</label>
								<button
									type="submit"
									:disabled="loading"
									class="flex w-full items-center justify-center rounded-lg bg-blue-600 p-3 text-white opacity-90 hover:bg-blue-700 disabled:opacity-50"
								>
									<span
										v-if="loading"
										class="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
									></span>
									{{ loading ? 'Sending...' : 'Submit' }}
								</button>
							</form>
							<p
								v-if="message"
								class="mt-4 text-center text-green-600"
							>
								{{ message }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-BgPrimary px-4 py-12">
		<div class="mx-auto w-[80vw]">
			<h3 class="text-center text-[1.2rem] font-semibold text-blue-600">
				FAQs
			</h3>
			<h2
				class="mx-auto my-4 mb-4 text-center text-[2rem] font-bold text-[#0E1435] md:max-w-[500px] md:text-[3.8rem]"
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
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

// Define component properties
const form = ref({
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	company: '',
	website: '',
	projectSummary: ''
});
const message = ref('');
const file = ref(null);
const loading = ref(false);

// Define the method to submit the proposal
const submitProposal = async () => {
	loading.value = true;
	try {
		const formData = new FormData();
		Object.keys(form.value).forEach((key) => {
			formData.append(key, form.value[key]);
		});
		if (file.value) {
			formData.append('file', file.value);
		}
		const response = await axios.post('/api/sendProposal', formData, {
			headers: { 'Content-Type': 'multipart/form-data' }
		});
		message.value = response.data.message;
	} catch (error) {
		message.value = 'Failed to send proposal';
	} finally {
		loading.value = false;
	}
};

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
