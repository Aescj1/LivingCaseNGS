<template>
<v-dialog v-model="dialog" max-width="1000px">
        <v-card>
          <v-card-title>Dataset Formular </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                    <v-flex> 
                  <v-text-field v-model="editedPatient.bactNr" label="Bact Nummer"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.altId" label="alternative ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.priority" label="Priority"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.pathogen" label="Pathogen (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.patName" label="Patientenname"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.birthdate" label="Geburtsdatum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.entry" label="Eingang"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.abnahme" label="Abnahme"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.sender" label="Einsender"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.station" label="Station"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.editing" label="Bearbeitungsdatum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.material" label="Material"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsProject" label="NGS - Prokect"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.dnaPrepDate" label="DNA Vorbereitungsdatum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.dnaKonz" label="DNA Konzentration"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.dnaVisum" label="DNA Visum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.runNr" label="Run NR"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsNr" label="NGS Nummer"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libType" label="Librarytype"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libDate" label="Library date"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libVisum" label="Library Visum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.seqDate" label="Sequenzierungs Datum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsMachine" label="NGS Maschine"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.qualityVisum" label="Qualitäts Visum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.infOldList" label="Information Alteliste"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.pubID" label="Public ID"></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-card-actions>
                    <v-btn color="blue darken-1"  @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1"  @click="save">Save</v-btn>
                </v-card-actions>
              </v-layout>
            </v-container>
          </v-card-text>

        </v-card>
      </v-dialog>
</template>

<script>
  import {bus} from '../main.js'    


export default{

     created () {
         bus.$on('editedIndex', (data) =>{
             this.editedIndex = data;
         });
         bus.$on('editedPatient', (data) =>{
             this.editedPatient = data;
         });
         bus.$on('openFormular', (data) =>{
             this.dialog = data;
         });
    },
    data:() =>({
        editedIndex: -1,
        dialog: false,
        editedPatient: {
        bactNr: '',
        infOldList: '',
        altId: '',
        priority:'',
        pathogen: '',
        patName: '',
        birthdate: '',
        entry: '',
        abnahme: '',
        sender: '',
        station: '',
        editing: '',
        material: '',
        ngsProject: '',
        dnaPrepDate: '',
        dnaKonz: '',
        dnaVisum: '',
        runNr: '',
        ngsNr: '',
        libType: '',
        libDate: '',
        libVisum: '',
        seqDate: '',
        ngsMachine: '',
        qualityVisum: '',
        pubID: '',
      },
      
    }),
    methods:{
              close () {
        this.dialog = false
        setTimeout(() => {
          this.editedPatient = Object.assign({}, this.Patient)
          this.editedIndex = -1
        }, 300)
      },

      // else statement = wen neuer Pat, if = editedPat. hier muss index und Pat übergeben werden.
      save () {
        if (this.editedIndex > -1) {
          bus.$emit('patientHasChanged',this.editedPatient)

         // Object.assign(this.patients[this.editedIndex], this.editedPatient)
        } else {
          bus.$emit('newPatientCreated',this.editedPatient)

         // this.patients.push(this.editedPatient)
        }
        this.close()
      }
    }
}
</script>