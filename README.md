# File Upload Control

HTML5 File upload control does not allow you to show the name of the file in it. This is a custom Web Component that overcomes this limitation.

![image-20210128185732552](image-20210128185732552.png)

# Usage

##### 1. Include this script in your base layout / layout master 

```html
<script src="file-upload.js"></script>
```

##### 2. Use the tag and pass the three attribute values 

```html
<file-uploader buttonText="Choose Profile" controlName="profilePicture" textControlId="txtProfileFileName">  
    <a href="/contextPath/documents/view/22" id="txtProfileFileName">Initial DB Filename.docx</a>
</file-uploader>
```

1.  *buttonText* - Text to show in the button
2.  *controlName* - name of the input file control that will be submitted to server.
3.  *textControlId* - The Id of the control (mostly the anchor tag within the file-uploader control)

If a new file is chosen then it displays the name of the new file. The ***href*** property is set to "#" as the link would no longer be valid.

<u>Note: This component does not use shadow DOM as the file input is not submitted with the containing form</u>

# Demo

This [link](./fileUploadTest.htm) shows the demo page.

