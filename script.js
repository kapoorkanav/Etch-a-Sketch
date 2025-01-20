let updates=1;
function makeGrid(n){
    const grids=document.querySelector(".grids");
    grids.textContent="";
    updates=0;
    for(let i=0;i<n*n;i++){
        const innerGrid=document.createElement("div");
        let size=720/n;
        innerGrid.style.height=`${size}px`;
        innerGrid.style.width=`${size}px`;
        innerGrid.className="grid";
        innerGrid.addEventListener("mouseleave",()=>{
            innerGrid.style.backgroundColor='#'+Math. floor(Math. random()*16777215). toString(16);
            // innerGrid.style.backgroundColor=white;
            if(updates<10) innerGrid.style.opacity=updates/10;
            updates++;
        })
        console.log("adding");
        grids.appendChild(innerGrid);
    }
}
makeGrid(16);

const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let newSize=prompt("Enter new size of grid (n):");
    if(newSize<=100&&newSize>=1)
    makeGrid(newSize);
});