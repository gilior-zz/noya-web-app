import * as express from 'express';
import {join} from 'path';
import {handleCVRoutes, handleHomeRoutes, handleImgRoutes, handleTraverseItemsRoutes} from "./routes";

// Faster server renders w/ Prod mode (dev mode never needed)


// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');


var parser = require('body-parser');
app.use(parser.json());


app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
// app.use('/api/Data', () => handleHomeRoutes(app));

app.post('/api/Data/GetHomePageText', (req, res) => {
  handleHomeRoutes(req, res)
});
app.post('/api/Data/GetTraverseItems', (req, res) => {
  handleTraverseItemsRoutes(req, res)
});
app.post('/api/Data/GetCV', (req, res) => {
  handleCVRoutes(req, res)
});
app.post('/api/Data/GetImages', (req, res) => {
  handleImgRoutes(req, res)
});
app.post('/api/Data/GetPrograms', (req, res) => {
  handleImgRoutes(req, res)
});

// Server static files from /browser
app.get('*.*', express.static(DIST_FOLDER));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.sendfile(join(DIST_FOLDER, 'index.html'), {req});
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
