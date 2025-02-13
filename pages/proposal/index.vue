<template>
	<GlobalsNavbar />
	<div class="bg-BgPrimary pt-10 md:pt-20">
		<div class="mx-auto px-6 py-12 md:w-[80vw]">
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
				<div v-motion-slide-visible-once-left>
					<h1
						class="mb-4 w-1/2 text-[2.8rem] font-bold text-[#0E1435] md:text-[3.9rem]"
					>
						Start the Conversation
					</h1>
					<p class="mb-6 text-[1.1rem] text-gray-600 md:w-[80%]">
						Let’s establish the basic details of your project in two simple
						steps. We’ll be in touch to book a discovery call shortly after you
						submit the form.
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
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
	components: { Navbar },
	data() {
		return {
			form: {
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				company: '',
				website: '',
				projectSummary: ''
			},
			message: '',
			file: null,
			loading: false
		};
	},
	methods: {
		async submitProposal() {
			this.loading = true;
			try {
				const formData = new FormData();
				Object.keys(this.form).forEach((key) => {
					formData.append(key, this.form[key]);
				});
				if (this.file) {
					formData.append('file', this.file);
				}
				const response = await axios.post('/api/sendProposal', formData, {
					headers: { 'Content-Type': 'multipart/form-data' }
				});
				this.message = response.data.message;
			} catch (error) {
				this.message = 'Failed to send proposal';
			} finally {
				this.loading = false;
			}
		}
	}
};
</script>
