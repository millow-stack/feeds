var lines, main, i, fr, looks;
looks = `<style>
			*, :after, :before, :hover, :active{
				outline: none;
    			user-select: auto;
    			font-family: consolas;
    			word-wrap: normal;
    			overflow: initial;
			}
			ol {
				background:#eee;
			    list-style-position: outside;
			    border: 0.5px solid black;
			    border-radius: 7px 0 0 7px;
			}
			li:nth-child(odd){
				background: #c7c7c7;
			    border-bottom: 0.2px dashed grey;
			}
			li:nth-child(even){
				background: #a5a5a5;
			    border-bottom: 0.2px dashed grey;
			}
			li:hover{
				background: #333;
			    color: #ccc;
			}
		</style>`;


function textify(which) {
    lines = which.contentWindow.document.body.innerText.split('\n');
    for(i = 0;i < lines.length;i++){
    	main += '<li class="">'+lines[i]+'</li>\n';
	}

    which.src = 'data:text/html,'+'<ol contenteditable type="1" start="1">'+main+'</ol>';
    which.style.resize = 'both';//looks+
}

function from_local(which, to) {
	//which: to put in file input.
	//to: id of any iframe.
	which.addEventListener('change', function() { 
			
			fr = new FileReader(); 
			fr.onload=function(){ 
				lines = fr.result.split('\n');
				for(i = 0;i < lines.length;i++){
    				main += '<li class="">'+lines[i]+'</li>\n';
				}

    			document.getElementById(to).src = 'data:text/html,'+looks+'<ol contenteditable type="1" start="1">'+main+'</ol>';
    			document.getElementById(to).style.resize = 'both';
			} 
			
			fr.readAsText(this.files[0]); 
	}) 
}