$(document).ready(function(){
    const btn = document.querySelector('#adicionargame')
    btn.onclick = (e) => {
        e.preventDefault()
        swal("Parabéns!", "O jogo foi adicionado com sucesso!", "success");
    }
});

function ConfSenha(){
	var senha1 = document.getElementById('senha1').value);
	var senha2 = document.getElementById('senha2').value);
	
	if(senha1 == senha2){
		return true
	}else{
		return false
	}
}