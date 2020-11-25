// Getting all the navbar "Button"
let navBtn = document.querySelectorAll("#mainNav a")
console.log(navBtn);

// Creating the main array
let allArray = [];

// Creating one array for each "Button" in the navbar
navBtn.forEach(e => {
    allArray[e.id] = [];
})

    // Data storage

    // Comics Data
    allArray["navMarv"][0] = []
    allArray["navMarv"][0]["cardImgSrc"] = "assets/img/items/comics/1_378b9431-7743-4cac-b84c-f515bdd55cff_720x.jpg";
    allArray["navMarv"][0]["cardImgAlt"] = "Buste de Iron Man Mk 50";
    allArray["navMarv"][0]["cardTitle"] = "Buste de Iron Man Mk 50";
    allArray["navMarv"][0]["cardPrice"] = "2650";
    allArray["navMarv"][0]["cardText"] = "Copie conforme du Buste de Iron Man Mk 50";
    allArray["navMarv"][0]["cardTextExt"] = "Cette réplique du Buste de Iron Man Mk 50 a été conçue par les plus grands expert de sabre laser !";

    allArray["navMarv"][1] = []
    allArray["navMarv"][1]["cardImgSrc"] = "assets/img/items/comics/15027948_10154771638868760_1051003791708660718_n_540x.jpg";
    allArray["navMarv"][1]["cardImgAlt"] = "l'Oeil de Agamotto";
    allArray["navMarv"][1]["cardTitle"] = "l'Oeil de Agamotto";
    allArray["navMarv"][1]["cardPrice"] = "199";
    allArray["navMarv"][1]["cardText"] = "Copie conforme de l'oeil de Agamotto.";
    allArray["navMarv"][1]["cardTextExt"] = "Cette réplique de l'oeil de Agamotto a été conçue par les plus grands expert de comics !";

    allArray["navMarv"][2] = []
    allArray["navMarv"][2]["cardImgSrc"] = "assets/img/items/comics/23804348_10155994780298760_1930215380_n_720x.jpg";
    allArray["navMarv"][2]["cardImgAlt"] = "Le masque de Batman";
    allArray["navMarv"][2]["cardTitle"] = "Le masque de Batman";
    allArray["navMarv"][2]["cardPrice"] = "289";
    allArray["navMarv"][2]["cardText"] = "Copie conforme du masque de Batman.";
    allArray["navMarv"][2]["cardTextExt"] = "Cette réplique du masque de Batman a été conçue par les plus grands expert de comics !";

    allArray["navMarv"][3] = []
    allArray["navMarv"][3]["cardImgSrc"] = "assets/img/items/comics/image_bebb8818-2d72-464c-ae12-db8acd8f3f6b_900x.jpg";
    allArray["navMarv"][3]["cardImgAlt"] = "le mini réacteur Ark Mk 50";
    allArray["navMarv"][3]["cardTitle"] = "le mini réacteur Ark Mk 50";
    allArray["navMarv"][3]["cardPrice"] = "89";
    allArray["navMarv"][3]["cardText"] = "Copie conforme du réacteur Ark Mk50.";
    allArray["navMarv"][3]["cardTextExt"] = "Cette réplique du réacteur Ark Mk 50 a été conçue par les plus grands expert de comics ! ";

    allArray["navMarv"][4] = []
    allArray["navMarv"][4]["cardImgSrc"] = "assets/img/items/comics/imagejpg_6a474f5e-2dac-402a-9867-810694e70ff0_540x.jpg";
    allArray["navMarv"][4]["cardImgAlt"] = "Casque de Iron Man Mk46";
    allArray["navMarv"][4]["cardTitle"] = "Casque de Iron Man Mk46";
    allArray["navMarv"][4]["cardPrice"] = "289";
    allArray["navMarv"][4]["cardText"] = "Copie conforme de la marque 46 du casque de Iron Man.";
    allArray["navMarv"][4]["cardTextExt"] = "Cette réplique du casque de Iron Man a été conçue par les plus grands expert de comics !";

    allArray["navMarv"][5] = []
    allArray["navMarv"][5]["cardImgSrc"] = "assets/img/items/comics/IMG-20190708-221214-01_720x.jpg";
    allArray["navMarv"][5]["cardImgAlt"] = "le mini réacteur Ark";
    allArray["navMarv"][5]["cardTitle"] = "le mini réacteur Ark";
    allArray["navMarv"][5]["cardPrice"] = "599";
    allArray["navMarv"][5]["cardText"] = "Copie conforme du réacteur Ark.";
    allArray["navMarv"][5]["cardTextExt"] = "Cette réplique du réacteur Ark a été conçue par les plus grands expert de comics !";

    allArray["navMarv"][6] = []
    allArray["navMarv"][6]["cardImgSrc"] = "assets/img/items/comics/IMG-20191012-235907-01_900x.jpg";
    allArray["navMarv"][6]["cardImgAlt"] = "Casque de Iron Man mk1";
    allArray["navMarv"][6]["cardTitle"] = "Casque de Iron Man mk1";
    allArray["navMarv"][6]["cardPrice"] = "249";
    allArray["navMarv"][6]["cardText"] = "Copie conforme de la marque 1 du casque de Iron Man.";
    allArray["navMarv"][6]["cardTextExt"] = "Cette réplique du casque de Iron Man a été conçue par les plus grands expert de comics !";

    allArray["navMarv"][7] = []
    allArray["navMarv"][7]["cardImgSrc"] = "assets/img/items/comics/king-arts-mps027-the-avengers-11th-scale-loki-helmet_540x.jpg";
    allArray["navMarv"][7]["cardImgAlt"] = "Casque de Loki";
    allArray["navMarv"][7]["cardTitle"] = "Casque de Loki";
    allArray["navMarv"][7]["cardPrice"] = "449";
    allArray["navMarv"][7]["cardText"] = "Copie conforme du casque de Loki.";
    allArray["navMarv"][7]["cardTextExt"] = "Cette réplique du casque de Loki a été conçue par les plus grands expert de comics !";

    allArray["navMarv"][8] = []
    allArray["navMarv"][8]["cardImgSrc"] = "assets/img/items/comics/Photo_1604675399017_720x.jpg";
    allArray["navMarv"][8]["cardImgAlt"] = "Casque de Black Panther";
    allArray["navMarv"][8]["cardTitle"] = "Casque de Black Panther";
    allArray["navMarv"][8]["cardPrice"] = "219";
    allArray["navMarv"][8]["cardText"] = "Copie conforme du casque de Black Panther.";
    allArray["navMarv"][8]["cardTextExt"] = "Cette réplique du casque de Black Panther a été conçue par les plus grands expert de comics !";

    allArray["navMarv"][9] = []
    allArray["navMarv"][9]["cardImgSrc"] = "assets/img/items/comics/TB2TCBxelDH8KJjSszcXXbDTFXa__37803843_720x.jpg";
    allArray["navMarv"][9]["cardImgAlt"] = "Casque de Flash";
    allArray["navMarv"][9]["cardTitle"] = "Sabre laser de Ahsoka Tano 2";
    allArray["navMarv"][9]["cardPrice"] = "258";
    allArray["navMarv"][9]["cardText"] = "Copie conforme du casque de Flash.";
    allArray["navMarv"][9]["cardTextExt"] = "Cette réplique du casque de Flash a été conçue par les plus grands expert de comics !!";

    allArray["navMarv"][10] = []
    allArray["navMarv"][10]["cardImgSrc"] = "assets/img/items/comics/casque-captain-america.jpg";
    allArray["navMarv"][10]["cardImgAlt"] = "captain america";
    allArray["navMarv"][10]["cardTitle"] = "Casque de Captain America";
    allArray["navMarv"][10]["cardPrice"] = "549";
    allArray["navMarv"][10]["cardText"] = "Jolie casque";
    allArray["navMarv"][10]["cardTextExt"] = "Steven « Steve » Rogers, alias Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. ";

    allArray["navMarv"][11] = []
    allArray["navMarv"][11]["cardImgSrc"] = "assets/img/items/comics/Batte-de-Baseball-Harley-Quinn.jpg";
    allArray["navMarv"][11]["cardImgAlt"] = "Batte de baseball";
    allArray["navMarv"][11]["cardTitle"] = "Batte de Baseball Harley Quinn";
    allArray["navMarv"][11]["cardPrice"] = "80";
    allArray["navMarv"][11]["cardText"] = "Cette batte de baseball fidèlement reproduite mesure 79 cm de long";
    allArray["navMarv"][11]["cardTextExt"] = "Cette batte de baseball est la réplique officielle de celle qu’utilise Harley Quinn dans Suicide Squad. Fabriquée en bois, elle est gravée de multiples écritures.";

    allArray["navMarv"][12] = []
    allArray["navMarv"][12]["cardImgSrc"] = "assets/img/items/comics/Masque-de-Batman.jpg";
    allArray["navMarv"][12]["cardImgAlt"] = "Masque de Batman";
    allArray["navMarv"][12]["cardTitle"] = "Masque de Batman en métal";
    allArray["navMarv"][12]["cardPrice"] = "400";
    allArray["navMarv"][12]["cardText"] = " Édition Spéciale Batman The Dark Knight";
    allArray["navMarv"][12]["cardTextExt"] = "Le masque en édition spéciale de Batman est une réplique authentique et fidèle de l’accessoire du Chevalier Noir vu dans le film The Dark Knight. Il mesure 37 cm sans le socle.";

    allArray["navMarv"][13] = []
    allArray["navMarv"][13]["cardImgSrc"] = "assets/img/items/comics/trident-aquaman.jpg";
    allArray["navMarv"][13]["cardImgAlt"] = "Trident du Roi des Sept Mers d'Aquaman";
    allArray["navMarv"][13]["cardTitle"] = "Trident d'Aquaman";
    allArray["navMarv"][13]["cardPrice"] = "70";
    allArray["navMarv"][13]["cardText"] = "Mesurant 186 cm, le Trident est livré en trois parties à monter.";
    allArray["navMarv"][13]["cardTextExt"] = "Le Trident d’Aquaman est une réplique authentique et fidèle de l’instrument vu dans les adaptations filmiques du super-héros. Composé de bois aggloméré, l’arme du roi des Sept Mers est faite en plastique avec une finition en peinture métallisée.";

    allArray["navMarv"][14] = []
    allArray["navMarv"][14]["cardImgSrc"] = "assets/img/items/comics/wonder-woman.jpg";
    allArray["navMarv"][14]["cardImgAlt"] = "Wonder Woman répliques accessoires film Wonder Woman";
    allArray["navMarv"][14]["cardTitle"] = "Répliques accessoires Wonder Woman ";
    allArray["navMarv"][14]["cardPrice"] = "188";
    allArray["navMarv"][14]["cardText"] = "Édition limitée à 5000 exemplaires";
    allArray["navMarv"][14]["cardTextExt"] = "Le set de répliques d’accessoires de Wonder Woman comprend la tiare de la super-héroïne, son lasso de vérité et ses brassards.";

    allArray["navMarv"][15] = []
    allArray["navMarv"][15]["cardImgSrc"] = "assets/img/items/comics/Batarang.jpg";
    allArray["navMarv"][15]["cardImgAlt"] = "Batarang de Batman The Dark Knight Rises";
    allArray["navMarv"][15]["cardTitle"] = "Batarang de Batman ";
    allArray["navMarv"][15]["cardPrice"] = "60";
    allArray["navMarv"][15]["cardText"] = "The Dark Knight Rises";
    allArray["navMarv"][15]["cardTextExt"] = "Le Batarang de Batman est une réplique authentique et fidèle de l’instrument vu dans la trilogie de Christopher Nolan. Mesurant environ 23 cm, l’arme du justicier est livré avec son support.";

    allArray["navMarv"][16] = []
    allArray["navMarv"][16]["cardImgSrc"] = "assets/img/items/comics/canne-joker.jpg";
    allArray["navMarv"][16]["cardImgAlt"] = "La canne du Joker Suicide Squad";
    allArray["navMarv"][16]["cardTitle"] = "Canne du Joker Suicide Squad";
    allArray["navMarv"][16]["cardPrice"] = "79";
    allArray["navMarv"][16]["cardText"] = "Accessoire fétiche du super-vilain";
    allArray["navMarv"][16]["cardTextExt"] = "La poignée de l’objet est dorée et ornée de strass élégants. La canne est de couleur violette et mesure 95 centimètres et pèse plus d’un kilo.";

    allArray["navMarv"][17] = []
    allArray["navMarv"][17]["cardImgSrc"] = "assets/img/items/comics/casque-wonder-woman.jpg";
    allArray["navMarv"][17]["cardImgAlt"] = "Casque de Wonder Woman";
    allArray["navMarv"][17]["cardTitle"] = "Modèle fini à la main en édition limitée, sous licence officielle.";
    allArray["navMarv"][17]["cardPrice"] = "490";
    allArray["navMarv"][17]["cardText"] = "Réplique Casque de Wonder Woman Golden Armor";
    allArray["navMarv"][17]["cardTextExt"] = "Wonder Woman est une super-héroïne de bande dessinée américaine créée par William Moulton Marston.";

    allArray["navMarv"][18] = []
    allArray["navMarv"][18]["cardImgSrc"] = "assets/img/items/comics/batmobile.jpg";
    allArray["navMarv"][18]["cardImgAlt"] = "Voiture du Batman";
    allArray["navMarv"][18]["cardTitle"] = "Batmobile";
    allArray["navMarv"][18]["cardPrice"] = "349000000";
    allArray["navMarv"][18]["cardText"] = "Missiles non fournis";
    allArray["navMarv"][18]["cardTextExt"] = "La Batmobile est le véhicule du personnage de bande dessinée Batman. ";

    allArray["navMarv"][19] = []
    allArray["navMarv"][19]["cardImgSrc"] = "assets/img/items/comics/marteau-marvel.jpg";
    allArray["navMarv"][19]["cardImgAlt"] = "Marteau de Thor";
    allArray["navMarv"][19]["cardTitle"] = "Marteau de Thor";
    allArray["navMarv"][19]["cardPrice"] = "70";
    allArray["navMarv"][19]["cardText"] = "Mjöllnir réplique marteau Marvel";
    allArray["navMarv"][19]["cardTextExt"] = "Superbe réplique à l'identique du Marteau Mjöllnir utilisé par Thor dans l'Univers Cinématographique Marvel. Entièrement fait en résine de haute qualité.";

    // Harry Data
    allArray["navHarry"][0] = []
    allArray["navHarry"][0]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-de-Sureau-version-Albus-Dumbledore-avec-boite-Ollivander.jpg";
    allArray["navHarry"][0]["cardImgAlt"] = "Baguette de Sureau";
    allArray["navHarry"][0]["cardTitle"] = "Baguette de Sureau";
    allArray["navHarry"][0]["cardPrice"] = "42";
    allArray["navHarry"][0]["cardText"] = "Version Albus Dumbledore avec boîte Ollivander.";
    allArray["navHarry"][0]["cardTextExt"] = "Cette réplique de la baguette de Dumbledore moulée en résine mesure 37 cm. Elle est emballée dans une somptueuse boîte doublée en velours, tel que vous pourriez la trouver chez le marchand Ollivander.";

    allArray["navHarry"][1] = []
    allArray["navHarry"][1]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-magique-de-Severus-Rogue-avec-boite-Ollivander.jpg";
    allArray["navHarry"][1]["cardImgAlt"] = "Baguette de Severus Rogue";
    allArray["navHarry"][1]["cardTitle"] = "Baguette de Severus Rogue";
    allArray["navHarry"][1]["cardPrice"] = "42";
    allArray["navHarry"][1]["cardText"] = "Baguette magique de Severus Rogue avec boîte Ollivander.";
    allArray["navHarry"][1]["cardTextExt"] = "La baguette est une réplique authentique de celle vue dans les films de la saga. Faite en résine de 34 cm, elle est présentée dans la boîte de collection Ollivander avec un écrin en velours moulé à la forme de la baguette.";

    allArray["navHarry"][2] = []
    allArray["navHarry"][2]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-magique-d-Hermione-Granger-avec-boite-Ollivander.jpg";
    allArray["navHarry"][2]["cardImgAlt"] = "Baguette d'Hermione Granger";
    allArray["navHarry"][2]["cardTitle"] = "Baguette d'Hermione Granger";
    allArray["navHarry"][2]["cardPrice"] = "42";
    allArray["navHarry"][2]["cardText"] = "Baguette magique d'Hermione Granger avec boîte Ollivander.";
    allArray["navHarry"][2]["cardTextExt"] = "La baguette d’Hermione Granger est présentée dans une boîte de velours originale tout droit sortie de la boutique d’Ollivander. Composée de résine, elle imite à merveille le bois de vigne.";

    allArray["navHarry"][3] = []
    allArray["navHarry"][3]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-magique-de-Harry-Potter-avec-boite-Ollivander.jpg";
    allArray["navHarry"][3]["cardImgAlt"] = "Baguette d'Harry Potter";
    allArray["navHarry"][3]["cardTitle"] = "Baguette d'Harry Potter";
    allArray["navHarry"][3]["cardPrice"] = "42";
    allArray["navHarry"][3]["cardText"] = "Baguette magique d'Harry Potter avec boîte Ollivander.";
    allArray["navHarry"][3]["cardTextExt"] = "La baguette est une réplique authentique de celle vue dans les films de la saga. Faite en résine imitant le bois de houx, elle est présentée dans la boîte de collection Ollivander avec un écrin en velours moulé à la forme de la baguette.";

    allArray["navHarry"][4] = []
    allArray["navHarry"][4]["cardImgSrc"] = "assets/img/items/harry-potter/Bague-de-Gaunt.jpg";
    allArray["navHarry"][4]["cardImgAlt"] = "Bague de Gaunt";
    allArray["navHarry"][4]["cardTitle"] = "Bague de Gaunt";
    allArray["navHarry"][4]["cardPrice"] = "55.95";
    allArray["navHarry"][4]["cardText"] = "Avec la Baguette de Sureau et la Cape d’Invisibilité, elle est une des Reliques de la Mort.";
    allArray["navHarry"][4]["cardTextExt"] = "Faite en plaqué or, la bague est livrée avec sa boîte triangulaire qui sert de présentoir, laissant le choix au propriétaire de la porter ou de la ranger dans sa collection. ";

    allArray["navHarry"][5] = []
    allArray["navHarry"][5]["cardImgSrc"] = "assets/img/items/harry-potter/Lanterne-de-Rubeus-Hagrid.jpg";
    allArray["navHarry"][5]["cardImgAlt"] = "Lanterne de Rubeus Hagrid";
    allArray["navHarry"][5]["cardTitle"] = "Lanterne de Rubeus Hagrid";
    allArray["navHarry"][5]["cardPrice"] = "74";
    allArray["navHarry"][5]["cardText"] = "Rubeus Hagrid ne se sépare jamais de sa lanterne.";
    allArray["navHarry"][5]["cardTextExt"] = "Cette réplique à taille réelle de la lanterne de Rubeus Hagrid est faite en résine et en lucite. Elle mesure 32 cm de hauteur.";

    allArray["navHarry"][6] = []
    allArray["navHarry"][6]["cardImgSrc"] = "assets/img/items/harry-potter/Replique-Collector-du-balai-l-Eclair-de-feu.jpg";
    allArray["navHarry"][6]["cardImgAlt"] = "Réplique du balai l'Eclair de feu";
    allArray["navHarry"][6]["cardTitle"] = "Réplique du balai l'Eclair de feu";
    allArray["navHarry"][6]["cardPrice"] = "328";
    allArray["navHarry"][6]["cardText"] = "L'Éclair de Feu est le balai le plus rapide du monde.";
    allArray["navHarry"][6]["cardTextExt"] = "Livrée avec son support mural et de taille réelle, cette véritable réplique mesure 1m47 et Permet d’atteindre 240 km/h en seulement dix secondes. Le balai est composé de deux parties à emboîter, son manche est en bois reconstitué, les cale-pieds sont en métal et les brindilles en plastique.";

    allArray["navHarry"][7] = []
    allArray["navHarry"][7]["cardImgSrc"] = "assets/img/items/harry-potter/Boule-de-cristal-de-divination.jpg";
    allArray["navHarry"][7]["cardImgAlt"] = "Boule de cristal de divination";
    allArray["navHarry"][7]["cardTitle"] = "Boule de cristal de divination";
    allArray["navHarry"][7]["cardPrice"] = "62";
    allArray["navHarry"][7]["cardText"] = "Utilisée pendant les cours de divination de Mme Trelawney.";
    allArray["navHarry"][7]["cardTextExt"] = "Cette boule de cristal est en verre, soutenue par trois éléphants posés sur un socle. La base de l'objet est en porcelaine et la boule de cristal, en verre, mesure 7 cm de diamètre. L'ensemble fait 12,5 cm de haut.";

    allArray["navHarry"][8] = []
    allArray["navHarry"][8]["cardImgSrc"] = "assets/img/items/harry-potter/Baguettes-des-Champions.jpg";
    allArray["navHarry"][8]["cardImgAlt"] = "Baguettes des Champions";
    allArray["navHarry"][8]["cardTitle"] = "Baguettes des Champions";
    allArray["navHarry"][8]["cardPrice"] = "100000000";
    allArray["navHarry"][8]["cardText"] = "Baguettes des Champions du Tournoi des 3 Sorciers avec présentoir";
    allArray["navHarry"][8]["cardTextExt"] = "Ce présentoir des Champions du Tournoi des 3 Sorciers est idéal pour tous les fervents supporters de ce concours. Fabriqué en bois et plexiglass, le présentoir mesure 43 cm de hauteur et contient les quatre baguettes des Champions du Tournoi.";
    
    allArray["navHarry"][9] = []
    allArray["navHarry"][9]["cardImgSrc"] = "assets/img/items/harry-potter/Reliques-de-la-Mort.jpg";
    allArray["navHarry"][9]["cardImgAlt"] = "Reliques de la Mort - 5 baguettes magiques inclues";
    allArray["navHarry"][9]["cardTitle"] = "Reliques de la Mort";
    allArray["navHarry"][9]["cardPrice"] = "54";
    allArray["navHarry"][9]["cardText"] = "5 baguettes magiques inclues";
    allArray["navHarry"][9]["cardTextExt"] = "Présentoir pour 5 baguettes magiques symbolisant les Reliques de la Mort. Cinq baguettes sont inclues, sans boîte individuelle";

    allArray["navHarry"][10] = []
    allArray["navHarry"][10]["cardImgSrc"] = "assets/img/items/harry-potter/Retourneur.jpg";
    allArray["navHarry"][10]["cardImgAlt"] = "Retourneur de Temps";
    allArray["navHarry"][10]["cardTitle"] = "Retourneur de Temps";
    allArray["navHarry"][10]["cardPrice"] = "68";
    allArray["navHarry"][10]["cardText"] = "Retourneur de Temps et vitrine de présentation";
    allArray["navHarry"][10]["cardTextExt"] = "Artefact précieux pour les sorciers pressés, le Retourneur de Temps permet de revivre des évènements passés.";

    allArray["navHarry"][11] = []
    allArray["navHarry"][11]["cardImgSrc"] = "assets/img/items/harry-potter/Collection-de-Baguettes.jpg";
    allArray["navHarry"][11]["cardImgAlt"] = "Collection de Baguettes";
    allArray["navHarry"][11]["cardTitle"] = "Baguettes de l’Armée de Dumbledore";
    allArray["navHarry"][11]["cardPrice"] = "256";
    allArray["navHarry"][11]["cardText"] = "Collection de Baguettes de l’Armée de Dumbledore avec présentoir";
    allArray["navHarry"][11]["cardTextExt"] = "Ce présentoir pour baguettes de l’Armée de Dumbledore est idéal pour tous les ennemis de Voldemort. Le présentoir a la forme d’un parchemin, sur lequel sont exposées les 6 baguettes des élèves membres et fondateurs de cette société secrète.";

    allArray["navHarry"][12] = []
    allArray["navHarry"][12]["cardImgSrc"] = "assets/img/items/harry-potter/baguette-harry-potter.jpg";
    allArray["navHarry"][12]["cardImgAlt"] = "Baguette magique de Harry Potter";
    allArray["navHarry"][12]["cardTitle"] = "Baguette magique de Harry Potter";
    allArray["navHarry"][12]["cardPrice"] = "32";
    allArray["navHarry"][12]["cardText"] = "Baguette du personnage principal de la saga";
    allArray["navHarry"][12]["cardTextExt"] = "Cette baguette en résine est fournie dans une boîte de collection gravée au nom d’Harry Potter. Le manche de l’objet magique imite l’écorce d'une branche de houx.";

    allArray["navHarry"][13] = []
    allArray["navHarry"][13]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-magique-d'Hermione-Granger.jpg";
    allArray["navHarry"][13]["cardImgAlt"] = "Baguette magique d'Hermione Granger";
    allArray["navHarry"][13]["cardTitle"] = "Baguette magique d'Hermione Granger";
    allArray["navHarry"][13]["cardPrice"] = "32";
    allArray["navHarry"][13]["cardText"] = "Hermione Granger est la sorcière la plus brillante de sa génération.";
    allArray["navHarry"][13]["cardTextExt"] = "La baguette est une réplique authentique de celle vue dans les films de la saga. Faite en résine imitant le bois de vigne et parée de motifs en relief.";

    allArray["navHarry"][14] = []
    allArray["navHarry"][14]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-magique-de-Luna-Lovegood.jpg";
    allArray["navHarry"][14]["cardImgAlt"] = "Baguette magique de luna lovegood";
    allArray["navHarry"][14]["cardTitle"] = "Baguette magique de Luna Lovegood";
    allArray["navHarry"][14]["cardPrice"] = "32";
    allArray["navHarry"][14]["cardText"] = "Baguette de Jedi";
    allArray["navHarry"][14]["cardTextExt"] = "Véritable réplique de la baguette de Luna Lovegood présente dans les films Harry Potter, l’objet magique mesure 34 cm.";

    allArray["navHarry"][15] = []
    allArray["navHarry"][15]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-magique-de-Ron-Weasley.jpg";
    allArray["navHarry"][15]["cardImgAlt"] = "Baguette de Ron";
    allArray["navHarry"][15]["cardTitle"] = "Baguette magique de Ron Weasley";
    allArray["navHarry"][15]["cardPrice"] = "32";
    allArray["navHarry"][15]["cardText"] = "Meilleur ami de Harry Potter et petit copain de la belle Hermione Granger";
    allArray["navHarry"][15]["cardTextExt"] = "Véritable reproduction de la baguette magique de Ron Weasley dans les films Harry Potter, cet objet en résine mesure 30 cm.";

    allArray["navHarry"][16] = []
    allArray["navHarry"][16]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-magique-de-Drago-Malefoy.jpg";
    allArray["navHarry"][16]["cardImgAlt"] = "Baguette de Drago";
    allArray["navHarry"][16]["cardTitle"] = "Baguette magique de Drago Malefoy";
    allArray["navHarry"][16]["cardPrice"] = "32";
    allArray["navHarry"][16]["cardText"] = "Drago est l’ennemi juré d’Harry Potter";
    allArray["navHarry"][16]["cardTextExt"] = "La baguette de Drago Malefoy est une réplique authentique de celle vue dans les films de la saga. Faite en résine imitant un bois sombre d’aubépine et agrémentée d’un manche noir.";

    allArray["navHarry"][17] = []
    allArray["navHarry"][17]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-magique-de-Sirius-Black.jpg";
    allArray["navHarry"][17]["cardImgAlt"] = "Baguette de Sirius";
    allArray["navHarry"][17]["cardTitle"] = "Baguette de Sirius Black";
    allArray["navHarry"][17]["cardPrice"] = "32";
    allArray["navHarry"][17]["cardText"] = "Sirius Black est le parrain d’Harry Potter";
    allArray["navHarry"][17]["cardTextExt"] = "Cette baguette magique de Sirius Black est une reproduction fidèle de celle que possède le personnage dans les films Harry Potter. ";

    allArray["navHarry"][18] = []
    allArray["navHarry"][18]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-magique-de-Remus-Lupin.jpg";
    allArray["navHarry"][18]["cardImgAlt"] = "Baguette de Remus Lupin";
    allArray["navHarry"][18]["cardTitle"] = "Baguette de Remus Lupin";
    allArray["navHarry"][18]["cardPrice"] = "32";
    allArray["navHarry"][18]["cardText"] = "Une jolie baguette";
    allArray["navHarry"][18]["cardTextExt"] = "La baguette de Remus Lupin est une réplique authentique de celle vue dans les films de la saga.";

    allArray["navHarry"][19] = []
    allArray["navHarry"][19]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-de-Fenrir-Greyback.jpg";
    allArray["navHarry"][19]["cardImgAlt"] = "Baguette de Fenrir Greyback";
    allArray["navHarry"][19]["cardTitle"] = "Baguette de Fenrir Greyback";
    allArray["navHarry"][19]["cardPrice"] = "32";
    allArray["navHarry"][19]["cardText"] = "Fenrir Greyback est un loup-garou ";
    allArray["navHarry"][19]["cardTextExt"] = "Réplique officielle de celle présente dans les films Harry Potter, cette baguette de Fenrir Greyback est idéale pour tous les partisans de Voldemort !";

    allArray["navHarry"][20] = []
    allArray["navHarry"][20]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-de-Kingsley-Shacklebolt.jpg";
    allArray["navHarry"][20]["cardImgAlt"] = "Baguette de Kingsley Shacklebolt";
    allArray["navHarry"][20]["cardTitle"] = "Baguette de Kingsley Shacklebolt";
    allArray["navHarry"][20]["cardPrice"] = "32";
    allArray["navHarry"][20]["cardText"] = "Harry Potter > Marvel & Star Wars";
    allArray["navHarry"][20]["cardTextExt"] = "Cette baguette de Kingsley Shacklebolt est la réplique officielle de celle présente dans les films Harry Potter. Fabriquée en résine, elle mesure 36 cm. ";

    allArray["navHarry"][21] = []
    allArray["navHarry"][21]["cardImgSrc"] = "assets/img/items/harry-potter/Baguette-de-Rufus-Scrimgeour.jpg";
    allArray["navHarry"][21]["cardImgAlt"] = "Baguette de Rufus Scrimgeour";
    allArray["navHarry"][21]["cardTitle"] = "Baguette de Rufus Scrimgeour";
    allArray["navHarry"][21]["cardPrice"] = "32";
    allArray["navHarry"][21]["cardText"] = " Rufus Scrimgeour est un sorcier reconnu parmi ses pairs.";
    allArray["navHarry"][21]["cardTextExt"] = "La baguette de Rufus Scrimgeour est une réplique authentique de celle vue dans les films de la saga. Faite en résine imitant un bois brun foncé dont le manche est poli et cerclé d'une bague argentée qui sépare la poignée.";

    allArray["navHarry"][22] = []
    allArray["navHarry"][22]["cardImgSrc"] = "assets/img/items/harry-potter/Sac-Hermione-Granger.jpg";
    allArray["navHarry"][22]["cardImgAlt"] = "Sac d'Hermione Granger";
    allArray["navHarry"][22]["cardTitle"] = "Sac d'Hermione Granger";
    allArray["navHarry"][22]["cardPrice"] = "32";
    allArray["navHarry"][22]["cardText"] = "Sac extensible à cordon de serrage";
    allArray["navHarry"][22]["cardTextExt"] = " Cette réplique exacte mesure 20 x 20 cm : elle est constituée d’une doublure en polyester et d’un tissu en velours, de la viscose et du polyamide.";
    
    // Star Wars Data
    allArray["navStar"][0] = []
    allArray["navStar"][0]["cardImgSrc"] = "assets/img/items/starwars/revandechu/reborn-1_740x.jpg";
    allArray["navStar"][0]["cardImgAlt"] = "Sabre laser Revan déchu";
    allArray["navStar"][0]["cardTitle"] = "Sabre laser Revan déchu";
    allArray["navStar"][0]["cardPrice"] = "150";
    allArray["navStar"][0]["cardText"] = "Copie conforme du sabre laser de Dark Revan.";
    allArray["navStar"][0]["cardTextExt"] = "Cette réplique du sabre laser de Dark Revan a été conçue par les plus grands expert de sabre laser !";

    allArray["navStar"][1] = []
    allArray["navStar"][1]["cardImgSrc"] = "assets/img/items/starwars/malgus/jugg-4_740x.jpg";
    allArray["navStar"][1]["cardImgAlt"] = "Sabre laser Dark Malgus";
    allArray["navStar"][1]["cardTitle"] = "Sabre laser Dark Malgus";
    allArray["navStar"][1]["cardPrice"] = "150";
    allArray["navStar"][1]["cardText"] = "Copie conforme du sabre laser de Dark Malgus.";
    allArray["navStar"][1]["cardTextExt"] = "Cette réplique du sabre laser de Dark Malgus a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][2] = []
    allArray["navStar"][2]["cardImgSrc"] = "assets/img/items/starwars/revanjedi/fallen-1_540x.jpg";
    allArray["navStar"][2]["cardImgAlt"] = "Sabre laser Revan jedi";
    allArray["navStar"][2]["cardTitle"] = "Sabre laser Revan jedi";
    allArray["navStar"][2]["cardPrice"] = "150";
    allArray["navStar"][2]["cardText"] = "Copie conforme du sabre laser de Revan.";
    allArray["navStar"][2]["cardTextExt"] = "Cette réplique du sabre laser de Revan a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][3] = []
    allArray["navStar"][3]["cardImgSrc"] = "assets/img/items/starwars/dooku/count-1_740x.jpg";
    allArray["navStar"][3]["cardImgAlt"] = "Sabre laser Dooku";
    allArray["navStar"][3]["cardTitle"] = "Sabre laser Dooku";
    allArray["navStar"][3]["cardPrice"] = "150";
    allArray["navStar"][3]["cardText"] = "Copie conforme du sabre laser de Dark Tyrannus.";
    allArray["navStar"][3]["cardTextExt"] = "Cette réplique du sabre laser de Dark Tyrannus a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][4] = []
    allArray["navStar"][4]["cardImgSrc"] = "assets/img/items/starwars/quigon/03_bf769c79-b163-41f7-921b-fdfb009a6fe3_740x.jpg";
    allArray["navStar"][4]["cardImgAlt"] = "Sabre laser Qui-Gon Jin";
    allArray["navStar"][4]["cardTitle"] = "Sabre laser Qui-Gon Jin";
    allArray["navStar"][4]["cardPrice"] = "150";
    allArray["navStar"][4]["cardText"] = "Copie conforme du sabre laser de Qui-Gon Jin.";
    allArray["navStar"][4]["cardTextExt"] = "Cette réplique du sabre laser de Qui-Gon Jin a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][5] = []
    allArray["navStar"][5]["cardImgSrc"] = "assets/img/items/starwars/obiwanpadawan/avenger-v1-4_740x.jpg";
    allArray["navStar"][5]["cardImgAlt"] = "Sabre laser Obi wan Kenobi";
    allArray["navStar"][5]["cardTitle"] = "Sabre laser Obi wan Kenobi";
    allArray["navStar"][5]["cardPrice"] = "150";
    allArray["navStar"][5]["cardText"] = "Copie conforme du sabre laser de Obi wan Kenobi.";
    allArray["navStar"][5]["cardTextExt"] = "Cette réplique du sabre laser de Obi wan Kenobi a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][6] = []
    allArray["navStar"][6]["cardImgSrc"] = "assets/img/items/starwars/maul/mauler-1_740x.jpg";
    allArray["navStar"][6]["cardImgAlt"] = "Sabre laser de Dark Maul";
    allArray["navStar"][6]["cardTitle"] = "Sabre laser de Dark Maul";
    allArray["navStar"][6]["cardPrice"] = "150";
    allArray["navStar"][6]["cardText"] = "Copie conforme du sabre laser de Dark Maul.";
    allArray["navStar"][6]["cardTextExt"] = "Cette réplique du sabre laser de Dark Maul a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][7] = []
    allArray["navStar"][7]["cardImgSrc"] = "assets/img/items/starwars/luke/ps-3_740x.jpg";
    allArray["navStar"][7]["cardImgAlt"] = "Sabre laser de Luke Skywalker";
    allArray["navStar"][7]["cardTitle"] = "Sabre laser de Luke Skywalker";
    allArray["navStar"][7]["cardPrice"] = "150";
    allArray["navStar"][7]["cardText"] = "Copie conforme du sabre laser de Luke Skywalker.";
    allArray["navStar"][7]["cardTextExt"] = "Cette réplique du sabre laser de Luke Skywalker a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][8] = []
    allArray["navStar"][8]["cardImgSrc"] = "assets/img/items/starwars/ahsoka1/katano-v1-4_740x.jpg";
    allArray["navStar"][8]["cardImgAlt"] = "Sabre laser de Ahsoka Tano 1";
    allArray["navStar"][8]["cardTitle"] = "Sabre laser de Ahsoka Tano 1";
    allArray["navStar"][8]["cardPrice"] = "150";
    allArray["navStar"][8]["cardText"] = "Copie conforme du sabre laser de Ahsoka Tano 1.";
    allArray["navStar"][8]["cardTextExt"] = "Cette réplique du sabre laser de Ahsoka Tano 1 a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][9] = []
    allArray["navStar"][9]["cardImgSrc"] = "assets/img/items/starwars/ahsoka2/phoenix-1_740x.jpg";
    allArray["navStar"][9]["cardImgAlt"] = "Sabre laser de Ahsoka Tano 2";
    allArray["navStar"][9]["cardTitle"] = "Sabre laser de Ahsoka Tano 2";
    allArray["navStar"][9]["cardPrice"] = "150";
    allArray["navStar"][9]["cardText"] = "Copie conforme du sabre laser de Ahsoka Tano 2.";
    allArray["navStar"][9]["cardTextExt"] = "Cette réplique du sabre laser de Ahsoka Tano 2 a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][10] = []
    allArray["navStar"][10]["cardImgSrc"] = "assets/img/items/starwars/anakin/graflex9_740x.jpg";
    allArray["navStar"][10]["cardImgAlt"] = "Sabre laser de Anakin Skywalker";
    allArray["navStar"][10]["cardTitle"] = "Sabre laser de Anakin Skywalker";
    allArray["navStar"][10]["cardPrice"] = "150";
    allArray["navStar"][10]["cardText"] = "Copie conforme du sabre laser de Anakin Skywalker.";
    allArray["navStar"][10]["cardTextExt"] = "Cette réplique du sabre laser de Anakin Skywalker a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][11] = []
    allArray["navStar"][11]["cardImgSrc"] = "assets/img/items/starwars/asajj/04-noyellow_740x.jpg"
    allArray["navStar"][11]["cardImgAlt"] = "Sabre laser de Asajj Ventress";
    allArray["navStar"][11]["cardTitle"] = "Sabre laser de Asajj Ventress";
    allArray["navStar"][11]["cardPrice"] = "150";
    allArray["navStar"][11]["cardText"] = "Copie conforme du sabre laser de Asajj Ventress.";
    allArray["navStar"][11]["cardTextExt"] = "Cette réplique du sabre laser de Asajj Ventress a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][12] = []
    allArray["navStar"][12]["cardImgSrc"] = "assets/img/items/starwars/axe/crusader1_b97a1ea8-9484-4272-b1e9-12f016b1ecb8_740x.jpg"
    allArray["navStar"][12]["cardImgAlt"] = "Hache laser";
    allArray["navStar"][12]["cardTitle"] = "Hache laser";
    allArray["navStar"][12]["cardPrice"] = "666";
    allArray["navStar"][12]["cardText"] = "Copie conforme d'une Hache laser";
    allArray["navStar"][12]["cardTextExt"] = "Les légendes racontent que seuls les maraudeurs se battaient avec la Hache laser";

    allArray["navStar"][13] = []
    allArray["navStar"][13]["cardImgSrc"] = "assets/img/items/starwars/battle/gladii-1_740x.jpg"
    allArray["navStar"][13]["cardImgAlt"] = "Sabre laser double de combat";
    allArray["navStar"][13]["cardTitle"] = "Sabre laser double de combat";
    allArray["navStar"][13]["cardPrice"] = "300";
    allArray["navStar"][13]["cardText"] = "Copie conforme du sabre laser double de combat.";
    allArray["navStar"][13]["cardTextExt"] = "Cette réplique du sabre laser double de combat a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][14] = []
    allArray["navStar"][14]["cardImgSrc"] = "assets/img/items/starwars/darkrey/03_dd74fbc6-334a-4d58-938a-c5a2c186fda6_740x.jpg"
    allArray["navStar"][14]["cardImgAlt"] = "Sabre laser de Rey Palpatine";
    allArray["navStar"][14]["cardTitle"] = "Sabre laser de Rey Palpatine";
    allArray["navStar"][14]["cardPrice"] = "300";
    allArray["navStar"][14]["cardText"] = "Copie conforme du sabre laser de Rey Palpatine.";
    allArray["navStar"][14]["cardTextExt"] = "Cette réplique du sabre laser de Rey Palpatine a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][15] = []
    allArray["navStar"][15]["cardImgSrc"] = "assets/img/items/starwars/guardian/templar-4_740x.jpg"
    allArray["navStar"][15]["cardImgAlt"] = "Sabre laser double de protection";
    allArray["navStar"][15]["cardTitle"] = "Sabre laser double de protection";
    allArray["navStar"][15]["cardPrice"] = "300";
    allArray["navStar"][15]["cardText"] = "Copie conforme du sabre laser double de protection.";
    allArray["navStar"][15]["cardTextExt"] = "Cette réplique du sabre laser double de protection a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][16] = []
    allArray["navStar"][16]["cardImgSrc"] = "assets/img/items/starwars/kal/fallenorder-3_740x.jpg"
    allArray["navStar"][16]["cardImgAlt"] = "Sabre laser de Jaro Tapal";
    allArray["navStar"][16]["cardTitle"] = "Sabre laser de Jaro Tapal";
    allArray["navStar"][16]["cardPrice"] = "150";
    allArray["navStar"][16]["cardText"] = "Copie conforme du sabre laser de Jaro Tapal.";
    allArray["navStar"][16]["cardTextExt"] = "Cette réplique du sabre laser de Jaro Tapal a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][17] = []
    allArray["navStar"][17]["cardImgSrc"] = "assets/img/items/starwars/leia/03_74618d4a-92c6-49cf-b30f-f459cc2e0b63_740x.jpg"
    allArray["navStar"][17]["cardImgAlt"] = "Sabre laser de Leia Organa";
    allArray["navStar"][17]["cardTitle"] = "Sabre laser de Leia Organa";
    allArray["navStar"][17]["cardPrice"] = "150";
    allArray["navStar"][17]["cardText"] = "Copie conforme du sabre laser de Leia Organa.";
    allArray["navStar"][17]["cardTextExt"] = "Cette réplique du sabre laser de Leia Organa a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][18] = []
    allArray["navStar"][18]["cardImgSrc"] = "assets/img/items/starwars/luke/ps-3_740x.jpg"
    allArray["navStar"][18]["cardImgAlt"] = "Sabre laser de Luke Skywalker";
    allArray["navStar"][18]["cardTitle"] = "Sabre laser de Luke Skywalker";
    allArray["navStar"][18]["cardPrice"] = "150";
    allArray["navStar"][18]["cardText"] = "Copie conforme du sabre laser de Luke Skywalker.";
    allArray["navStar"][18]["cardTextExt"] = "Cette réplique du sabre laser de Luke Skywalker a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][19] = []
    allArray["navStar"][19]["cardImgSrc"] = "assets/img/items/starwars/obiwan/03_bd8b60f2-908c-4643-a3ed-bdb1c3458db8_540x.jpg"
    allArray["navStar"][19]["cardImgAlt"] = "Sabre laser de Obi wan (maitre)";
    allArray["navStar"][19]["cardTitle"] = "Sabre laser de Obi wan (maitre)";
    allArray["navStar"][19]["cardPrice"] = "150";
    allArray["navStar"][19]["cardText"] = "Copie conforme du sabre laser de Obi wan (maitre).";
    allArray["navStar"][19]["cardTextExt"] = "Cette réplique du sabre laser de Obi wan (maitre) a été conçue par les plus grands experts de sabre laser !";

    allArray["navStar"][20] = []
    allArray["navStar"][20]["cardImgSrc"] = "assets/img/items/starwars/vador/mpp3-5_740x.jpg"
    allArray["navStar"][20]["cardImgAlt"] = "Sabre laser de Dark Vador";
    allArray["navStar"][20]["cardTitle"] = "Sabre laser de Dark Vador";
    allArray["navStar"][20]["cardPrice"] = "150";
    allArray["navStar"][20]["cardText"] = "Copie conforme du sabre laser de Dark Vador.";
    allArray["navStar"][20]["cardTextExt"] = "Cette réplique du sabre laser de Dark Vador a été conçue par les plus grands experts de sabre laser !";