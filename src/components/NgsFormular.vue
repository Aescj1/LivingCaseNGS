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
                  <v-text-field v-model="editedPatient.altId" label="altId"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.pathogen" label="pathogen (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.patName" label="Patient Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.birthdate" label="birthdate"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.entry" label="entry"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.abnahme" label="abnahme"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.sender" label="sender"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.station" label="station"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.editing" label="editing"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.material" label="material"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsProject" label="ngsProject"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.dnaPrepDate" label="dnaPrepDate"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.dnaKonz" label="dnaKonz"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.dnaVisum" label="dnaVisum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.runNr" label="runNr"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsNr" label="ngsNr"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libType" label="libType"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libDate" label="libDate"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libVisum" label="libVisum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.seqDate" label="seqDate"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsMachine" label="ngsMachine"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.qualityVisum" label="qualityVisum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.infOldList" label="infOldList"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.pubID" label="pubID"></v-text-field>
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