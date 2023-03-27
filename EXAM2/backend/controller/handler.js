const Books=require('../model/book');

const handler={
    getBooks:async (req,res,next)=>{
        let data=[];
        try{
            data=await Books.find();
            res.status(200).json(data);
        }catch(err){
            res.status(500).send(err);
        }
    },
    getBook:async (req,res,next)=>{
        try{
        await Books.findOne({isbn:req.params.isbn})
        .then((book)=>{
            if(book!==null) res.json(book);
            else 
            res.send("book not found")
        });
    }catch(err){
        res.send(err);
    }
    },
    createBooks: async (req,res,next)=>{
        await Books.create(req.body)
        .then((books)=>{
            res.json(books);
        })
        .catch((err)=>{
            res.send(err);
        })
    },
    deleteBook: async (req,res,next)=>{
        try{
            await Books.findOne({isbn:req.params.isbn})
        .then((book)=>{
            if(book!==null){
            Books.deleteOne({isbn:req.params.isbn}).then(()=>{res.send("deleted")})
            }else{
                res.json({message:"no book found"})
            }
        })
        }catch(err){
            res.send(err)
        }
    },
    updateBook:async (req,res,next)=>{
        try{
            await Books.findOne({isbn:req.params.isbn})
        .then((book)=>{
            if(book!==null){
            Books.updateOne({isbn:req.params.isbn},req.body).then(()=>{res.send("updated")})
            }else{
                res.json({message:"no book found"})
            }
        })
        }catch(err){
            res.send(err)
        }
    },

}

module.exports=handler;