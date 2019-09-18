const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express()
  
    server.get('/login', (req, res) => {
      return app.render(req, res, '/login')
    })
  
    server.get('/libro/:id', (req, res) => {
        const actualPage = '/libro';
        const queryParams = { id: req.params.id };

        return app.render(req, res, actualPage, queryParams)
    })
  
    server.get('/search', (req, res) => {
      return app.render(req, res, '/search')
    })
    
    server.get('/crear', (req, res) => {
      return app.render(req, res, '/crear')
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })
  
    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port} + MODO: ${dev}`)
    })
})