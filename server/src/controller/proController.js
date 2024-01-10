import Product from "../model/proShcema.js"


export const get_A = async(req, res) => {
    res.send('Hello World!')
  }

export const get_pro=async(req, res) => {
    try {
        const data = await Product.find({})
        res.status(200).send({message:'sucsess',data})
    } catch (error) {
        res.status(500).send({message:'NOT sucsess'})
    }
}
export const post_pro=async(req, res) => {
    try {
        const data =  new Product(req.body)
        await data.save()

        res.status(200).send({message:'sucsess',data})
    } catch (error) {
        res.status(500).send({message:'NOT sucsess'})
    }
}
export const del_pro=async(req, res) => {
    try {
        const {id}=req.params
        const data = await  Product.findOneAndDelete(id)
        res.status(200).send({message:'sucsess'})
    } catch (error) {
        res.status(500).send({message:'NOT sucsess'})
    }
}
