const models = require('../models');

function save(req,res){
    const category = {
        name:req.body.name,
        slug: req.body.slug,
        parent_id : req.body.parent_id
    }

    models.Category.create(category).then(result => {
        res.status(201).json({
            message : "Product created succesfully",
            result: category
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wring",
            error : error
        });
    });
}


const showAll = async (req,res)=>{
    try{
        const AllCategory = await models.Category.findAll({
            
        });
        if(AllCategory){

            let categories = await AllCategories(AllCategory);
            res.status(200).json({
                data:categories
            })
        }
        else{
            res.status(404).json({
                message:"Category not found"
            })
        }

    }
    catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}


const AllCategories = async (data,parent_id = null) => {
    
let categoryList = [];
     let parentCat;

     if(parent_id == null){
         parentCat = data.filter((element)=>element.parent_id == null)
     }
     else{
        parentCat = data.filter((element)=>element.parent_id == parent_id)
     }

     for(let dataCat of parentCat){
         categoryList.push({
             id : dataCat.id,
             name : dataCat.name,
             slug : dataCat.slug,
             child : await AllCategories(data,dataCat.id)
         })

     }

     return categoryList;
    }



module.exports = {
    save: save,
    showAll: showAll
}