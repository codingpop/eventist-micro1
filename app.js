import express from 'express';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import appConfig from './config/appConfig';
import ErrorHandler from './middleware/ErrorHandler';
import routes from './routes';
import schema from './graphql/schema';

const app = express();

app.use('*', cors({ origin: 'http://localhost:8000' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/graphql', graphqlExpress(schema));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/api/v1', [
  routes.auth,
]);

app.get('/', (req, res) => res.json({ message: 'Welcome' }));

app.use(ErrorHandler.handle);

app.listen(appConfig.port);
