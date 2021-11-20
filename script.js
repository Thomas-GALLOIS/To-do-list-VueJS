const Component = {
  data() {
    return {
      tache: "",

      tableauAFaire: [],
      tableauEnCours: [],
      showAFaire: true,
      showEnCours: true,
    };
  },

  methods: {
    //Récupération de la data tache via l'input
    newTache(e) {
      this.tache = e.target.value;
      console.log(this.tache);
    },

    //Ajout de la tache dans le tableauAFaire au click du button
    addTache() {
      this.tableauAFaire.push(this.tache);
      this.tache = "";
    },

    // au click du button, ajout via l'index du tableauAFaire ds le tableauEnCours et splice dans le tableauAFaire
    addTacheBis(index) {
      this.tableauEnCours.push(this.tableauAFaire[index]);
      this.tableauAFaire.splice(index, 1);
    },
    // au click, suppression du tableauEnCours via l'index
    deleteButton(index) {
      this.tableauEnCours.splice(index, 1);
    },

    //Bonus pour afficher ou masquer du contenu au click d'un button
    mask() {
      this.showAFaire = !this.showAFaire;
    },
    newMask() {
      this.showEnCours = !this.showEnCours;
    },
  },
};

Vue.createApp(Component).mount("#root");
