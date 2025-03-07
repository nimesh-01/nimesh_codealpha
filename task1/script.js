let images = ["https://images.unsplash.com/photo-1739372425274-d41281e72c5d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1739433438074-49814bf2ed08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1739369984535-35b1ae356378?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1739129857889-2d6a4e4a4e64?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1616839273372-a16bca55cc47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJpa2VzfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1618695349120-6de4d26c2859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpa2VzfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1609147904976-acb4403b325b?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1615922850427-200840635264?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnRpbmVudGFsJTIwZ3R8ZW58MHx8MHx8fDA%3D"];
let img = document.getElementById('img');
var count = -1;
console.log(images);

function next() {
    count++;
    if (count >= images.length) {
        count--;
    }
    if (count < images.length) {
        img.setAttribute('src', images[count]);
    }
}
function prev() {
    count--;
    if (count < 0) {
        count++;
    }
    if (count >= 0) {
        img.setAttribute('src', images[count]);
    }
}