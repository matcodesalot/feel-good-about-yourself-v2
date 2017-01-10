import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import usersRoutes from './endpoints/users-routes';

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));

app.use("/users", usersRoutes);

function runServer() {
    return new Promise((resolve, reject) => {
        let databaseUri = process.env.DATABASE_URI || global.databaseUri || "mongodb://localhost/feels";
        mongoose
        .connect(databaseUri)
        .then(function() {
            console.log("db connected...")

            app.listen(PORT, HOST, (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }

                const host = HOST || 'localhost';
                console.log(`Listening on ${host}:${PORT}`);
            });
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = runServer;
