/* global AFRAME, THREE */

/**
 * Loads and setup ground model.
 */
AFRAME.registerComponent('ground', {

	schema: { 
		src: {
			default: '',
			type: 'string' 
		}
	},

  init: function () {
    var objectLoader;
    var object3D = this.el.object3D;
    var MODEL_URL = this.data.src;
    if (this.objectLoader) { return; }
    objectLoader = this.objectLoader = new THREE.ObjectLoader();
    objectLoader.crossOrigin = '';
    objectLoader.load(MODEL_URL, function (obj) {
      obj.children.forEach(function (value) {
        value.receiveShadow = true;
        value.material.shading = THREE.FlatShading;
      });
      object3D.add(obj);
    });
  }
});
