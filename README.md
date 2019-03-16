# Projet Exemple GraphQL

### Logiciels

Liste des pré-requis :
* [Eclipse](https://www.eclipse.org/),
* [NodeJS](https://nodejs.org/en/) En version LTS (8.x.x)
* [Chocolatey]
* [MongoDB]
* [Nodemon]
"nodemon --exec babel-node server/index.js"

### Lancer le projet 

* Lancer 'npm start'
* Ouvrir un navigateur : http://localhost:4000/playground

### Commandes

#### Créer un Utilisateur

	mutation {
		createUser(user: {username: "testuser", email: "test@test.com", password:"TestPassword"})
		{
		username
	 	email
		}
	}

#### Récupérer un Utilisateur

	query {
		users {
		_id
		}
	}

#### Créer un Article

	mutation {
	  createArticle
	  (
	    article: 
	    {
	      title: "TitreArticle", 
	   		description:"Description Article", 
	    	body:"Body de lArticle", 
	    	tagList: "tag1", 
	    	author: "5c8cb829db3e333108237dc3"
	    }
	  )
		{
	    title
			description
			body
			tagList
			author
	    {
	    	_id
	  	}
	  }
	}

#### Créer un Commentaire

	mutation {
	  createComment
	  (
	    comment: {
	      body: "Commentaire 1",
	      author: "5c8cb829db3e333108237dc3",
	      article: "5c8cbca0db3e333108237dc4"
	    }
	  )
		{
	    body
	    author
	    {
	    	_id
	  	}
	    article
	    {
	    	_id
	  	}
	  }
	}