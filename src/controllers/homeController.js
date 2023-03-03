exports.paginaInicial =  (req, res)=>{
    //ultilizando crase no send
    res.render('home')
};

exports.tratraPost = (req, res)=>{
    res.send(`
        Ola sou a rota Post
    `)
}