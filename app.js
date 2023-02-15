const express = require("express");
const hbs = require("hbs");
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

let dataJacquesBrel = {
  modificationdate: "2023-01-23",
  url: "https://data.bnf.fr/11893887/jacques_brel/",
  title:
    "Jacques Brel (1929-1978) - Auteur - Ressources de la Bibliothèque nationale de France",
  description:
    "Toutes les informations de la Bibliothèque Nationale de France sur : Jacques Brel (1929-1978)",
  site_name: "data.bnf.fr",
  type: "author",
  image:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Jacques_Brel-2_1963.jpg",
  nationality: ["Belgique"],
  notes: [
    "Auteur-compositeur-interprète. - Chanteur de variétés. - Acteur et réalisateur",
    "Prénoms complets : Jacques, Romain, Georges",
  ],
  ark: "ark:/12148/cb11893887c",
  label: "Jacques Brel (1929-1978)",
  noticetype: "PEP",
  isni: "000000012118445X",
  firstname: "Jacques",
  surname: "Brel",
  birthdate: "1929-04-08",
  deathdate: "1978-10-09",
  works: [
    {
      title: "Amsterdam",
      ark: "ark:/12148/cb14717994g",
      url: "https://data.bnf.fr/14717994/jacques_brel_amsterdam/",
      noticetype: "TUM",
      date: "1964",
    },
    {
      title: "L'aventure",
      ark: "ark:/12148/cb147180095",
      url: "https://data.bnf.fr/14718009/jacques_brel_l_aventure/",
      noticetype: "TUM",
      date: "1958",
    },
    {
      title: "Les bonbons",
      ark: "ark:/12148/cb147180242",
      url: "https://data.bnf.fr/14718024/jacques_brel_les_bonbons/",
      noticetype: "TUM",
    },
    {
      title: "La bourrée du célibataire",
      ark: "ark:/12148/cb147180122",
      url: "https://data.bnf.fr/14718012/jacques_brel_la_bourree_du_celibataire/",
      noticetype: "TUM",
      date: "1957",
    },
    {
      title: "Bruxelles",
      ark: "ark:/12148/cb14789297h",
      url: "https://data.bnf.fr/14789297/gerard_jouannest_jacques_brel_bruxelles/",
      noticetype: "TUM",
      date: "1962",
    },
    {
      title: "Comment tuer l'amant de sa femme",
      ark: "ark:/12148/cb14717998v",
      url: "https://data.bnf.fr/14717998/gerard_jouannest_jacques_brel_comment_tuer_l_amant_de_sa_femme/",
      noticetype: "TUM",
      date: "1968",
    },
    {
      title: "Le diable",
      ark: "ark:/12148/cb147180184",
      url: "https://data.bnf.fr/14718018/jacques_brel_le_diable/",
      noticetype: "TUM",
      date: "1954",
    },
    {
      title: "Les Flamandes",
      ark: "ark:/12148/cb147899127",
      url: "https://data.bnf.fr/14789912/jacques_brel_les_flamandes/",
      noticetype: "TUM",
      date: "1959",
    },
    {
      title: "Grand-mère",
      ark: "ark:/12148/cb14718002r",
      url: "https://data.bnf.fr/14718002/jacques_brel_grand-mere/",
      noticetype: "TUM",
      date: "1966",
    },
    {
      title: "Heureux",
      ark: "ark:/12148/cb147180033",
      url: "https://data.bnf.fr/14718003/jacques_brel_heureux/",
      noticetype: "TUM",
    },
    {
      title: "Il neige sur Liège",
      ark: "ark:/12148/cb16955697n",
      url: "https://data.bnf.fr/16955697/jacques_brel_il_neige_sur_liege/",
      noticetype: "TUM",
    },
    {
      title: "Le moribond",
      ark: "ark:/12148/cb14718020p",
      url: "https://data.bnf.fr/14718020/jacques_brel_le_moribond/",
      noticetype: "TUM",
    },
    {
      title: "Ne me quitte pas",
      ark: "ark:/12148/cb14718034c",
      url: "https://data.bnf.fr/14718034/jacques_brel_ne_me_quitte_pas/",
      noticetype: "TUM",
      date: "1959",
    },
    {
      title: "Orly",
      ark: "ark:/12148/cb169554675",
      url: "https://data.bnf.fr/16955467/jacques_brel_orly/",
      noticetype: "TUM",
      date: "1977",
    },
    {
      title: "Le plat pays",
      ark: "ark:/12148/cb147180211",
      url: "https://data.bnf.fr/14718021/jacques_brel_le_plat_pays/",
      noticetype: "TUM",
      date: "1962",
    },
    {
      title: "Quand on n'a que l'amour",
      ark: "ark:/12148/cb147938868",
      url: "https://data.bnf.fr/14793886/jacques_brel_quand_on_n_a_que_l_amour/",
      noticetype: "TUM",
      date: "1956",
    },
    {
      title: "Voir un ami pleurer",
      ark: "ark:/12148/cb14718044p",
      url: "https://data.bnf.fr/14718044/jacques_brel_voir_un_ami_pleurer/",
      noticetype: "TUM",
      date: "1977",
    },
  ],
};

app.get("/home", (req, res, next) => {
  res.render("index", dataJacquesBrel);
});

app.get("/about", (req, res, next) => {
  res.render("about", dataJacquesBrel);
});

app.get("/work", (req, res, next) => {
  res.render("work", dataJacquesBrel);
});

app.listen(port, () => console.log(`My first app listening on port ${port}!`));
