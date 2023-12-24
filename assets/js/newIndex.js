function sendMail(event){
    console.log('hello')
    event.preventDefault() ;
    var params = {
        name : document.getElementById('name').value ,
        email : document.getElementById('email').value ,
        message : document.getElementById('messagee').value 
    }
    const serviceId = 'service_kj3maxv' ;
const templateId = 'template_vkf3jy8' ;

emailjs.send(serviceId, templateId, params).then(
    res => {
        console.log("hjihstr");
        document.getElementById('name').value = "" ;
        document.getElementById('email').value = "" ;
        document.getElementById('message').value = "" ;
        console.log(res)
        alert("your message send successfully")
    }
)
.catch(err => console.log(err))
}
