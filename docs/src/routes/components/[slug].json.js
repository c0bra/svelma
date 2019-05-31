import jsdocs from './jsdocs.json'

const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase())

export async function get(req, res, next) {
  const { slug } = req.params;

  res.setHeader('Content-Type', 'application/json');
	res.end(
    JSON.stringify(
      jsdocs[titleize(slug)]
    )
  );
}