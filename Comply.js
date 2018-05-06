var canSC = false;

function sort(val){
	
}

class Comply{
	constructor(){}
	
	start(){
		this.comply = null;
		let va = this.element.getAttribute("comply-val");
		let values = [];
		this.sort = false;
		if(this.element.getAttribute("comply-sort") !== null){
			this.sort = true;
		}
		if(va !== null){
			var a = 1;
			var b = va.indexOf(',');
			while(b > -1){
				values.push(va.substr(a, b-a));
				a = b+1;
				b = va.indexOf(",", a);
			}
			values.push(va.substr(a, va.length-1-a));	
		}
		this.values = values;
		this.element.addEventListener("blur", this.onblur.bind(this));
		this.element.addEventListener("focus", this.onfocus.bind(this));
	}
	
	onblur(){
		if(this.comply !== null){
			this.comply.classList.remove("visible");
			this.comply.addEventListener('transitionend', ()=>{
				if(this.comply !== null){
					document.body.removeChild(this.comply);
					this.comply = null;
				}
			});	
		}
	}
	
	createComply(){
		if(this.comply === null){
			let c = document.createElement('div');
			let u = document.createElement('ul');
			if(this.sort){
				sort(this.values);
			}
			this.values.forEach(element => {
				let l = document.createElement('li');
				l.innerHTML = element;
				l.addEventListener("click", (e) =>{
					e.preventDefault();
					this.element.setAttribute("value", element);
				});
				u.appendChild(l);
			});
			c.appendChild(u);
			document.body.appendChild(c);
			c.classList.add("comply");
			this.comply = c;		
		}
		return this.comply;
	}
}

class Comply_up extends Comply{
	
	bind(selector){
		document.querySelectorAll(selector).forEach(element => new Comply_up(element));
	}
	
	constructor(element){
		this.element = element;
		super();
		this.start();	
	}	
}

class Comply_bottom extends Comply{
	
	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new Comply_bottom(element));
	}
	
	constructor(element){
		super();
		this.element = element;
		this.start();
	}
	
	onfocus(){
		let compl = this.createComply();
		compl.style.width = this.element.offsetWidth + "px";
		let top = this.element.getBoundingClientRect().top + document.documentElement.scrollTop + this.element.offsetHeight;
		let left = this.element.getBoundingClientRect().left + document.documentElement.scrollLeft;
		compl.style.left = left + "px";
		compl.style.top = top + "px";
		compl.classList.add("visible");
	}
	
}

window.onload = function(){
	let sc = document.querySelectorAll('*[comply-sc]');
	if(sc.length > 0){
		canSC = true;
	}
	Comply_up.bind('*[comply-up]');
	Comply_bottom.bind('*[comply-bottom]');
};