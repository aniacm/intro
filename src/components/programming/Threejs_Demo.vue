<template>
    <div id="threejs_demo">

    </div>
</template>
<script>
import * as THREE from 'three'
export default {
    name: 'threejs_demo',
    data() {
        return {
        	width : '',
    	    height : ''
         }
    },
    created(){
       	
    },
    method: {

    },
    mounted() {

    	var that=this;

    	that.width=document.getElementById('threejs_demo').clientWidth;

    	that.height=that.width/2;

    	var renderer;
    	var camera;
    	var scene;
    	var light;
    	var cube;
    	var line;

    	function initThree() {
    	    renderer = new THREE.WebGLRenderer({
    	        antialias : true
    	    });
    	    renderer.setSize(that.width, that.height);
    	    document.getElementById('threejs_demo').appendChild(renderer.domElement);
    	    renderer.setClearColor(0xeeeeee, 1.0);
    	}

       	function initCamera() {
    	    camera = new THREE.PerspectiveCamera(45, that.width / that.height, 1, 500);
    	    camera.position.z=30;
    	    camera.lookAt(new THREE.Vector3(0,0,0));
       	}

    	
    	function initScene() {
    	    scene = new THREE.Scene();
    	}

    	
    	function initLight() {
    	    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    	    light.position.set(100, 100, 200);
    	    scene.add(light);
    	}

    	
    	function initCube() {
    		var geometry = new THREE.CubeGeometry(2,2,2);
    		var material = new THREE.MeshBasicMaterial({color: 0x074080});
    		cube = new THREE.Mesh(geometry, material); 
    		scene.add(cube);
    	}

    	function initLine(){
    		var material = new THREE.LineBasicMaterial({color: 0x074080});
    		var geometry = new THREE.Geometry();
    		geometry.vertices.push(new THREE.Vector3(-10,0,0));
    		geometry.vertices.push(new THREE.Vector3(0,10,0));
    		geometry.vertices.push(new THREE.Vector3(10,0,0));
    		geometry.vertices.push(new THREE.Vector3(0,-10,0));
    		geometry.vertices.push(new THREE.Vector3(-10,0,0));
    		line = new THREE.Line(geometry,material);
    		scene.add(line);
    	}

    	function render()
    	{
    	    renderer.clear();
    	    cube.rotation.x += 0.01;
    	    cube.rotation.y += 0.01;
    	    renderer.render(scene, camera);
    	    requestAnimationFrame(render);
    	}

    	function threeStart() {
    	    initThree();
    	    initCamera();
    	    initScene();
    	    initLight();
    	    initCube();
    	    initLine();
    	    render();
    	}

    	threeStart();
    	
    	
    }

}
</script>
<style scoped>
#threejs_demo{
	margin: 5% 0%;
}
canvas{
	width: 100%;
	height: 100%;
}
</style>
