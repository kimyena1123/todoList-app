const express = require('express');
const {Todo} = require('../models');

const router = express.Router();
//REST API 구조
// GET /todos - show all todos
// POST / todo - create a new todo
// PATCH /todo/:todoId - edit a specific todo
// DELETE /todo/:todoId - remove a specific todo

//sequelize 쿼리문
// findAll() - select
// findOne() - select
// create() - insert
// update() - update
// destroy() - delete

//기본주소 : localhost:PORT/

//GET localhost:PORT/todos - show all todos (READ)
router.get('/todos', async(req, res) => {
    try{
         //'SELECT * FROM todo'
        let todos = await Todo.findAll();
        console.log(todos);

        res.send(todos);
    }catch(err){
        res.send(err);
    }

    //위 코드와 같음.
    // Todo.findAll().then((data) => {
    //     console.log(data);

    //     res.send(data);
    // }).catch로 예외처리
});

//POST localhost: PORT/todo - create a new todo (CREATE)
router.post('/todo', async(req, res) => {
    try{
        let newTodo = await Todo.create({
            title: req.body.title, // 사용자가 작성할 내용.
            //done : req.body.done, - 안해줘도 됨. // 기본값 0.
        });

        console.log(newTodo);
        res.send(newTodo);
    }catch(err){
        res.send(err);
    }
});

//PATCH localhost: PORT/todo/:todoId - edit a specific todo(UPDATE)
//수정 성공시 : true -> res.send(true)
//수정 실패시 : false -> res.send(false)
router.patch('/todo/:todoId', async(req, res) => {
    console.log(req.body); // {title : 'my todo - 수정', done : true}
    console.log(req.params); // {todoId : '1'}
    
    try{
        let [isUpdated] = await Todo.update(
            {
                title: req.body.title,
                done: req.body.done,
            },
            {
                where: {
                    id: req.params.todoId,
                },
            }
        );

        console.log(isUpdated);
        //수정 성공시: [1] -> 1
        //수정 실패시: [0] -> 0

        //!0
        if(!isUpdated){
            return res.send(false);
        }

        res.send(true);

    }catch(err){
        res.send(err);
    }
});

//DELETE localhost:PORT/todo/:todoId - remove a specific todo (DELETE)
router.delete('/todo/:todoId', async(req, res) => {
    
    try{
        let deleteTodo = await Todo.destroy(
            {
                where: {
                    id: req.params.todoId
                }
            }
        )
        console.log('deleteTodo >> ', deleteTodo);

        if(deleteTodo){
            res.send(true);
        }else{
            res.send(false);
        }
    }catch(err){
        res.send(err);
    }
});

module.exports = router;