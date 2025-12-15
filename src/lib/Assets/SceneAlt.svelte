<script lang="ts">
	import { MathUtils } from 'three';
	import { T } from '@threlte/core';
	import { OrbitControls, GLTF } from '@threlte/extras';
</script>

<T.PerspectiveCamera
	makeDefault
	position={[0, -1, 6]}
	oncreate={(ref) => {
		ref.lookAt(1, 1, 1);
	}}
>
	<OrbitControls
		enableDamping={true}
		dampingFactor={0.05}
		rotateSpeed={0.5}
		minDistance={3}
		maxDistance={10}
		minPolarAngle={MathUtils.degToRad(0)}
		maxPolarAngle={MathUtils.degToRad(90)}
	/>
</T.PerspectiveCamera>

<T.AmbientLight intensity={1} />
<T.DirectionalLight position={[1, 5, 1]} castShadow />

<!-- <Shirt /> -->

<GLTF url="./shirtBase.glb" />
