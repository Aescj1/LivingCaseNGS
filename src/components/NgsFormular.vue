<template>
<v-dialog v-model="dialog" max-width="1000px">
        <v-card>
          <v-card-title>Dataset Formular </v-card-title>

          <v-card-text>
            <form>
            <v-form>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.bactNr" label="Bact Nummer*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.wiederholung" label="Wiederholung*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.altId" label="alternative ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.priority" label="Priority*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.abbreviation" label="Pathogen (g)*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.lastName" label="lastName*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.firstName" label="fistName*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.birthdate" label="Geburtsdatum*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.entry" label="Eingang*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.abnahmeDatum" label="Abnahme"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.einsender" label="Einsender*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.station" label="Station*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.bearbeitung" label="Bearbeitungsdatum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.material" label="Material*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsProject" label="NGS - Projekt"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.datumPrep" label="DNA Vorbereitungsdatum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.konzentration" label="DNA Konzentration"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.visumDna" label="DNA Visum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.runNr" label="Run NR"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.runProbeNr" label="NGS Nummer"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libraryTyp" label="Librarytype"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libraryDatum" label="Library date"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libraryVisum" label="Library Visum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.seqDatum" label="Sequenzierungs Datum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.modalität" label="NGS Maschine"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.datenqualVisum" label="Qualitäts Visum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.infOldList" label="Information Alteliste"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.publicIdentifier" label="Public ID*"  :rules="nameRules" required></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-card-actions>
                    <v-btn color="blue darken-1"  @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1"  @click="onSubmit">Save</v-btn>
                </v-card-actions>

              </v-layout>
            </v-container>
          </v-form>
           </form>
          </v-card-text>

        </v-card>
      </v-dialog>
</template>

<script>
  import {bus} from '../main.js'    
  import axios from 'axios'


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
      nameRules: [
        v => !!v || 'Data is required'
      ],
        patId:'',
        editedIndex: -1,
        dialog: false,
      editedPatient: {
        bactNr: '',
        wiederholung:'',
        infOldList: '',
        altId: '',
        priority:'',
        abbreviation: '',
        lastName: '',
        firstName:'',
        patName: '',
        birthdate: '',
        entry: '',
        abnahmeDatum: '',
        einsender: '',
        station: '',
        bearbeitung: '',
        material: '',
        ngsProject: '',
        datumPrep: '',
        konzentration: '',
        visumDna: '',
        runNr: '',
        runProbeNr: '',
        libraryTyp: '',
        libraryDatum: '',
        libraryVisum: '',
        seqDatum: '',
        modalität: '',
        datenqualVisum: '',
        publicIdentifier: '',
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
      onSubmit(){
        const newPatient = {
          firstName: this.editedPatient.firstName,
          lastName: this.editedPatient.lastName,
          birthdate:this.editedPatient.birthdate
        }
        
        axios.post('http://147.87.118.201:3000/api/TblPatients', newPatient)
          .then(ack1 =>{
            axios.get('http://147.87.118.201:3000/api/TblPatients/findOne?filter={"where":{"and":[{"firstName":"'+this.editedPatient.firstName+'"},{"lastName":"'+this.editedPatient.lastName+'"}]}}')
            .then(res1 => {
              this.patId = res1.data.patientId;
              const newProbe ={
                patientId: this.patId,
                einsender: this.editedPatient.einsender,
                station: this.editedPatient.station,
                eingangDatum: this.editedPatient.entry,
                material: this.editedPatient.material
              } 
            axios.post('http://147.87.118.201:3000/api/TblProbeEingangs', newProbe)
                .then(ack2 =>{
                  axios.get('http://147.87.118.201:3000/api/TblProbeEingangs/findOne?filter={"where":{"patientId":"'+this.patId+'"}}')
                  .then(res2 =>{
                    const newNgs ={
                      probeId:res2.data.probeId,
                      bactNr: this.editedPatient.bactNr,
                      wiederholung: this.editedPatient.wiederholung,
                      pathogenId: this.editedPatient.abbreviation,
                      publicIdentifier: this.editedPatient.publicIdentifier,
                      priority: this.editedPatient.priority
                    } 
                    axios.post('http://147.87.118.201:3000/api/TblNgs', newNgs)
                    .then(ack3=>{
                    })
                  })
                })
            })
          })
        this.close();
        this.save();
        console.log("submitted");
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
       },
    }

</script>