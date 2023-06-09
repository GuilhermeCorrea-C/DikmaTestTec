const empresa = require('../models/empresa');

module.exports = {
    async getAll(request, response) {
      try {
        const empresas = await empresa.findAll();
        response.status(200).json(empresas);
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    },
    async create(request, response) {
      try {
        await empresa.create(request.body);
        response.status(200).json("Empresa inserida!!");
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    },
    async one(request, response) {
      try {
        const idEmp = request.params.id;
        const Empresa = await empresa.findOne({ where: { idEmp } });
        if (!Empresa) {
          return response.status(400).json("Empresa não encontrada");
        }
        response.status(200).json(Empresa);
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    },
    async update(request, response) {
      try {
        const { nome, descricao } = request.body;
        const idEmp = request.params.id;
        const Empresa = await empresa.findOne({ where: { idEmp } });
  
        if (!Empresa) {
          return response.status(400).json("Empresa nao encontrada");
        }
        Empresa.nome = nome;
        Empresa.descricao = descricao;

  
        await Empresa.save();
        response.status(200).json("Empresa atualizada!!");
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    },
    async delete(request,response){
      try {
        const idEmp = request.params.id;
        const Empresa = await empresa.destroy({ where: { idEmp } });
        if (!Empresa) {
          return response.status(400).json("Empresa não encontrada");
        }
        response.status(200).json("Empresa removida!!");
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    }
  };