class Picture {
    constructor(gl) {

        this.ground = new Cube(gl, 5, 5, vec3.fromValues(0x00/255, 0x99/255, 0x00/255), vec3.fromValues(0x00/255, 0x88/255, 0x00/255), vec3.fromValues(0x00/255, 0x77/255, 0x00/255));
        this.groundT = mat4.create();
        mat4.translate(this.groundT, this.groundT, vec3.fromValues(-1,-1,-3));
        mat4.scale(this.groundT, this.groundT, vec3.fromValues(2,2,.01));

        this.knight = new Knight(gl);
        this.knightT = mat4.create();
        mat4.scale(this.knightT, this.knightT, vec3.fromValues(.75,.75,.75));
        mat4.translate(this.knightT, this.knightT, vec3.fromValues(-1,-3,0));

        this.weapon = new WeaponRack(gl);
        this.weaponT = mat4.create();
        mat4.translate(this.weaponT, this.weaponT, vec3.fromValues(-3,-2,-2));
        mat4.scale(this.weaponT, this.weaponT, vec3.fromValues(2,2,2));

        this.horse = new Horse(gl);
        this.horseT = mat4.create();
        mat4.scale(this.horseT, this.horseT, vec3.fromValues(5,5,5));
        mat4.translate(this.horseT, this.horseT, vec3.fromValues(0, 0, -.5));

        this.temp = mat4.create();
    }

    draw (vertexAttr, colAttr, modelUniform, coordFrame) {
        {
            // for (let k = 0; k < 3; k++) {
            //     mat4.mul(this.temp, coordFrame, this.knightT);
            //     this.knight.draw(vertexAttr, colAttr, modelUniform, this.temp);
            //     mat4.translate(this.knightT, this.knightT, vec3.fromValues(.4, 0, 0));
            // }

            mat4.mul(this.temp, coordFrame, this.groundT);
            this.ground.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.weaponT);
            this.weapon.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.knightT);
            this.knight.draw(vertexAttr, colAttr, modelUniform, this.temp);

            mat4.mul(this.temp, coordFrame, this.horseT);
            this.horse.draw(vertexAttr, colAttr, modelUniform, this.temp);


        }
    }
}