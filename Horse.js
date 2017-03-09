/**
 * Created by emilypeterson on 3/7/17.
 */
class Horse {
    constructor (gl) {
        this.barrel = new Cylinder(gl, .06, .06, .2, 20);
        this.rear = new UniSphere(gl, .07, 4);
        this.chest = new UniSphere(gl, .07, 4);
        this.neck = new Cylinder(gl, .04, .06, .18, 20);
        this.cheek = new UniSphere(gl, .05, 4);
        this.bridge = new Cylinder(gl, .022, .040, .08, 20);
        this.muzzle = new UniSphere(gl, .022, 4);
        this.eye = new UniSphere(gl, .008, 4);
        this.sholder = new UniSphere(gl, .059, 4);
        this.hip = new UniSphere(gl, .05, 4);
        this.forearm = new Cylinder(gl, .03, .01, .15, 20);
        this.stifle = new Cylinder(gl, .04, .02, .1, 20);
        this.gaskin = new Cylinder(gl, .04, .01, .1, 20);
        this.knee = new UniSphere(gl, .012, 4);
        this.hock = new UniSphere(gl, .012, 4);
        this.cannon = new Cylinder(gl, .01, .01, .15, 20);
        //this.fetlock = new UniSphere(gl, .011, 4);
        this.fetlock = new Cube(gl, .011, 4);
        this.pastern = new Cylinder(gl, .008, .008, .02, 20);
        this.hoof = new Cylinder(gl, .008, .014, .016, 20);

        this.barrelTransform = mat4.create();
        let moveUp = vec3.fromValues (0, 0, .292);
        mat4.translate (this.barrelTransform, this.barrelTransform, moveUp);
        mat4.rotateX(this.barrelTransform, this.barrelTransform, Math.PI/2);

        this.rearTransform = mat4.create();
        mat4.translate (this.rearTransform, this.rearTransform, moveUp);
        let moveLeft = vec3.fromValues (0, -.1, 0);
        mat4.translate (this.rearTransform, this.rearTransform, moveLeft);

        this.chestTransform = mat4.create();
        mat4.translate (this.chestTransform, this.chestTransform, moveUp);
        let moveRight = vec3.fromValues (0, .1, 0);
        mat4.translate (this.chestTransform, this.chestTransform, moveRight);

        this.neckTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .392);
        moveRight = vec3.fromValues (0, .16, 0);
        mat4.translate (this.neckTransform, this.neckTransform, moveUp);
        mat4.translate (this.neckTransform, this.neckTransform, moveRight);
        mat4.rotateX(this.neckTransform, this.neckTransform, -Math.PI/7);

        this.cheekTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .492);
        moveRight = vec3.fromValues (0, .21, 0);
        mat4.translate (this.cheekTransform, this.cheekTransform, moveUp);
        mat4.translate (this.cheekTransform, this.cheekTransform, moveRight);

        this.bridgeTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .472);
        moveRight = vec3.fromValues (0, .27, 0);
        mat4.translate (this.bridgeTransform, this.bridgeTransform, moveUp);
        mat4.translate (this.bridgeTransform, this.bridgeTransform, moveRight);
        mat4.rotateX(this.bridgeTransform, this.bridgeTransform, -Math.PI/1.6);

        this.muzzleTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .453);
        moveRight = vec3.fromValues (0, .314, 0);
        mat4.translate (this.muzzleTransform, this.muzzleTransform, moveUp);
        mat4.translate (this.muzzleTransform, this.muzzleTransform, moveRight);

        this.eyeRTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .512);
        moveRight = vec3.fromValues (0, .24, 0);
        let moveForward = vec3.fromValues (.028, 0, 0);
        mat4.translate (this.eyeRTransform, this.eyeRTransform, moveUp);
        mat4.translate (this.eyeRTransform, this.eyeRTransform, moveRight);
        mat4.translate (this.eyeRTransform, this.eyeRTransform, moveForward);

        this.eyeLTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .512);
        moveRight = vec3.fromValues (0, .24, 0);
        let moveBackward = vec3.fromValues (-.028, 0, 0);
        mat4.translate (this.eyeLTransform, this.eyeLTransform, moveUp);
        mat4.translate (this.eyeLTransform, this.eyeLTransform, moveRight);
        mat4.translate (this.eyeLTransform, this.eyeLTransform, moveBackward);

        /*Front Right Leg*/
        this.sholderFLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .284);
        moveRight = vec3.fromValues (0, .11, 0);
        moveForward = vec3.fromValues (.022, 0, 0);
        mat4.translate (this.sholderFLTransform, this.sholderFLTransform, moveUp);
        mat4.translate (this.sholderFLTransform, this.sholderFLTransform, moveRight);
        mat4.translate (this.sholderFLTransform, this.sholderFLTransform, moveForward);

        this.forearmFRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .192);
        moveRight = vec3.fromValues (0, .11, 0);
        moveForward = vec3.fromValues (.05, 0, 0);
        mat4.translate (this.forearmFRTransform, this.forearmFRTransform, moveUp);
        mat4.translate (this.forearmFRTransform, this.forearmFRTransform, moveRight);
        mat4.translate (this.forearmFRTransform, this.forearmFRTransform, moveForward);

        this.kneeFRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .112);
        moveRight = vec3.fromValues (0, .11, 0);
        moveForward = vec3.fromValues (.05, 0, 0);
        mat4.translate (this.kneeFRTransform, this.kneeFRTransform, moveUp);
        mat4.translate (this.kneeFRTransform, this.kneeFRTransform, moveRight);
        mat4.translate (this.kneeFRTransform, this.kneeFRTransform, moveForward);

        this.cannonFRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .112);
        moveRight = vec3.fromValues (0, .11, 0);
        moveForward = vec3.fromValues (.05, 0, 0);
        mat4.translate (this.cannonFRTransform, this.cannonFRTransform, moveUp);
        mat4.translate (this.cannonFRTransform, this.cannonFRTransform, moveRight);
        mat4.translate (this.cannonFRTransform, this.cannonFRTransform, moveForward);

        this.fetlockFRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .032);
        moveRight = vec3.fromValues (0, .11, 0);
        moveForward = vec3.fromValues (.05, 0, 0);
        mat4.translate (this.fetlockFRTransform, this.fetlockFRTransform, moveUp);
        mat4.translate (this.fetlockFRTransform, this.fetlockFRTransform, moveRight);
        mat4.translate (this.fetlockFRTransform, this.fetlockFRTransform, moveForward);

        this.pasternFRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .018);
        moveRight = vec3.fromValues (0, .12, 0);
        moveForward = vec3.fromValues (.05, 0, 0);
        mat4.translate (this.pasternFRTransform, this.pasternFRTransform, moveUp);
        mat4.translate (this.pasternFRTransform, this.pasternFRTransform, moveRight);
        mat4.translate (this.pasternFRTransform, this.pasternFRTransform, moveForward);
        mat4.rotateX(this.pasternFRTransform, this.pasternFRTransform, -Math.PI/1.2);

        this.hoofFRTransform = mat4.create();
        moveRight = vec3.fromValues (0, .13, 0);
        moveForward = vec3.fromValues (.05, 0, 0);
        mat4.translate (this.hoofFRTransform, this.hoofFRTransform, moveRight);
        mat4.translate (this.hoofFRTransform, this.hoofFRTransform, moveForward);

        /*Front Left Leg*/
        this.sholderRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .284);
        moveRight = vec3.fromValues (0, .11, 0);
        moveBackward = vec3.fromValues (-.022, 0, 0);
        mat4.translate (this.sholderRTransform, this.sholderRTransform, moveUp);
        mat4.translate (this.sholderRTransform, this.sholderRTransform, moveRight);
        mat4.translate (this.sholderRTransform, this.sholderRTransform, moveBackward);

        this.forearmLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .182);
        moveRight = vec3.fromValues (0, .11, 0);
        moveBackward = vec3.fromValues (-.05, 0, 0);
        mat4.translate (this.forearmLTransform, this.forearmLTransform, moveUp);
        mat4.translate (this.forearmLTransform, this.forearmLTransform, moveRight);
        mat4.translate (this.forearmLTransform, this.forearmLTransform, moveBackward);

        this.kneeFLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .112);
        moveRight = vec3.fromValues (0, .11, 0);
        moveBackward = vec3.fromValues (-.05, 0, 0);
        mat4.translate (this.kneeFLTransform, this.kneeFLTransform, moveUp);
        mat4.translate (this.kneeFLTransform, this.kneeFLTransform, moveRight);
        mat4.translate (this.kneeFLTransform, this.kneeFLTransform, moveBackward);

        this.cannonFLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .112);
        moveRight = vec3.fromValues (0, .11, 0);
        moveBackward = vec3.fromValues (-.05, 0, 0);
        mat4.translate (this.cannonFLTransform, this.cannonFLTransform, moveUp);
        mat4.translate (this.cannonFLTransform, this.cannonFLTransform, moveRight);
        mat4.translate (this.cannonFLTransform, this.cannonFLTransform, moveBackward);

        this.fetlockFLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .032);
        moveRight = vec3.fromValues (0, .11, 0);
        moveBackward = vec3.fromValues (-.05, 0, 0);
        mat4.translate (this.fetlockFLTransform, this.fetlockFLTransform, moveUp);
        mat4.translate (this.fetlockFLTransform, this.fetlockFLTransform, moveRight);
        mat4.translate (this.fetlockFLTransform, this.fetlockFLTransform, moveBackward);

        this.pasternFLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .018);
        moveRight = vec3.fromValues (0, .12, 0);
        moveBackward = vec3.fromValues (-.05, 0, 0);
        mat4.translate (this.pasternFLTransform, this.pasternFLTransform, moveUp);
        mat4.translate (this.pasternFLTransform, this.pasternFLTransform, moveRight);
        mat4.translate (this.pasternFLTransform, this.pasternFLTransform, moveBackward);
        mat4.rotateX(this.pasternFLTransform, this.pasternFLTransform, -Math.PI/1.2);

        this.hoofFLTransform = mat4.create();
        moveRight = vec3.fromValues (0, .13, 0);
        moveBackward = vec3.fromValues (-.05, 0, 0);
        mat4.translate (this.hoofFLTransform, this.hoofFLTransform, moveRight);
        mat4.translate (this.hoofFLTransform, this.hoofFLTransform, moveBackward);

        /*Back Right Legs*/
        this.hipRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .282);
        moveLeft = vec3.fromValues (0, -.1, 0);
        moveForward = vec3.fromValues (.026, 0, 0);
        mat4.translate (this.hipRTransform, this.hipRTransform, moveUp);
        mat4.translate (this.hipRTransform, this.hipRTransform, moveLeft);
        mat4.translate (this.hipRTransform, this.hipRTransform, moveForward);

        this.stifleRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .2);
        moveLeft = vec3.fromValues (0, -.1, 0);
        moveForward = vec3.fromValues (.026, 0, 0);
        mat4.translate (this.stifleRTransform, this.stifleRTransform, moveUp);
        mat4.translate (this.stifleRTransform, this.stifleRTransform, moveLeft);
        mat4.translate (this.stifleRTransform, this.stifleRTransform, moveForward);

        /*Back Left Leg*/
        this.hipLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .282);
        moveLeft = vec3.fromValues (0, -.1, 0);
        moveBackward = vec3.fromValues (-.026, 0, 0);
        mat4.translate (this.hipLTransform, this.hipLTransform, moveUp);
        mat4.translate (this.hipLTransform, this.hipLTransform, moveLeft);
        mat4.translate (this.hipLTransform, this.hipLTransform, moveBackward);

        this.stifleLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .2);
        moveLeft = vec3.fromValues (0, -.1, 0);
        moveBackward = vec3.fromValues (-.026, 0, 0);
        mat4.translate (this.stifleLTransform, this.stifleLTransform, moveUp);
        mat4.translate (this.stifleLTransform, this.stifleLTransform, moveLeft);
        mat4.translate (this.stifleLTransform, this.stifleLTransform, moveBackward);

        this.tmp = mat4.create();
    }

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul (this.tmp, coordFrame, this.barrelTransform);
        this.barrel.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.rearTransform);
        this.rear.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.chestTransform);
        this.chest.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.neckTransform);
        this.neck.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.cheekTransform);
        this.cheek.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.bridgeTransform);
        this.bridge.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.muzzleTransform);
        this.muzzle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.eyeRTransform);
        this.eye.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.eyeLTransform);
        this.eye.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        /*Front Right Leg*/
        mat4.mul (this.tmp, coordFrame, this.sholderRTransform);
        this.sholder.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.forearmFRTransform);
        this.forearm.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.kneeFRTransform);
        this.knee.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.cannonFRTransform);
        this.cannon.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.fetlockFRTransform);
        this.fetlock.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.pasternFRTransform);
        this.pastern.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.hoofFRTransform);
        this.hoof.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        /*Front Left Leg*/
        mat4.mul (this.tmp, coordFrame, this.sholderFLTransform);
        this.sholder.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.forearmLTransform);
        this.forearm.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.kneeFLTransform);
        this.knee.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.cannonFLTransform);
        this.cannon.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.fetlockFLTransform);
        this.fetlock.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.pasternFLTransform);
        this.pastern.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.hoofFLTransform);
        this.hoof.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        /*Back Right Leg*/
        mat4.mul (this.tmp, coordFrame, this.hipRTransform);
        this.hip.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
        mat4.mul (this.tmp, coordFrame, this.stifleRTransform);
        this.stifle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        /*Back Left Leg*/
        mat4.mul (this.tmp, coordFrame, this.hipLTransform);
        this.hip.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.stifleLTransform);
        this.stifle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
    }
}