let messages = [];
let id = 0;

module.exports = {
    create(req, res){
        let {text} = req.body;
        let {time} = req.body;
        
        messages.push({
            id,
            text,
            time
        })
        id++
        res.send(messages)
    },

    read(req, res){
        res.send(messages)
    },

    update(req, res){
        let {id} = req.params;
        let {text} = req.body;
        let index = messages.findIndex(message => message.id === parseInt(id))
        if (index !== -1) {
            messages[index] = {
                id: messages[index].id,
                text: text ? text : messages[index].text
            }
        }
        res.send(messages)
    },

    delete(req, res){
        let {id} = req.params;
        let index = messages.findIndex(message => message.id === parseInt(id))
        if (index !== -1){
            messages.splice(index, 1)
        }
        res.send(messages)
    }
}