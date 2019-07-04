const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');



var root = {
    message: () => 'Hello World'
};

var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express Graph ql server now runing'));