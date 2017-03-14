/**
 * Created by emilypeterson on 3/7/17.
 */
let gl;
let glCanvas, textOut;
let orthoProjMat, persProjMat, viewMat, topViewMat, horseCF;
let axisBuff, tmpMat;
let globalAxes;

/* Vertex shader attribute variables */
let posAttr, colAttr;

/* Shader uniform variables */
let projUnif, viewUnif, modelUnif;

const IDENTITY = mat4.create();
let coneSpinAngle;
let obj;
let shaderProg;

function main() {
    glCanvas = document.getElementById("gl-canvas");
    textOut = document.getElementById("msg");
    gl = WebGLUtils.setupWebGL(glCanvas, null);
    axisBuff = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, axisBuff);
    window.addEventListener("resize", resizeHandler, false);
    window.addEventListener("keypress", keyboardHandler, false);
    ShaderUtils.loadFromFile(gl, "vshader.glsl", "fshader.glsl")
        .then (prog => {
            shaderProg = prog;
            gl.useProgram(prog);
            gl.clearColor(0, 0, 0, 1);
            gl.enable(gl.DEPTH_TEST);    /* enable hidden surface removal */
            //gl.enable(gl.CULL_FACE);     /* cull back facing polygons */
            //gl.cullFace(gl.BACK);
            posAttr = gl.getAttribLocation(prog, "vertexPos");
            colAttr = gl.getAttribLocation(prog, "vertexCol");
            projUnif = gl.getUniformLocation(prog, "projection");
            viewUnif = gl.getUniformLocation(prog, "view");
            modelUnif = gl.getUniformLocation(prog, "modelCF");
            gl.enableVertexAttribArray(posAttr);
            gl.enableVertexAttribArray(colAttr);
            orthoProjMat = mat4.create();
            persProjMat = mat4.create();
            viewMat = mat4.create();
            topViewMat = mat4.create();
            horseCF = mat4.create();
            tmpMat = mat4.create();
            mat4.lookAt(viewMat,
                vec3.fromValues(2, 2, 2), /* eye */
                vec3.fromValues(0, 0, 0), /* focal point */
                vec3.fromValues(0, 0, 1)); /* up */
            mat4.lookAt(topViewMat,
                vec3.fromValues(0,0,2),
                vec3.fromValues(0,0,0),
                vec3.fromValues(0,1,0)
            );
            gl.uniformMatrix4fv(modelUnif, false, horseCF);

            //obj = new DiamondRing(gl);
            obj = new Horse(gl);
            globalAxes = new Axes(gl);
            //mat4.rotateX(horseCF, horseCF, -Math.PI/2);
            coneSpinAngle = 0;
            resizeHandler();
            render();
        });
}

function resizeHandler() {
    glCanvas.width = window.innerWidth;
    glCanvas.height = 0.9 * window.innerHeight;
    if (glCanvas.width > glCanvas.height) { /* landscape */
        let ratio = 2 * glCanvas.height / glCanvas.width;
        console.log("Landscape mode, ratio is " + ratio);
        mat4.ortho(orthoProjMat, -3, 3, -3 * ratio, 3 * ratio, -5, 5);
        mat4.perspective(persProjMat,
            Math.PI/3,  /* 60 degrees vertical field of view */
            1/ratio,    /* must be width/height ratio */
            1,          /* near plane at Z=1 */
            20);        /* far plane at Z=20 */
    } else {
        alert ("Window is too narrow!");
    }

}

function keyboardHandler(event) {
    const transXpos = mat4.fromTranslation(mat4.create(), vec3.fromValues( .2, 0, 0));
    const transXneg = mat4.fromTranslation(mat4.create(), vec3.fromValues(-.2, 0, 0));
    const transYpos = mat4.fromTranslation(mat4.create(), vec3.fromValues( 0, .2, 0));
    const transYneg = mat4.fromTranslation(mat4.create(), vec3.fromValues( 0,-.2, 0));
    const transZpos = mat4.fromTranslation(mat4.create(), vec3.fromValues( 0, 0, .2));
    const transZneg = mat4.fromTranslation(mat4.create(), vec3.fromValues( 0, 0,-.2));
    const rotZpos = mat4.rotateZ(mat4.create(), mat4.create(), (Math.PI)/15);
    const rotYpos = mat4.rotateY(mat4.create(), mat4.create(), (Math.PI)/15);
    switch (event.key) {
        case "x":
            mat4.multiply(horseCF, transXneg, horseCF);  // horseCF = Trans * horseCF
            break;
        case "X":
            mat4.multiply(horseCF, transXpos, horseCF);  // horseCF = Trans * horseCF
            break;
        case "y":
            mat4.multiply(horseCF, transYneg, horseCF);  // horseCF = Trans * horseCF
            break;
        case "Y":
            mat4.multiply(horseCF, transYpos, horseCF);  // horseCF = Trans * horseCF
            break;
        case "z":
            mat4.multiply(horseCF, transZneg, horseCF);  // horseCF = Trans * horseCF
            break;
        case "Z":
            mat4.multiply(horseCF, transZpos, horseCF);  // horseCF = Trans * horseCF
            break;
        case "R":
            mat4.multiply(horseCF, horseCF, rotZpos);    // horseCF = horseCF * Trans
            break;
        case "r":
            mat4.multiply(horseCF, horseCF, rotYpos);    // horseCF = horseCF * Trans
            break;

    }
    textOut.innerHTML = "Ring origin (" + horseCF[12].toFixed(1) + ", "
        + horseCF[13].toFixed(1) + ", "
        + horseCF[14].toFixed(1) + ")";
}

function render() {
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
    draw3D();
    drawTopView(); /* looking at the XY plane, Z-axis points towards the viewer */
    //coneSpinAngle += 1;  /* add 1 degree */
    requestAnimationFrame(render);
}

function drawScene() {
    globalAxes.draw(posAttr, colAttr, modelUnif, IDENTITY);

    if (typeof obj !== 'undefined') {
        let yPos = 0;
            mat4.fromTranslation(tmpMat, vec3.fromValues(0, yPos, 0));
            mat4.multiply(tmpMat, horseCF, tmpMat);   // tmp = horseCF * tmpMat
            obj.draw(posAttr, colAttr, modelUnif, tmpMat);
    }
}

function draw3D() {
    /* We must update the projection and view matrices in the shader */
    gl.uniformMatrix4fv(projUnif, false, persProjMat);
    gl.uniformMatrix4fv(viewUnif, false, viewMat);
    gl.viewport(0, 0, glCanvas.width/2, glCanvas.height);
    drawScene();
}

function drawTopView() {
    /* We must update the projection and view matrices in the shader */
    gl.uniformMatrix4fv(projUnif, false, orthoProjMat);
    gl.uniformMatrix4fv(viewUnif, false, topViewMat);
    gl.viewport(glCanvas.width/2, 0, glCanvas.width/2, glCanvas.height);
    drawScene();
}
