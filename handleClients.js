
const { clients } = require('./data/clients')

const getAllClients = (req,res) => {
    res.status(200).json({data: clients})
  }
  
const getAClient = (req,res) => {
    const id = req.params.id;
    //console.log(id)
    const client = clients.find((client) => client.id === id)
    res.status(200).json({data: client})
}
  
const addNewClient = (req,res) => {
    const newClient = req.body;
    const email = newClient.email;
    //console.log(email);
    const alreadyClient = clients.find((client) => client.email === email)
    clients.push(newClient);
  
    if(alreadyClient) {
      res.status(400).json({ status: 400, message: "Error, email belongs to a current client" })
    } else {
      res.status(200).json({ status: 200, message: "Success, new client added!", data: clients })
    }
}
  
  const deleteAClient = (req,res) => {
    const id = req.params.id;
    const newClients = clients.filter((client) => client.id != id)
    console.log(newClients)
    res.status(200).json({ status: 200, message: "Client deleted.", data: newClients})
  }

  
module.exports = { getAllClients, getAClient, addNewClient, deleteAClient };