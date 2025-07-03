class SelecaoController{

    index(req, res)  {
  const sql = 'SELECT * FROM selecoes;';
  conexao.query(sql, (err, results) => {
    if (err) {
      res.status(404).json({ err: err });
    } else {
      res.status(200).json(results);
    }
  });
}
    show(req, res) {
  const id = req.params.id
  const sql = 'SELECT * FROM selecoes WHERE id=?;';
  conexao.query(sql, id, (err, results) => {
    const linha = results[0];
    if (err) {
      res.status(404).json({ err: err });
    } else {
      res.status(200).json(linha);
    }
  })
}
    
    store(req, res) {
  const selecao = req.body;
  const sql = 'INSERT INTO selecoes SET ?;';
  conexao.query(sql, selecao, (err, results) => {
    if (err) {
      res.status(404).json({ err: err });
    } else {
      res.status(201).json(results);
    }
  });
}
    update(req, res) {
  const id = req.params.id;
  const sql = 'DELETE  FROM selecoes WHERE id=?;';
  conexao.query(sql, id, (err, results) => {
    if (err) {
      res.status(404).json({ err: err });
    } else {
      res.status(200).json(results);
    }
  });
    }
    delete(req, res)  {
      const id = req.params.id;
      const selecao = req.body;
      const sql = 'UPDATE selecoes SET ? WHERE id=?;';
      conexao.query(sql, [selecao, id], (err, results) => {
        if (err) {
          res.status(404).json({ err: err });
        } else {
          res.status(200).json(results);
        }
      });
    }
}
//padrao singleton
export default new SelecaoController()