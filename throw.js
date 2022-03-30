AFRAME.registerComponent("bowling-balls", {
    init: function() {
      this.throwBall()
    },
    throwBall: function() {
        window.addEventListener("keydown", e => {
            if (e.key === "z") {
                let ball = document.createElement("a-entity")
                ball.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf")
                ball.setAttribute("scale", {x: 3, y: 3, z: 3})
                let cam = document.querySelector("#camera")
                let camera = document.querySelector("#camera").object3D
                let direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                let scene = document.querySelector("#scene")
                pos = cam.getAttribute("position")
                ball.setAttribute("position", {x: pos.x, y: pos.y-1.2, z: pos.z})
                ball.setAttribute("velocity", direction.multiplyScalar(-10))
                scene.appendChild(ball)
            }
        })
    }
  });
  