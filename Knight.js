class Knight {
    constructor (gl) {
        this.grey = vec3.fromValues(0x80/255, 0x80/255, 0x80/255);
        this.darkgrey = vec3.fromValues(0x50/255, 0x50/255, 0x50/255);
        this.darkergrey = vec3.fromValues(0x30/255, 0x30/255, 0x30/255);
        this.skin1 = vec3.fromValues(0xff/255, 0x59/255, 0x59/255);
        this.skin2 = vec3.fromValues(0xFF/255, 0xC5/255, 0x6C/255);

        //Chestplate
        this.core = new Cube(gl, 1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.coreTrans = mat4.create();
        //let moveUp = vec3.fromValues (0, .5, 1.0);
        let thin = vec3.fromValues(1.0, 0.3, 1.0);
        mat4.scale(this.coreTrans, this.coreTrans, thin);

        this.frontTop = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.frontTopT = mat4.create();
        let moveUp = vec3.fromValues(0, .22, .36);
        mat4.translate(this.frontTopT, this.frontTopT, moveUp);
        mat4.rotateX(this.frontTopT, this.frontTopT, Math.PI / 4);
        mat4.scale(this.frontTopT, this.frontTopT, vec3.fromValues(9.999, 1, 3));

        this.frontBottom = new Cube(gl, 1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.frontBottomT = mat4.create();
        mat4.rotateX(this.frontBottomT, this.frontBottomT, -Math.PI / 13);
        mat4.scale(this.frontBottomT, this.frontBottomT, vec3.fromValues(.999, .21, .8));
        mat4.translate(this.frontBottomT, this.frontBottomT, vec3.fromValues(0, .8, -.04));

        this.fauld1 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.fauld1T = mat4.create();
        mat4.rotateX(this.fauld1T, this.fauld1T, Math.PI / 6);
        mat4.translate(this.fauld1T, this.fauld1T, vec3.fromValues(.3, -.1, -.55));
        mat4.scale(this.fauld1T, this.fauld1T, vec3.fromValues(3.9, .5, 3));

        this.fauld2 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.fauld2T = mat4.create();
        mat4.rotateX(this.fauld2T, this.fauld2T, Math.PI / 6);
        mat4.translate(this.fauld2T, this.fauld2T, vec3.fromValues(-.3, -.1, -.55));
        mat4.scale(this.fauld2T, this.fauld2T, vec3.fromValues(3.9, .5, 3));

        this.fauld3 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.fauld3T = mat4.create();
        mat4.rotateX(this.fauld3T, this.fauld3T, -Math.PI / 6);
        mat4.translate(this.fauld3T, this.fauld3T, vec3.fromValues(-.3, .12, -.55));
        mat4.scale(this.fauld3T, this.fauld3T, vec3.fromValues(3.9, .5, 3));

        this.fauld4 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.fauld4T = mat4.create();
        mat4.rotateX(this.fauld4T, this.fauld4T, -Math.PI / 6);
        mat4.translate(this.fauld4T, this.fauld4T, vec3.fromValues(.3, .12, -.55));
        mat4.scale(this.fauld4T, this.fauld4T, vec3.fromValues(3.9, .5, 3));

        this.fauld5 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.fauld5T = mat4.create();
        mat4.rotateZ(this.fauld5T, this.fauld5T, -Math.PI / 2);
        mat4.rotateX(this.fauld5T, this.fauld5T, Math.PI / 6);
        mat4.translate(this.fauld5T, this.fauld5T, vec3.fromValues(0, .18, -.8));
        mat4.scale(this.fauld5T, this.fauld5T, vec3.fromValues(2.5, .5, 2.3));

        this.fauld6 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.fauld6T = mat4.create();
        mat4.rotateZ(this.fauld6T, this.fauld6T, -Math.PI / 2);
        mat4.rotateX(this.fauld6T, this.fauld6T, -Math.PI / 6);
        mat4.translate(this.fauld6T, this.fauld6T, vec3.fromValues(0, -.18, -.8));
        mat4.scale(this.fauld6T, this.fauld6T, vec3.fromValues(2.5, .5, 2.3));

        this.shoulder1 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.shoulder1T = mat4.create();
        mat4.rotateZ(this.shoulder1T, this.shoulder1T, Math.PI / 2);
        mat4.rotateX(this.shoulder1T, this.shoulder1T, Math.PI / 6);
        mat4.translate(this.shoulder1T, this.shoulder1T, vec3.fromValues(0, .9, -.02));
        mat4.scale(this.shoulder1T, this.shoulder1T, vec3.fromValues(2.5, .5, 2.3));

        this.shoulder2 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.shoulder2T = mat4.create();
        mat4.translate(this.shoulder2T, this.shoulder2T, vec3.fromValues(-.6, 0, .5));
        mat4.scale(this.shoulder2T, this.shoulder2T, vec3.fromValues(2.3, 2.8, .5));

        this.shoulder3 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.shoulder3T = mat4.create();
        mat4.translate(this.shoulder3T, this.shoulder3T, vec3.fromValues(.6, 0, .5));
        mat4.scale(this.shoulder3T, this.shoulder3T, vec3.fromValues(2.3, 2.8, .5));

        this.shoulder4 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.shoulder4T = mat4.create();
        mat4.rotateZ(this.shoulder4T, this.shoulder4T, Math.PI / 2);
        mat4.rotateX(this.shoulder4T, this.shoulder4T, -Math.PI / 6);
        mat4.translate(this.shoulder4T, this.shoulder4T, vec3.fromValues(0, -.9, -.02));
        mat4.scale(this.shoulder4T, this.shoulder4T, vec3.fromValues(2.5, .5, 2.3));

        this.shoulder5 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.shoulder5T = mat4.create();
        mat4.rotateX(this.shoulder5T, this.shoulder5T, -Math.PI / 3);
        mat4.translate(this.shoulder5T, this.shoulder5T, vec3.fromValues(.625, -.245, .4));
        mat4.scale(this.shoulder5T, this.shoulder5T, vec3.fromValues(2.3, 2.8, .5));

        this.shoulder6 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.shoulder6T = mat4.create();
        mat4.rotateX(this.shoulder6T, this.shoulder6T, -Math.PI / 3);
        mat4.translate(this.shoulder6T, this.shoulder6T, vec3.fromValues(-.625, -.245, .4));
        mat4.scale(this.shoulder6T, this.shoulder6T, vec3.fromValues(2.3, 2.8, .5));

        this.shoulder7 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.shoulder7T = mat4.create();
        mat4.rotateX(this.shoulder7T, this.shoulder7T, Math.PI / 3);
        mat4.translate(this.shoulder7T, this.shoulder7T, vec3.fromValues(-.625, .245, .4));
        mat4.scale(this.shoulder7T, this.shoulder7T, vec3.fromValues(2.3, 2.8, .5));

        this.shoulder8 = new Cube(gl, .1, 2, this.grey, this.darkgrey, this.darkergrey);
        this.shoulder8T = mat4.create();
        mat4.rotateX(this.shoulder8T, this.shoulder8T, Math.PI / 3);
        mat4.translate(this.shoulder8T, this.shoulder8T, vec3.fromValues(.625, .245, .4));
        mat4.scale(this.shoulder8T, this.shoulder8T, vec3.fromValues(2.3, 2.8, .5));

        //Arms
        this.shoulderBall = new UniSphere(gl, .15, 5, this.skin1, this.skin2);
        this.shoulderBallT = mat4.create();
        mat4.translate(this.shoulderBallT, this.shoulderBallT, vec3.fromValues(.65,0,.35));

        this.shoulderBall2 = new UniSphere(gl, .15, 5, this.skin1, this.skin2);
        this.shoulderBall2T = mat4.create();
        mat4.translate(this.shoulderBall2T, this.shoulderBall2T, vec3.fromValues(-.65,0,.35));

        this.arm = new Cylinder(gl, .14, .14, .5, 10, this.skin1, this.skin2);
        this.armT = mat4.create();
        mat4.translate(this.armT, this.armT, vec3.fromValues(-.75, 0, .05));
        mat4.rotateY(this.armT, this.armT, Math.PI/12);

        this.arm2 = new Cylinder(gl, .14, .14, .5, 10, this.skin1, this.skin2);
        this.arm2T = mat4.create();
        mat4.translate(this.arm2T, this.arm2T, vec3.fromValues(.75, 0, .05));
        mat4.rotateY(this.arm2T, this.arm2T, -Math.PI/12);

        this.elbow = new UniSphere(gl, .15, 5, this.skin1, this.skin2);
        this.elbowT = mat4.create();
        mat4.translate(this.elbowT, this.elbowT, vec3.fromValues(.83, 0, -.3));

        this.elbow2 = new UniSphere(gl, .15, 5, this.skin1, this.skin2);
        this.elbow2T = mat4.create();
        mat4.translate(this.elbow2T, this.elbow2T, vec3.fromValues(-.83, 0, -.3));

        this.arm3 = new Cylinder(gl, .14, .14, .5, 10, this.skin1, this.skin2);
        this.arm3T = mat4.create();
        mat4.translate(this.arm3T, this.arm3T, vec3.fromValues(-.83, .1, -.6));
        mat4.rotateX(this.arm3T, this.arm3T, Math.PI/12);

        this.arm4 = new Cylinder(gl, .14, .14, .5, 10, this.skin1, this.skin2);
        this.arm4T = mat4.create();
        mat4.translate(this.arm4T, this.arm4T, vec3.fromValues(.83, .1, -.6));
        mat4.rotateX(this.arm4T, this.arm4T, Math.PI/12);

        this.hand = new UniSphere(gl, .15, 5, this.skin1, this.skin2);
        this.handT = mat4.create();
        mat4.translate(this.handT, this.handT, vec3.fromValues(.83, .2, -.95));

        this.hand2 = new UniSphere(gl, .15, 5, this.skin1, this.skin2);
        this.hand2T = mat4.create();
        mat4.translate(this.hand2T, this.hand2T, vec3.fromValues(-.83, .2, -.95));

        //Head
        this.neck = new Torus(gl, .15, .08, 10, 10, this.grey, this.darkgrey);
        this.neckT = mat4.create();
        mat4.translate(this.neckT, this.neckT, vec3.fromValues(0,.03,.52));
        mat4.rotateX(this.neckT, this.neckT, -Math.PI/14);

        this.neck2 = new Cylinder(gl, .12, .12, .2, 10, this.skin1, this.skin);
        this.neck2T = mat4.create();
        mat4.translate(this.neck2T, this.neck2T, vec3.fromValues(0,.03,.65));

        this.head = new UniSphere(gl, .25, 6, this.grey, this.darkgrey);
        this.headT = mat4.create();
        mat4.translate(this.headT, this.headT, vec3.fromValues(0,.03,.88));
        mat4.scale(this.headT, this.headT, vec3.fromValues(1,1,1.15));

        this.mohawk = new Cylinder(gl, .25, .25, .05, 20, this.grey, this.darkgrey, this.darkergrey);
        this.mohawkT = mat4.create();
        mat4.translate(this.mohawkT, this.mohawkT, vec3.fromValues(0,-.05,1));
        mat4.rotateY(this.mohawkT, this.mohawkT, Math.PI/2);

        this.thigh = new Cylinder(gl, .18, .18, 1.1, 10, this.grey, this.darkgrey);
        this.thighT = mat4.create();
        mat4.translate(this.thighT, this.thighT, vec3.fromValues(-.3,.08,-1.1));
        mat4.rotateX(this.thighT, this.thighT, Math.PI/35);

        this.thigh2 = new Cylinder(gl, .18, .18, 1.1, 10, this.grey, this.darkgrey);
        this.thigh2T = mat4.create();
        mat4.translate(this.thigh2T, this.thigh2T, vec3.fromValues(.3,0,-1.1));

        this.knee = new UniSphere(gl, .17, 5, this.grey, this.darkergrey);
        this.kneeT = mat4.create();
        mat4.translate(this.kneeT, this.kneeT, vec3.fromValues(-.3,.14, -1.75));

        this.knee2 = new UniSphere(gl, .17, 5, this.grey, this.darkergrey);
        this.knee2T = mat4.create();
        mat4.translate(this.knee2T, this.knee2T, vec3.fromValues(.3,0, -1.75));

        this.leg = new Cylinder(gl, .18, .17, 1.1, 10, this.grey, this.darkergrey);
        this.legT = mat4.create();
        mat4.translate(this.legT, this.legT, vec3.fromValues(.3,0,-2.4));

        this.leg2 = new Cylinder(gl, .18, .17, 1.1, 10, this.grey, this.darkergrey);
        this.leg2T = mat4.create();
        mat4.translate(this.leg2T, this.leg2T, vec3.fromValues(-.3,.14,-2.4));

        this.ankle = new UniSphere(gl, .17, 5, this.grey, this.darkgrey);
        this.ankleT = mat4.create();
        mat4.translate(this.ankleT, this.ankleT, vec3.fromValues(-.3,.14, -3.05));

        this.ankle2 = new UniSphere(gl, .17, 5, this.grey, this.darkgrey);
        this.ankle2T = mat4.create();
        mat4.translate(this.ankle2T, this.ankle2T, vec3.fromValues(.3,0, -3.05));

        this.boot = new Cylinder(gl, .11, .15, .4, 10, this.darkgrey, this.darkergrey);
        this.bootT = mat4.create();
        mat4.translate(this.bootT, this.bootT, vec3.fromValues(-.3, .45, -3.05));
        mat4.rotateX(this.bootT, this.bootT, -Math.PI/2);

        this.boot2 = new Cylinder(gl, .11, .15, .4, 10, this.darkgrey, this.darkergrey);
        this.boot2T = mat4.create();
        mat4.translate(this.boot2T, this.boot2T, vec3.fromValues(.3, .32, -3.05));
        mat4.rotateX(this.boot2T, this.boot2T, -Math.PI/2);

        this.boot3 = new Cylinder(gl, .21, .18, .4, 10, this.darkgrey, this.darkergrey);
        this.boot3T = mat4.create();
        mat4.translate(this.boot3T, this.boot3T, vec3.fromValues(.3, 0, -2.8)); //grey

        this.boot4 = new Cylinder(gl, .21, .18, .4, 10, this.darkgrey, this.darkergrey);
        this.boot4T = mat4.create();
        mat4.translate(this.boot4T, this.boot4T, vec3.fromValues(-.3, .14, -2.8)); //grey




        this.temp = mat4.create();

    }

    draw (vertexAttr, colAttr, modelUniform, coordFrame) {
        //Chestplate
        {
            mat4.mul(this.temp, coordFrame, this.coreTrans);
            this.core.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.frontTopT);
            this.frontTop.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.frontBottomT);
            this.frontBottom.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.fauld1T);
            this.fauld1.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.fauld2T);
            this.fauld2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.fauld3T);
            this.fauld3.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.fauld4T);
            this.fauld4.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.fauld5T);
            this.fauld5.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.fauld6T);
            this.fauld6.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.shoulder1T);
            this.shoulder1.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.shoulder2T);
            this.shoulder2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.shoulder3T);
            this.shoulder3.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.shoulder4T);
            this.shoulder4.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.shoulder5T);
            this.shoulder5.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.shoulder6T);
            this.shoulder6.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.shoulder7T);
            this.shoulder7.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.shoulder8T);
            this.shoulder8.draw(vertexAttr, colAttr, modelUniform, this.temp);
        }

        //Arms
        {
            mat4.mul (this.temp, coordFrame, this.shoulderBallT);
            this.shoulderBall.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.shoulderBall2T);
            this.shoulderBall2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.armT);
            this.arm.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.arm2T);
            this.arm2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.elbowT);
            this.elbow.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.elbow2T);
            this.elbow2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.arm3T);
            this.arm3.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.arm3T);
            this.arm3.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.arm4T);
            this.arm4.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.handT);
            this.hand.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.hand2T);
            this.hand2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.neckT);
            this.neck.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.neck2T);
            this.neck2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.headT);
            this.head.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.mohawkT);
            this.mohawk.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.thighT);
            this.thigh.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.thigh2T);
            this.thigh2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.kneeT);
            this.knee.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.knee2T);
            this.knee2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.legT);
            this.leg.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.leg2T);
            this.leg2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.ankleT);
            this.ankle.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.ankle2T);
            this.ankle2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.bootT);
            this.boot.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.boot2T);
            this.boot2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.boot3T);
            this.boot3.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul (this.temp, coordFrame, this.boot4T);
            this.boot4.draw(vertexAttr, colAttr, modelUniform, this.temp);



        }
    }
}
