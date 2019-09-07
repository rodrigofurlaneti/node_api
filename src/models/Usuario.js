const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
        min: 6,
    },
    cpf: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});
UsuarioSchema.plugin(mongoosePaginate);
mongoose.model('Usuario', UsuarioSchema);
