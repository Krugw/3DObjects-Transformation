/**
 * Created by Anthony on 3/13/2017.
 */
class Sword {
    constructor (gl) {

        {
            this.grey = vec3.fromValues(0x80/255, 0x80/255, 0x80/255);
            this.orange = vec3.fromValues(0xCC/255, 0x66/255, 0x00/255);
            this.magenta = vec3.fromValues(0xCC/255, 0x00/255, 0x66/255);



            this.hilt = new UniSphere(gl, .1, 1, this.magenta, this.magenta);
            this.hiltTrans = mat4.create();
            let vec = vec3.fromValues(0.4, 0.33, 0.4);
            mat4.scale(this.hiltTrans, this.hiltTrans, vec);

            this.handle = new Cylinder(gl, .2,.2, 5, 20, this.grey, this.grey);
            this.handleTrans = mat4.create();
            let hanVec = vec3.fromValues(0.1, 0.1, 0.1);
            let moveUp = vec3.fromValues (0, 0, 2.3);
            mat4.scale(this.handleTrans, this.handleTrans, hanVec);
            mat4.translate(this.handleTrans, this.handleTrans, moveUp);

            this.guard = new Cube(gl, .4, 1, this.orange,this.orange,this.orange );
            this.guardTrans = mat4.create();
            let gVec = vec3.fromValues(0.1, 0.6, 0.1);
            let gMove = vec3.fromValues(0,0,1.3);
            mat4.scale(this.guardTrans, this.guardTrans, gVec);
            mat4.translate(this.guardTrans, this.guardTrans, gMove);

            this.tip = new Cylinder(gl, 0, .2, 1, 20, this.grey,  this.grey, this.grey );
            this.tipTrans = mat4.create();
            let tMove = vec3.fromValues(0,0,5.25);
            let tSize = vec3.fromValues(.1, .1, .1);
            mat4.scale(this.tipTrans, this.tipTrans, tSize);
            mat4.translate(this.tipTrans, this.tipTrans, tMove);

        }

        this.temp = mat4.create();
    }
    draw (vertexAttr, colAttr, modelUniform, coordFrame) {
        {
            mat4.mul(this.temp, coordFrame, this.hiltTrans);
            this.hilt.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.handleTrans);
            this.handle.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.guardTrans);
            this.guard.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.tipTrans);
            this.tip.draw(vertexAttr, colAttr, modelUniform, this.temp);
        }
    }
}