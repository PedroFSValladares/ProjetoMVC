$(".deletar").click((e) => {
    e.preventDefault()
    if (confirm("Tem certeza que deseja deletar este contato\nEssa ação é irreversível.")) {
        window.location = $(".deletar").attr("href")
    }
})