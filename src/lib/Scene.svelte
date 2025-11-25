<script lang="ts">
	import { MathUtils } from 'three';
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import Character from './Assets/ChainsawMan.svelte';

	let { action } = $props();
</script>

<T.PerspectiveCamera
	makeDefault
	position={[0, 1, 4]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
></T.PerspectiveCamera>

<T.AmbientLight intensity={1} />
<T.DirectionalLight position={[1, 5, 1]} castShadow />

<Character actionKey={action} />
