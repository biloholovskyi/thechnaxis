import React, {Component} from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as OBJLoader from 'three-obj-loader';
import styled from "styled-components";

import text from './mod/Textures/Diffuse_2K.png';
import model from './mod/Earth 2K.obj';
import bump from './mod/Textures/Bump_2K.png';

OBJLoader(THREE);

const SceneWrapper = styled.div`
  overflow: hidden;
  flex: 1;
  max-height: 100%;
  display: flex;
  position: relative;
`;

class Scene extends Component {
  componentDidMount() {
    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  sceneSetup = () => {
    // get container dimensions and use them for scene sizing
    const width = this.el.clientWidth;
    const height = window.innerWidth < 992 ? width : this.el.clientHeight - width > width / 2 ? width : this.el.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      85, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    this.camera.position.z = 6;
    this.controls = new OrbitControls(this.camera, this.el);
    this.controls.enableZoom = false;
    this.controls.enableRotate = window.innerWidth > 991 ? true : false;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement);
  };

  addCustomSceneObjects = () => {
    let manager = new THREE.LoadingManager();
    let loader = new THREE.ImageLoader(manager);

    let textureHead = new THREE.Texture();

    loader.load(text, function (image) {
      textureHead.image = image;
      textureHead.needsUpdate = true;
    });

    let meshes = [];

    this.THREE = THREE;
    const objLoader = new this.THREE.OBJLoader();

    objLoader.load(model, (object) => {
      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          meshes.push(child);
        }
      });

      this.object = meshes[0];
      this.object.position.y = 0;
      const mapHeight = new THREE.TextureLoader().load(bump);
      this.object.material = new THREE.MeshPhongMaterial({
        map: textureHead,
        specular: 0xfceed2,
        bumpMap: mapHeight,
        bumpScale: 0.4,
        shininess: 25
      });
      this.object.scale.x = 0.9;
      this.object.scale.y = 0.9;
      this.object.scale.z = 0.9;
      this.scene.add(this.object);
    });
    const ambiColor = "#ffffff";
    const ambientLight = new THREE.AmbientLight(ambiColor);
    this.scene.add(ambientLight);
  };

  startAnimationLoop = () => {
    if (this.object) {
      this.object.rotation.x += 0.004;
      this.object.rotation.y += 0.003;
      this.object.rotation.z += 0.005;
    }
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop.bind(this));
  };

  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = window.innerWidth < 992 ? width : this.el.clientHeight - width > width / 2 ? width : this.el.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  render() {
    return <SceneWrapper ref={ref => (this.el = ref)}/>;
  }
}


export default class ThreeD extends Component {
  render() {
    return (
      <>
        <Scene/>
      </>
    );
  }
}