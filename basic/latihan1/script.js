const fileuploader = document.getElementById('file-uploader');

fileuploader.addEventListener('change',(event)=>{
    const files = event.target.files;
    console.log('files','files');
    //show the upload feedback
    const feedback = document.getElementById('feedback');
    const msg = `${files.lenght} file(s)uploaded succcess!`;
    feedback.innerHTML = msg;
});