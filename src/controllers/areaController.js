const area = require('../models/area');

module.exports = {
    async getAll(request, response) {
      try {
        const areas = await area.findAll();
        response.status(200).json(areas);
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    },
    async create(request, response) {
      try {
        await area.create(request.body);
        response.status(200).json("Empresa inserida!!");
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    },
    async one(request, response) {
      try {
        const idArea = request.params.id;
        const Area = await area.findOne({ where: { idArea } });
        if (!Area) {
          return response.status(400).json("Empresa não encontrada");
        }
        response.status(200).json(Area);
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    },
    async update(request, response) {
      try {
        const { nome, descricao } = request.body;
        const idArea = request.params.id;
        const Area = await area.findOne({ where: { idArea } });
  
        if (!Area) {
          return response.status(400).json("Empresa nao encontrada");
        }
        Area.nome = nome;
        Area.descricao = descricao;

  
        await Area.save();
        response.status(200).json("Area atualizada!!");
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    },
    async delete(request,response){
      try {
        const idArea = request.params.id;
        const Area = await area.destroy({ where: { idArea } });
        if (!Area) {
          return response.status(400).json("Area não encontrada");
        }
        response.status(200).json("Area removida!!");
      } catch (error) {
        console.log(error);
        response.status(400).send(error);
      }
    }
  };