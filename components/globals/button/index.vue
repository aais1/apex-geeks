<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { cva, type VariantProps } from 'class-variance-authority';
import { useAttrs } from 'vue';

const attrs = useAttrs() as { class?: string };

const buttonVariants = cva(
	'rounded-full px-5 transition duration-300 py-3 text-lg font-semibold',
	{
		variants: {
			intent: {
				primary: ['bg-Secondary', 'text-white'],
				secondary: [
					'bg-transparent',
					'border',
					'border-black/20',
					'text-Secondary',
					'hover:border-transparent',
					'hover:bg-Secondary',
					'hover:text-white'
				]
			},
			animation: {
				false: null,
				true: ['hover:-translate-y-1']
			}
		}
	}
);

interface ButtonVariants {
	intent: 'primary' | 'secondary';
	animation: boolean;
}

const buttonStyles = (variants: ButtonVariants): string =>
	twMerge(buttonVariants(variants), attrs?.class);

interface Props extends ButtonVariants {}

const props = defineProps<Props>();
</script>

<template>
	<button :class="buttonStyles(props)">
		<slot />
	</button>
</template>
