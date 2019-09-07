const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        min: [6, 'Minimo 6'],
        required: true,
    },
    cpf: {
        type: String,
        max: [11, 'Maximo 11'],
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});
UsuarioSchema.plugin(mongoosePaginate);
mongoose.model('Usuario', UsuarioSchema);
