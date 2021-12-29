// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import Categorie from 'back/models/Categorie'
const Categorie = require('back/models/Categorie')

export default async function handler (req, res) {
  const categories = ['javascript', 'php', 'docker']
  for (let i = 0; i < categories.length; i++) {
    const element = categories[i]

    const categorie = new Categorie({
      title: element,
      tips: [],
      image: null
    })
    await categorie.save()
  }
  console.log('process.env.MONGO_URI', process.env.MONGO_URI)
  res.status(200).json({ name: 'John Doe' })
}
