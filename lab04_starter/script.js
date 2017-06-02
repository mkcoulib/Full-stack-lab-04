
var colors = ['red', 'blue','green','cyan','yellow']


document.addEventListener('DOMContentLoaded',function(){



var btn = document.createElement("button");        
var t = document.createTextNode("Add Square");       
btn.appendChild(t);                                
document.body.appendChild(btn);
var container = document.createElement('div');//container to float all squares
container.id = 'square-container';
document.body.appendChild(container);  

    btn.addEventListener('click', function() {
        var existingSquares = document.getElementsByClassName('square').length;
        var div = document.createElement('div');
       div.className = "square";
      div.id = existingSquares;


      

        div.addEventListener('click', changeColor);
        div.addEventListener('mouseenter', insertId);
        div.addEventListener('mouseleave',removeId);
        div.addEventListener('dblclick',removeNeighbor);

      container.appendChild(div);
    });

        function changeColor(event){ //remove event in order to use line 32
          var index =  Math.floor(Math.random()* colors.length);
          var newColor = colors[index];
        //   we need to set new color as the background color of the clicked div
        //   this.style.backgroundColor = newColor ;
        event.target.style.backgroundColor = newColor;
        }

        function insertId(){
            var id = this.id;
            this.innerText = id;
        }

        function removeId(){
            this.innerText = '';
        }

        function removeNeighbor() {
            var id = this.id;
            // if even remove the square after 
            if (id % 2 === 0) {
                if (this.nextSibling) {
                    this.nextSibling.remove();
                } else {
                    alert('there are no more elements to remove');
                }

            } else {// if odd remove the square before 
                if
                    (this.previousSibling) {
                    this.previousSibling.remove();
                } else {
                    alert('there are no more squares to remove');
                }
            }
        }
});

