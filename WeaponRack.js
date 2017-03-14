/**
 * Created by Anthony on 3/13/2017.
 */
class WeaponRack {
    constructor(gl) {
        {
            this.brown = vec3.fromValues(0x66/255, 0x33/255, 0x33/255);
            this.lBrown = vec3.fromValues(0x99/255, 0x33/255, 0x33/255);
            this.brown2 = vec3.fromValues(0xAC/255, 0x2E/255, 0x2E/255);



            this.bottom = new Cube(gl, .4, 1, this.brown, this.brown2, this.lBrown);
            this.bottomTrans = mat4.create();
            let bVec = vec3.fromValues(0.1, 4, 0.1);
            let bMove = vec3.fromValues(0,0,0);
            mat4.scale(this.bottomTrans, this.bottomTrans, bVec);
            mat4.translate(this.bottomTrans, this.bottomTrans, bMove);

            this.half = new Cube(gl, .4, 1, this.brown, this.brown2, this.lBrown);
            this.oFTrans = mat4.create();
            let oFVec = vec3.fromValues(0.1, 4, 0.1);
            let oFMove = vec3.fromValues(0,0,2);
            mat4.scale(this.oFTrans, this.oFTrans, oFVec);
            mat4.translate(this.oFTrans, this.oFTrans, oFMove);

            this.top = new Cube(gl, .4, 1, this.brown, this.brown2, this.lBrown);
            this.topTrans = mat4.create();
            let topVec = vec3.fromValues(0.1, 4, 0.1);
            let topMove = vec3.fromValues(0,0,4);
            mat4.scale(this.topTrans, this.topTrans, topVec);
            mat4.translate(this.topTrans, this.topTrans, topMove);

            this.left = new Cylinder(gl, .2,.2, 5, 20, this.brown, this.brown2, this.lBrown);
            this.lTrans = mat4.create();
            let lVec = vec3.fromValues(0.1, 0.1, 0.1);
            let lUp = vec3.fromValues (0, 7, 2);
            mat4.scale(this.lTrans, this.lTrans, lVec);
            mat4.translate(this.lTrans, this.lTrans, lUp);

            this.right = new Cylinder(gl, .2,.2, 5, 20, this.brown, this.brown2, this.lBrown);
            this.rightTrans = mat4.create();
            let rightVec = vec3.fromValues(0.1, 0.1, 0.1);
            let rightUp = vec3.fromValues (0, -7, 2);
            mat4.scale(this.rightTrans, this.rightTrans, rightVec);
            mat4.translate(this.rightTrans, this.rightTrans, rightUp);

            this.mace = new Mace(gl);
            this.maceTrans = mat4.create();
            let maceMove = vec3.fromValues(.15, .5, .2);
            mat4.translate(this.maceTrans, this.maceTrans, maceMove);
            mat4.rotateY(this.maceTrans, this.maceTrans, Math.PI*-.088);

            this.sword = new Sword(gl);
            this.swordT = mat4.create();
            let swordMove = vec3.fromValues(.15, -.5, 0);
            mat4.translate(this.swordT, this.swordT, swordMove);
            mat4.rotateY(this.swordT, this.swordT, Math.PI*-.088);

            this.greatSword = new Sword(gl);
            this.gSword = mat4.create();
            let gswordMove = vec3.fromValues(.15, 0, 0);
            let bigSword = vec3.fromValues(1.4, 1.4, 1.4);
            mat4.scale(this.gSword, this.gSword, bigSword);
            mat4.translate(this.gSword, this.gSword, gswordMove);
            mat4.rotateY(this.gSword, this.gSword, Math.PI*-.12);
        }
        this.temp = mat4.create();
    }

    draw (vertexAttr, colAttr, modelUniform, coordFrame) {
        mat4.mul(this.temp, coordFrame, this.bottomTrans);
        this.bottom.draw(vertexAttr, colAttr, modelUniform, this.temp);

        mat4.mul(this.temp, coordFrame, this.oFTrans);
        this.half.draw(vertexAttr, colAttr, modelUniform, this.temp);

        mat4.mul(this.temp, coordFrame, this.topTrans);
        this.top.draw(vertexAttr, colAttr, modelUniform, this.temp);

        mat4.mul(this.temp, coordFrame, this.lTrans);
        this.left.draw(vertexAttr, colAttr, modelUniform, this.temp);

        mat4.mul(this.temp, coordFrame, this.rightTrans);
        this.right.draw(vertexAttr, colAttr, modelUniform, this.temp);

        mat4.mul(this.temp, coordFrame, this.maceTrans);
        this.mace.draw(vertexAttr, colAttr, modelUniform, this.temp);

        mat4.mul(this.temp, coordFrame, this.swordT);
        this.sword.draw(vertexAttr, colAttr, modelUniform, this.temp);

        mat4.mul(this.temp, coordFrame, this.gSword);
        this.greatSword.draw(vertexAttr, colAttr, modelUniform, this.temp);
    }
}