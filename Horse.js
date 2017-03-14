/**
 * Created by emilypeterson on 3/7/17.
 */
class Horse {
    constructor (gl) {
        this.gray = vec3.fromValues(0xCC/255, 0xCC/255, 0xCC/255);
        this.white = vec3.fromValues(0xF7/255, 0xF4/255, 0xF2/255);
        this.silver = vec3.fromValues(0xE5/255, 0xE2/255, 0xE0/255);
        this.blue = vec3.fromValues(0x0A/255, 0x7D/255, 0xAF/255);
        this.darkBlue = vec3.fromValues(0x03/255, 0x2D/255, 0x3F/255);
        this.darkGray = vec3.fromValues(0x29/255, 0x27/255, 0x25/255);
        this.barrel = new Cylinder(gl, .06, .065, .2, 20, this.white, this.silver);
        this.rear = new UniSphere(gl, .07, 4, this.white, this.silver);
        this.tail1 = new Cylinder(gl, .007, .008, .016, 20, this.gray, this.darkGray);
        this.tail2 = new Cylinder(gl, .009, .008, .016, 20, this.gray, this.darkGray);
        this.tail3 = new Cylinder(gl, .013, .009, .016, 20, this.gray, this.darkGray);
        this.tail4 = new Cylinder(gl, .013, .011, .02, 20, this.gray, this.darkGray);
        this.tail5 = new Cylinder(gl, .019, .013, .17, 20, this.gray, this.darkGray);
        this.chest = new UniSphere(gl, .07, 4, this.gray, this.silver);
        this.neck = new Cylinder(gl, .04, .06, .18, 20, this.white, this.silver);
        this.mane = new Cylinder(gl, .01, .01, .2, 20, this.gray, this.darkGray);
        this.forlock = new UniSphere(gl, .01, 4, this.gray, this.darkGray);
        //this.maneBraid = new UniSphere(gl, .008, 4, 30, 10);
        this.cheek = new UniSphere(gl, .05, 4, this.white, this.silver);
        this.bridge = new Cylinder(gl, .022, .040, .08, 20, this.white, this.silver);
        this.muzzle = new UniSphere(gl, .022, 4, this.white, this.silver);
        this.nostril = new UniSphere(gl, .008, 4, 30, 10);
        this.eye = new UniSphere(gl, .008, 4, this.darkBlue, this.blue);
        this.ear = new Cone(gl, .016, .05, 4, 4, this.white, this.silver);
        this.sholder = new UniSphere(gl, .059, 4, this.white, this.silver);
        this.hip = new UniSphere(gl, .065, 4, this.white, this.silver);
        this.thigh = new Cylinder(gl, .055, .021, .07, 20, this.white, this.silver);
        this.forearm = new Cylinder(gl, .03, .01, .15, 20, this.white, this.silver);
        this.gaskin = new Cylinder(gl, .019, .01, .11, 20, this.white, this.silver);
        this.knee = new UniSphere(gl, .012, 4, this.white, this.silver);
        this.hock = new UniSphere(gl, .012, 4, this.white, this.silver);
        this.cannon = new Cylinder(gl, .01, .01, .07, 20, this.white, this.silver);
        this.fetlock = new UniSphere(gl, .01, 4, this.white, this.silver);
        this.pastern = new Cylinder(gl, .008, .008, .03, 20, this.white, this.silver);
        this.hoof = new Cylinder(gl, .008, .014, .016, 20, this.silver, this.darkGray);

        this.barrelTransform = mat4.create();
        let moveUp = vec3.fromValues (0, 0, .291);
        mat4.translate (this.barrelTransform, this.barrelTransform, moveUp);
        mat4.rotateX(this.barrelTransform, this.barrelTransform, Math.PI/2.1);

        this.rearTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .291);
        mat4.translate (this.rearTransform, this.rearTransform, moveUp);
        let moveLeft = vec3.fromValues (0, -.1, 0);
        mat4.translate (this.rearTransform, this.rearTransform, moveLeft);

        this.tail1Transform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .34);
        moveLeft = vec3.fromValues (0, -.145, 0);
        mat4.translate (this.tail1Transform, this.tail1Transform, moveUp);
        mat4.translate (this.tail1Transform, this.tail1Transform, moveLeft);
        mat4.rotateX(this.tail1Transform, this.tail1Transform, Math.PI/1.6);

        this.tail2Transform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .332);
        moveLeft = vec3.fromValues (0, -.157, 0);
        mat4.translate (this.tail2Transform, this.tail2Transform, moveUp);
        mat4.translate (this.tail2Transform, this.tail2Transform, moveLeft);
        mat4.rotateX(this.tail2Transform, this.tail2Transform, Math.PI/1.4);

        this.tail3Transform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .32);
        moveLeft = vec3.fromValues (0, -.164, 0);
        mat4.translate (this.tail3Transform, this.tail3Transform, moveUp);
        mat4.translate (this.tail3Transform, this.tail3Transform, moveLeft);
        mat4.rotateX(this.tail3Transform, this.tail3Transform, Math.PI/1.1);

        this.tail4Transform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .31);
        moveLeft = vec3.fromValues (0, -.169, 0);
        mat4.translate (this.tail4Transform, this.tail4Transform, moveUp);
        mat4.translate (this.tail4Transform, this.tail4Transform, moveLeft);
        mat4.rotateX(this.tail4Transform, this.tail4Transform, Math.PI/1.09);

        this.tail5Transform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .22);
        moveLeft = vec3.fromValues (0, -.184, 0);
        mat4.translate (this.tail5Transform, this.tail5Transform, moveUp);
        mat4.translate (this.tail5Transform, this.tail5Transform, moveLeft);
        mat4.rotateX(this.tail5Transform, this.tail5Transform, Math.PI/1.05);

        this.chestTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .291);
        let moveRight = vec3.fromValues (0, .1, 0);
        mat4.translate (this.chestTransform, this.chestTransform, moveUp);
        mat4.translate (this.chestTransform, this.chestTransform, moveRight);

        this.neckTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .392);
        moveRight = vec3.fromValues (0, .16, 0);
        mat4.translate (this.neckTransform, this.neckTransform, moveUp);
        mat4.translate (this.neckTransform, this.neckTransform, moveRight);
        mat4.rotateX(this.neckTransform, this.neckTransform, -Math.PI/7);

        this.maneTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .45);
        moveRight = vec3.fromValues (0, .139, 0);
        mat4.translate (this.maneTransform, this.maneTransform, moveUp);
        mat4.translate (this.maneTransform, this.maneTransform, moveRight);
        mat4.rotateX(this.maneTransform, this.maneTransform, -Math.PI/6);

        this.forlockTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .54);
        moveRight = vec3.fromValues (0, .19, 0);
        mat4.translate (this.forlockTransform, this.forlockTransform, moveUp);
        mat4.translate (this.forlockTransform, this.forlockTransform, moveRight);
        mat4.rotateX(this.forlockTransform, this.forlockTransform, -Math.PI/6);

        this.cheekTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .49);
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

        this.nostrilRTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .454);
        moveRight = vec3.fromValues (0, .326, 0);
        let moveForward = vec3.fromValues (.009, 0, 0);
        mat4.translate (this.nostrilRTransform, this.nostrilRTransform, moveUp);
        mat4.translate (this.nostrilRTransform, this.nostrilRTransform, moveRight);
        mat4.translate (this.nostrilRTransform, this.nostrilRTransform, moveForward);

        this.nostrilLTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .454);
        moveRight = vec3.fromValues (0, .326, 0);
        let moveBackward = vec3.fromValues (-.009, 0, 0);
        mat4.translate (this.nostrilLTransform, this.nostrilLTransform, moveUp);
        mat4.translate (this.nostrilLTransform, this.nostrilLTransform, moveRight);
        mat4.translate (this.nostrilLTransform, this.nostrilLTransform, moveBackward);

        this.eyeRTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .512);
        moveRight = vec3.fromValues (0, .24, 0);
        moveForward = vec3.fromValues (.028, 0, 0);
        mat4.translate (this.eyeRTransform, this.eyeRTransform, moveUp);
        mat4.translate (this.eyeRTransform, this.eyeRTransform, moveRight);
        mat4.translate (this.eyeRTransform, this.eyeRTransform, moveForward);

        this.eyeLTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .512);
        moveRight = vec3.fromValues (0, .24, 0);
        moveBackward = vec3.fromValues (-.028, 0, 0);
        mat4.translate (this.eyeLTransform, this.eyeLTransform, moveUp);
        mat4.translate (this.eyeLTransform, this.eyeLTransform, moveRight);
        mat4.translate (this.eyeLTransform, this.eyeLTransform, moveBackward);

        this.earRTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .52);
        moveRight = vec3.fromValues (0, .2, 0);
        moveForward = vec3.fromValues (.026, 0, 0);
        mat4.translate (this.earRTransform, this.earRTransform, moveUp);
        mat4.translate (this.earRTransform, this.earRTransform, moveRight);
        mat4.translate (this.earRTransform, this.earRTransform, moveForward);
        mat4.rotateX(this.earRTransform, this.earRTransform, -Math.PI/8);

        this.earLTransform = mat4.create();
        moveUp = vec3.fromValues (0, 0, .52);
        moveRight = vec3.fromValues (0, .2, 0);
        moveBackward = vec3.fromValues (-.026, 0, 0);
        mat4.translate (this.earLTransform, this.earLTransform, moveUp);
        mat4.translate (this.earLTransform, this.earLTransform, moveRight);
        mat4.translate (this.earLTransform, this.earLTransform, moveBackward);
        mat4.rotateX(this.earLTransform, this.earLTransform, -Math.PI/8);

        /*Front Right Leg*/
        this.sholderFLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .284);
        moveRight = vec3.fromValues (0, .11, 0);
        moveForward = vec3.fromValues (.02, 0, 0);
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
        moveUp = vec3.fromValues(0, 0, .072);
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
        moveBackward = vec3.fromValues (-.02, 0, 0);
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
        moveUp = vec3.fromValues(0, 0, .072);
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
        moveUp = vec3.fromValues(0, 0, .29);
        moveLeft = vec3.fromValues (0, -.1, 0);
        moveForward = vec3.fromValues (.017, 0, 0);
        mat4.translate (this.hipRTransform, this.hipRTransform, moveUp);
        mat4.translate (this.hipRTransform, this.hipRTransform, moveLeft);
        mat4.translate (this.hipRTransform, this.hipRTransform, moveForward);

        this.thighRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .23);
        moveLeft = vec3.fromValues (0, -.1, 0);
        moveForward = vec3.fromValues (.027, 0, 0);
        mat4.translate (this.thighRTransform, this.thighRTransform, moveUp);
        mat4.translate (this.thighRTransform, this.thighRTransform, moveLeft);
        mat4.translate (this.thighRTransform, this.thighRTransform, moveForward);
        //mat4.rotateX(this.thighRTransform, this.thighRTransform, -Math.PI/6);

        this.gaskinRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .16);
        moveLeft = vec3.fromValues (0, -.12, 0);
        moveForward = vec3.fromValues (.028, 0, 0);
        mat4.translate (this.gaskinRTransform, this.gaskinRTransform, moveUp);
        mat4.translate (this.gaskinRTransform, this.gaskinRTransform, moveLeft);
        mat4.translate (this.gaskinRTransform, this.gaskinRTransform, moveForward);
        mat4.rotateX(this.gaskinRTransform, this.gaskinRTransform, -Math.PI/6);

        this.hockRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .112);
        moveLeft = vec3.fromValues (0, -.145, 0);
        moveForward = vec3.fromValues (.028, 0, 0);
        mat4.translate (this.hockRTransform, this.hockRTransform, moveUp);
        mat4.translate (this.hockRTransform, this.hockRTransform, moveLeft);
        mat4.translate (this.hockRTransform, this.hockRTransform, moveForward);

        this.cannonRRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .072);
        moveLeft = vec3.fromValues (0, -.145, 0);
        moveForward = vec3.fromValues (.028, 0, 0);
        mat4.translate (this.cannonRRTransform, this.cannonRRTransform, moveUp);
        mat4.translate (this.cannonRRTransform, this.cannonRRTransform, moveLeft);
        mat4.translate (this.cannonRRTransform, this.cannonRRTransform, moveForward);

        this.fetlockRRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .032);
        moveLeft = vec3.fromValues (0, -.145, 0);
        moveForward = vec3.fromValues (.028, 0, 0);
        mat4.translate (this.fetlockRRTransform, this.fetlockRRTransform, moveUp);
        mat4.translate (this.fetlockRRTransform, this.fetlockRRTransform, moveLeft);
        mat4.translate (this.fetlockRRTransform, this.fetlockRRTransform, moveForward);

        this.pasternRRTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .0175);
        moveLeft = vec3.fromValues (0, -.135, 0);
        moveForward = vec3.fromValues (.028, 0, 0);
        mat4.translate (this.pasternRRTransform, this.pasternRRTransform, moveUp);
        mat4.translate (this.pasternRRTransform, this.pasternRRTransform, moveLeft);
        mat4.translate (this.pasternRRTransform, this.pasternRRTransform, moveForward);
        mat4.rotateX(this.pasternRRTransform, this.pasternRRTransform, -Math.PI/1.2);

        this.hoofRRTransform = mat4.create();
        moveLeft = vec3.fromValues (0, -.125, 0);
        moveForward = vec3.fromValues (.028, 0, 0);
        mat4.translate (this.hoofRRTransform, this.hoofRRTransform, moveLeft);
        mat4.translate (this.hoofRRTransform, this.hoofRRTransform, moveForward);

        /*Back Left Leg*/
        this.hipLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .29);
        moveLeft = vec3.fromValues (0, -.1, 0);
        moveBackward = vec3.fromValues (-.017, 0, 0);
        mat4.translate (this.hipLTransform, this.hipLTransform, moveUp);
        mat4.translate (this.hipLTransform, this.hipLTransform, moveLeft);
        mat4.translate (this.hipLTransform, this.hipLTransform, moveBackward);

        this.thighLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .22);
        moveLeft = vec3.fromValues (0, -.1, 0);
        moveBackward = vec3.fromValues (-.027, 0, 0);
        mat4.translate (this.thighLTransform, this.thighLTransform, moveUp);
        mat4.translate (this.thighLTransform, this.thighLTransform, moveLeft);
        mat4.translate (this.thighLTransform, this.thighLTransform, moveBackward);
        //mat4.rotateX(this.thighLTransform, this.thighLTransform, -Math.PI/6);

        this.gaskinLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .16);
        moveLeft = vec3.fromValues (0, -.12, 0);
        moveBackward = vec3.fromValues (-.028, 0, 0);
        mat4.translate (this.gaskinLTransform, this.gaskinLTransform, moveUp);
        mat4.translate (this.gaskinLTransform, this.gaskinLTransform, moveLeft);
        mat4.translate (this.gaskinLTransform, this.gaskinLTransform, moveBackward);
        mat4.rotateX(this.gaskinLTransform, this.gaskinLTransform, -Math.PI/6);

        this.hockLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .112);
        moveLeft = vec3.fromValues (0, -.145, 0);
        moveBackward = vec3.fromValues (-.028, 0, 0);
        mat4.translate (this.hockLTransform, this.hockLTransform, moveUp);
        mat4.translate (this.hockLTransform, this.hockLTransform, moveLeft);
        mat4.translate (this.hockLTransform, this.hockLTransform, moveBackward);
        mat4.rotateX(this.hockLTransform, this.hockLTransform, -Math.PI/6);

        this.cannonRLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .072);
        moveLeft = vec3.fromValues (0, -.145, 0);
        moveBackward = vec3.fromValues (-.028, 0, 0);
        mat4.translate (this.cannonRLTransform, this.cannonRLTransform, moveUp);
        mat4.translate (this.cannonRLTransform, this.cannonRLTransform, moveLeft);
        mat4.translate (this.cannonRLTransform, this.cannonRLTransform, moveBackward);

        this.fetlockRLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .032);
        moveLeft = vec3.fromValues (0, -.145, 0);
        moveBackward = vec3.fromValues (-.028, 0, 0);
        mat4.translate (this.fetlockRLTransform, this.fetlockRLTransform, moveUp);
        mat4.translate (this.fetlockRLTransform, this.fetlockRLTransform, moveLeft);
        mat4.translate (this.fetlockRLTransform, this.fetlockRLTransform, moveBackward);

        this.pasternRLTransform = mat4.create();
        moveUp = vec3.fromValues(0, 0, .018);
        moveLeft = vec3.fromValues (0, -.135, 0);
        moveBackward = vec3.fromValues (-.028, 0, 0);
        mat4.translate (this.pasternRLTransform, this.pasternRLTransform, moveUp);
        mat4.translate (this.pasternRLTransform, this.pasternRLTransform, moveLeft);
        mat4.translate (this.pasternRLTransform, this.pasternRLTransform, moveBackward);
        mat4.rotateX(this.pasternRLTransform, this.pasternRLTransform, -Math.PI/1.2);

        this.hoofRLTransform = mat4.create();
        moveLeft = vec3.fromValues (0, -.125, 0);
        moveBackward = vec3.fromValues (-.028, 0, 0);
        mat4.translate (this.hoofRLTransform, this.hoofRLTransform, moveLeft);
        mat4.translate (this.hoofRLTransform, this.hoofRLTransform, moveBackward);

        this.tmp = mat4.create();
    }

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul (this.tmp, coordFrame, this.barrelTransform);
        this.barrel.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.rearTransform);
        this.rear.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tail1Transform);
        this.tail1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tail2Transform);
        this.tail2.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tail3Transform);
        this.tail3.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tail4Transform);
        this.tail4.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tail5Transform);
        this.tail5.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.chestTransform);
        this.chest.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.neckTransform);
        this.neck.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.maneTransform);
        this.mane.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.forlockTransform);
        this.forlock.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.cheekTransform);
        this.cheek.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.bridgeTransform);
        this.bridge.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.muzzleTransform);
        this.muzzle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.nostrilRTransform);
        this.nostril.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.nostrilLTransform);
        this.nostril.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.eyeRTransform);
        this.eye.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.eyeLTransform);
        this.eye.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.earRTransform);
        this.ear.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.earLTransform);
        this.ear.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

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

        mat4.mul (this.tmp, coordFrame, this.thighRTransform);
        this.thigh.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.gaskinRTransform);
        this.gaskin.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.hockRTransform);
        this.hock.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.cannonRRTransform);
        this.cannon.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.fetlockRRTransform);
        this.fetlock.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.pasternRRTransform);
        this.pastern.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.hoofRRTransform);
        this.hoof.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        /*Back Left Leg*/
        mat4.mul (this.tmp, coordFrame, this.hipLTransform);
        this.hip.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.thighLTransform);
        this.thigh.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.gaskinLTransform);
        this.gaskin.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.hockLTransform);
        this.hock.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.cannonRLTransform);
        this.cannon.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.fetlockRLTransform);
        this.fetlock.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.pasternRLTransform);
        this.pastern.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.hoofRLTransform);
        this.hoof.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
    }
}
