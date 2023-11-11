const controller = {}
const Funcionario = require ('../models/Funcionario')

controller.create = async function (req, res){
    const {nome, cargo, salario, contratado} = req.body;
    
    if(!nome && !cargo && !salario && !contratado) {
       return res.status(422).json({erro: "É obrigatório informe nome, cargo, salario e se esta ativo!"});
    }
    

    const funcionario ={
        nome, 
        cargo, 
        salario, 
        contratado
    };

    try{
        await Funcionario.create(funcionario);
        res.status(201).json({message: "Funcionario inserido com sucesso!"})
    } catch (error) {
        res.status(500).json({error:error});
    }
}

controller.retrieveAll = async function (req, res){
    try{
        const results = await Funcionario.find()
        res.send(results)
    }catch (error){
        console.log(error)
        res.status(500).json({error: error})
    }
}

controller.retrieveOne = async function (req, res){
    const filter = req.params.id;
    try{
        const result = await Funcionario.findById(filter)
        res.send(result)
    }catch (error){
        console.log(error)
        res.status(500).json({error: error})
    }
}

controller.update = async function (req, res){
    const filter = req.params.id;
    const update = req.body;
    try{
        const result = await Funcionario.findByIdAndUpdate(filter, update, {
            new: true,
            returnOriginal: false
        })
        if (result) res.status(200).send(result);
        else res.status(404).end();
    }catch (error){
        console.log(error)
        res.status(500).json({error: error})
    }
}

controller.delete = async function (req, res){
    const filter = req.params.id;
    try{
        const result = await Funcionario.findByIdAndDelete(filter)
        if (result) res.status(200).json({message:"Funcionario excluído com sucesso!"}).end();
        else res.status(404).end();
    }catch (error){
        console.log(error)
        res.status(500).json({error: error})
    }
}

module.exports = controller;