/* Custom Fileuploader Component based on aricle from https://alligator.io/web-components/attributes-properties/ */
(function() {

	const template = document.createElement('template');

	template.innerHTML = `
    <style>
     .hidden
     {
	 	max-width: 0px;
	 }

	 .inline{
	 	display : inline !important;
	 }
    </style>
	<input type="file" id="flDocument" class="hidden" actualFileChooser name=""/>  
	<button type="button" class="btn btn-info" fileChooser></button>
	<span class="form-control inline" fileNameHolder></span>
  `;

  class FileUploader extends HTMLElement{
	constructor() {
	     super();

	    this.showFileDialog = this.showFileDialog.bind(this);
	    this.setNewFileName = this.setNewFileName.bind(this);

	    this.attachShadow({ mode: "open" });
	  	this.shadowRoot.appendChild(template.content.cloneNode(true));
	  	
      this.fileChooser = this.querySelector("[fileChooser]");
      this.fileNameHolder = this.querySelector("[fileNameHolder]");
      this.actualFileChooser = this.querySelector("[actualFileChooser]");

      this.fileChooser.addEventListener('click', this.showFileDialog);
      this.actualFileChooser.addEventListener('change', this.setNewFileName);
  	}

  	

  	connectedCallback() {

  	 	this.fileNameHolder.textContent = this.getAttribute("initialFileName");
  	 	this.fileChooser.textContent = this.getAttribute("buttonText");
      
  	 	const fileUIControlName = this.getAttribute("controlName");
  	 	this.actualFileChooser.setAttribute("name", fileUIControlName);
  	}

  	showFileDialog(){
  		this.actualFileChooser.click();
  	}

  	setNewFileName(){
  		const fileName = this.actualFileChooser.files[0].name;
  		this.fileNameHolder.textContent = fileName;
  	}


  	disconnectedCallback() {
  		this.fileChooser.removeEventListener('click', this.showFileDialog);
  		this.actualFileChooser.removeEventListener('change', this.setNewFileName);
  	}

  	
  }

  window.customElements.define('file-uploader', FileUploader);

})();