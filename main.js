let canvas = null;

document.addEventListener("DOMContentLoaded", function () {
    canvas = new draw2d.Canvas("canvas_id");
    document.getElementById("circle").onclick = addCircle;
    document.getElementById("rectangle").onclick = addRectangle;
    document.getElementById("node").onclick = addNode;
    document.getElementById("getconnection").onclick = getConnection;
});

function addCircle() {
    let shape = new draw2d.shape.basic.Circle({x:40,y:10, stroke:3, color:"#3d3d3d",bgColor:"#3dff3d"});
    canvas.add(shape);
}

function addRectangle() {
    let shape = new draw2d.shape.basic.Rectangle({x:40,y:10,width:100,height:60, stroke:3, color:"#3d3d3d",bgColor:"#3dff3d"});
    canvas.add(shape);
}

function addNode() {
    let shape = new draw2d.shape.node.Between({color:"#3d3d3d"});
    // shape.getconnections
    // 
    canvas.add(shape);
}

function getConnection() {
    let figures = canvas.getFigures();
    console.log(figures);
    // getfigures
    // nodeを選択
    // getconnection
    // <div></div>内に表示
}