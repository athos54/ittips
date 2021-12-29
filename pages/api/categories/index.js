export default async function handler (req, res) {
//   console.log('req', req)
  if (req.method === 'GET') {
    return res.status(200).json({ name: 'categories' })
  }

  return res.status(404).json({ error: 'Not found' })
}
