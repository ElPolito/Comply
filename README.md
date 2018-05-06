# Comply
Comply est une bibliotheque Javascript permettant d'afficher des propositions lors du remplissage d'un champ de texte !

## Intégration
Pour intégrer Comply dans vos pages HTML ajoutez les deux lignes suivantes dans la balise Head :
```
<script type="text/javascript" src="Comply.js"></script>
<link rel="stylesheet" href="Comply.css"/>
```
C'est tout vous pouvez maintenant commencer !

## Utilisation
Pour utiliser Comply ajouter l'attribut comply-bottom sur l'input que vous souhaitez.
```
<input type='text' name'inputTxt' comply-bottom />
```

Maintenant il faut spécifier les valeurs de la completion avec l'attribut comply-val
```
<input type='text' name'inputTxt' comply-bottom comply-val='toto,tata,tonton'/>
```

C'est tout !
