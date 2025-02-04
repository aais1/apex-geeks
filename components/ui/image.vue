<script setup lang="ts">
const props = defineProps<{ image: string; alt?: string }>();
</script>

<template>
	<div class="overflow-hidden rounded-xl border bg-white p-3 pb-3">
		<div class="overflow-hidden rounded-lg">
			<img
				:src="props.image"
				:alt="props?.alt ?? ''"
				class="m-auto block h-full w-full object-contain"
			/>
		</div>
	</div>
</template>
