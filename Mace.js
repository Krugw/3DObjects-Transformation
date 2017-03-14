/**
 * Created by Anthony on 3/13/2017.
 */
class Mace {
    constructor(gl) {
        {
            this.magenta = vec3.fromValues(0xCC/255, 0x00/255, 0x66/255);
            this.red = vec3.fromValues(0x99/255, 0x00/255, 0x00/255);
            this.burnt = vec3.fromValues(0x66/255, 0x33/255, 0x00/255);
            this.grey = vec3.fromValues(0x80/255, 0x80/255, 0x80/255);



            this.hilt = new UniSphere(gl, .2, 1, this.magenta, this.magenta);
            this.hiltTrans = mat4.create();
            let hMove = vec3.fromValues(0,0,-1.15);
            let vec = vec3.fromValues(0.18, 0.18, 0.18);
            mat4.scale(this.hiltTrans, this.hiltTrans, vec);
            mat4.translate(this.hiltTrans, this.hiltTrans, hMove);

            this.handle = new Cylinder(gl, .2,.2, 4, 20, this.burnt, this.burnt, this.burnt);
            this.handleTrans = mat4.create();
            let hanVec = vec3.fromValues(0.1, 0.1, 0.1);
            mat4.scale(this.handleTrans, this.handleTrans, hanVec);

            this.tip = new UniSphere(gl, .7, 4, this.grey, this.grey);
            this.tipTrans = mat4.create();
            let tipV = vec3.fromValues(.1, .1, .1);
            let tipMove = vec3.fromValues(0, 0, 2.3);
            mat4.scale(this.tipTrans, this.tipTrans, tipV);
            mat4.translate(this.tipTrans, this.tipTrans, tipMove);

            this.spike = new Cylinder(gl, 0, .1, .3, 10, this.red, this.red, this.red);
            this.sTrans = mat4.create();
            let sV = vec3.fromValues(.1, .2, .1);
            let sMove = vec3.fromValues(0,.34, 2.3);
            mat4.scale(this.sTrans, this.sTrans, sV);
            mat4.translate(this.sTrans, this.sTrans, sMove);

            this.spike2 = new Cylinder(gl, 0, .1, .3, 10, this.red, this.red, this.red);
            this.sTrans2 = mat4.create();
            let sV2 = vec3.fromValues(.2, .1, .1);
            let sMove2 = vec3.fromValues(.35,0, 2.3);
            mat4.scale(this.sTrans2, this.sTrans2, sV2);
            mat4.translate(this.sTrans2, this.sTrans2, sMove2);

            this.spike3 = new Cylinder(gl, 0, .1, .3, 10, this.red, this.red,this.red);
            this.sTrans3 = mat4.create();
            let sV3 = vec3.fromValues(.2, .1, .1);
            let sMove3 = vec3.fromValues(0,0, 3.1);
            mat4.scale(this.sTrans3, this.sTrans3, sV3);
            mat4.translate(this.sTrans3, this.sTrans3, sMove3);

            this.spike4 = new Cylinder(gl, 0, .1, .3, 10, this.red, this.red, this.red);
            this.sTrans4 = mat4.create();
            let sV4 = vec3.fromValues(.2, .1, .1);
            let sMove4 = vec3.fromValues(-.33,-.33, 2.3);
            mat4.scale(this.sTrans4, this.sTrans4, sV4);
            mat4.translate(this.sTrans4, this.sTrans4, sMove4);

            this.spike5 = new Cylinder(gl, 0, .1, .3, 10, this.red, this.red, this.red);
            this.sTrans5 = mat4.create();
            let sV5 = vec3.fromValues(.2, .3, .1);
            let sMove5 = vec3.fromValues(0,-.2, 2.3);
            mat4.scale(this.sTrans5, this.sTrans5, sV5);
            mat4.translate(this.sTrans5, this.sTrans5, sMove5);

            this.spike6 = new Cylinder(gl, 0, .1, .3, 10, this.red, this.red, this.red);
            this.sTrans6 = mat4.create();
            let sV6 = vec3.fromValues(.3, .1, .1);
            let sMove6 = vec3.fromValues(-.16,.2, 2.7);
            mat4.scale(this.sTrans6, this.sTrans6, sV6);
            mat4.translate(this.sTrans6, this.sTrans6, sMove6);

            this.spike7 = new Cylinder(gl, 0, .1, .3, 10, this.red, this.red, this.red);
            this.sTrans7 = mat4.create();
            let sV7 = vec3.fromValues(.3, .1, .1);
            let sMove7 = vec3.fromValues(.16,.2, 2.7);
            mat4.scale(this.sTrans7, this.sTrans7, sV7);
            mat4.translate(this.sTrans7, this.sTrans7, sMove7);

            this.spike8 = new Cylinder(gl, 0, .1, .3, 10, this.red, this.red, this.red);
            this.sTrans8 = mat4.create();
            let sV8 = vec3.fromValues(.3, .1, .1);
            let sMove8 = vec3.fromValues(.16,-.2, 2.7);
            mat4.scale(this.sTrans8, this.sTrans8, sV8);
            mat4.translate(this.sTrans8, this.sTrans8, sMove8);

            this.spike9 = new Cylinder(gl, 0, .1, .3, 10, this.red, this.red, this.red);
            this.sTrans9 = mat4.create();
            let sV9 = vec3.fromValues(.3, .1, .1);
            let sMove9 = vec3.fromValues(-.16,-.2, 2.7);
            mat4.scale(this.sTrans9, this.sTrans9, sV9);
            mat4.translate(this.sTrans9, this.sTrans9, sMove9);
        }
        this.temp = mat4.create();

    }
    draw (vertexAttr, colAttr, modelUniform, coordFrame) {
        {
            mat4.mul(this.temp, coordFrame, this.hiltTrans);
            this.hilt.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.handleTrans);
            this.handle.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.tipTrans);
            this.tip.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.sTrans);
            this.spike.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.sTrans2);
            this.spike2.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.sTrans3);
            this.spike3.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.sTrans4);
            this.spike4.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.sTrans5);
            this.spike5.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.sTrans6);
            this.spike6.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.sTrans7);
            this.spike7.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.sTrans8);
            this.spike8.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.sTrans9);
            this.spike9.draw(vertexAttr, colAttr, modelUniform, this.temp);



        }
    }
}