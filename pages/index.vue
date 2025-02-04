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
			<GlobalsButton
				class="mx-auto flex items-center gap-1"
				intent="secondary"
				animation
			>
				Get A Proposal {{ topOne }} {{ yOne }}
				<Icon
					name="material-symbols:arrow-right-alt"
					size="24"
				/>
			</GlobalsButton>
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
