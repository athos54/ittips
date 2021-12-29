const Categorie = require('../../back/models/Categorie')

const categorie = new Categorie({
  title: 'test',
  tips: [],
  image: 'https://picsum.photos/200/300'
})

categorie.save()
