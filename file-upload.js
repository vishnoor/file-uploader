(function() {

	
	template = `
    <style>
     .file-upload-hidden
     {
	 	max-width: 0px;
	 }

	 .file-upload-inline{
	 	display : inline !important;
	 }
    </style>
	<input type="file" id="flDocument" class="file-upload-hidden" actualFileChooser name=""/>  
	<button type="button" class="btn btn-info" fileChooser></button>
  `;

  class FileUploader extends HTMLElement{
	   constructor() {
	     super();

	    this.showFileDialog = this.showFileDialog.bind(this);
	    this.setNewFileName = this.setNewFileName.bind(this);
  	}

  	

  	connectedCallback() {
  		this.innerHTML = template;

  		this.fileChooser = this.querySelector("[fileChooser]");

	  	this.actualFileChooser = this.querySelector("[actualFileChooser]");

  		this.fileChooser.addEventListener('click', this.showFileDialog);
  		this.actualFileChooser.addEventListener('change', this.setNewFileName);

  	 	this.fileChooser.textContent = this.getAttribute("buttonText");

  	 	const fileUIControlName = this.getAttribute("controlName");
  	 	this.actualFileChooser.setAttribute("name", fileUIControlName);
  	}

  	showFileDialog(){
  		this.actualFileChooser.click();
  	}

  	setNewFileName(){
      const fileNameControlId = this.getAttribute("textControlId");
      this.fileNameHolder = this.querySelector("#" + fileNameControlId);

  		const fileName = this.actualFileChooser.files[0].name;
  		this.fileNameHolder.textContent = fileName;

      this.fileNameHolder.setAttribute("href", "#");
  	}


  	disconnectedCallback() {
  		this.fileChooser.removeEventListener('click', this.showFileDialog);
  		this.actualFileChooser.removeEventListener('change', this.setNewFileName);
  	}

  	
  }

  window.customElements.define('file-uploader', FileUploader);

})();