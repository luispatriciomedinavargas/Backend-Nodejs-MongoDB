const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    name: {
        type: String,
        require: [true, "El nombre del rol es obligatorio"]
    },
    state: {
        type: Boolean,
        require: true,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    price: {
        type: Number,
        default: 0,
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categorie',
        require: true
    },
    description: {
        type: String,
    },
    stock: {
        type: Number,
        default: 0,
    },
    disponible: {
        type: Boolean,
        default: true
    },
    img: {
        type: String
    }

});


ProductoSchema.methods.toJSON = function () {
    const { __v, state, ...data } = this.toObject();

    return data;
}
module.exports = model('product', ProductoSchema);