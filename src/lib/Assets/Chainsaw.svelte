<script lang="ts">
	import { MathUtils } from 'three';
	import { T, useTask } from '@threlte/core';
	import { OrbitControls, GLTF } from '@threlte/extras';

	let rotation = $state(0);
	useTask((delta) => {
		rotation += delta * 0.4;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[0, 0, -5.5]}
	oncreate={(ref) => {
		ref.lookAt(0, 0.25, 0);
	}}
></T.PerspectiveCamera>

<T.AmbientLight intensity={2} />
<T.DirectionalLight position={[0, 0, 3]} castShadow />

<div class="test">
	<GLTF rotation.y={rotation} url="./ChainsawSolo.glb" />
</div>

<style>
	.test {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1;
		margin: 0;
		padding: 0;
	}
</style>
