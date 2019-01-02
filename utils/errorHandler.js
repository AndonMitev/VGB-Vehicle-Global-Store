module.exports = (err, res) => {
  for (const prop in err.errors) {
    return res.status(422)
      .json({
        error: err.errors[prop].message
      });
  }
}