<template>
  <v-data-table
    :headers="renderHeader()"
    :items="patients"
    class="elevation-1"
    hide-actions
  >
<template slot="items" slot-scope="props">
        <!--The v-if statements checks the state for the tabs and sets the information accordingly !-->
        <td class="text-xs-left">{{ props.item.bactNr }}</td>
        <td class="text-xs-center">{{ props.item.altId }}</td>
        <td class="text-xs-center">{{ props.item.pathogen }}</td>
        <td class="text-xs-center">{{ props.item.patName }}</td>
        <td class="text-xs-center">{{ props.item.birthdate }}</td>
        <td class="text-xs-center">{{ props.item.entry }}</td>
        <td class="text-xs-center">{{ props.item.abnahme }}</td>
        <td class="text-xs-center">{{ props.item.sender }}</td>
        <td class="text-xs-center">{{ props.item.station }}</td>
        <td class="text-xs-center">{{ props.item.editing }}</td>
        <td class="text-xs-center">{{ props.item.material }}</td>
        <td class="text-xs-center">{{ props.item.ngsProject }}</td>
        <td v-if="state<=2" class="text-xs-center">{{ props.item.dnaPrepDate }}</td>
        <td v-if="state<=2" class="text-xs-center">{{ props.item.dnaKonz }}</td>
        <td v-if="state<=2" class="text-xs-center">{{ props.item.dnaVisum }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.runNr }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.ngsNr }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.libType }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.libDate }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.libVisum }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.seqDate }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.ngsMachine }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.seqVisum }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.qualityVisum }}</td>
        <td v-if="state<=0" class="text-xs-center">{{ props.item.pubID }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
    </template>
  </v-data-table>
</template>

<script>
import {bus} from '../main.js'

  export default {
    props:{
      state:Number
    },
    data: () => ({
      dialog: false,
      pagination: {},
      headers: [
        { class:'dataSet',property: 3, text: 'Bact Nr-', sortable: true, value: 'bactNr'},
        { property: 3, text: 'Alternative ID', value: 'altId' },
        { property: 3,text: 'Pathogen', value: 'pathogen' },
        { class:'dataSet',property: 3,text: 'Patient', value: 'patName' },
        { property: 3,text: 'Geburtsdatum', value: 'birthdate' },
        { property: 3,text: 'Eingang', value: 'entry', sortable: false },
        { property: 3,text: 'Abnahme', value: 'abnahme' },
        { property: 3,text: 'Einsender', value: 'sender' },
        { property: 3,text: 'Station', value: 'station' },
        { property: 3,text: 'Bearbeitung', value: 'editing' },
        { property: 3,text: 'Material', value: 'material' },
        { property: 3,text: 'NGS-Projekt', value: 'ngsProject' },
        { property: 2,text: 'Datum DNA-Prep', value: 'dnaPrepDate' },
        { property: 2,text: 'DNA-Konz (ng/ul)', value: 'dnaKonz' },
        { property: 2,text: 'Visum DNA', value: 'dnaVisum' },
        { property: 0,text: 'Run Nummer', value: 'runNr' },
        { property: 0,text: 'NGS Nummer', value: 'ngsNr' },
        { property: 0,text: 'Library Typ', value: 'libType' },
        { property: 0,text: 'Datum Library', value: 'libDate' },
        { property: 0,text: 'Visum Library', value: 'libVisum' },
        { property: 0,text: 'Datum Sequenzierung', value: 'seqDate' },
        { property: 0,text: 'NGS Gerät', value: 'ngsMachine' },
        { property: 0,text: 'Visum Datenqualität', value: 'qualityVisum' },
        { property: 0,text: 'Information alte Liste', value: 'infOldList' },
        { property: 0,text: 'Public identifier', value: 'pubID' },
      ],
      /*search:this.search,*/
      tabs: null,
    patients: [],
      editedIndex: -1,
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
       defaultPatient: {
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
        seqVisum:'',
        qualityVisum: '',
        pubID: '',
      }
    }),
       computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }, watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.patients = [
          {
        bactNr: '',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Brickk',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100002-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Brickk',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },{
        bactNr: '100002-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Brickk',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
       
        ]
      },
          editItem (item) {
        /*  ursprünglicher Code der den PatID mitgibt!
        this.editedIndex = this.patients.indexOf(item)
        this.editedPatient = Object.assign({}, item)
        this.dialog = true */

        bus.$emit('openFormular', true) // emit the event to the bus
      },

      deleteItem (item) {
        const index = this.patients.indexOf(item)
        confirm('Are you sure you want to delete this dataset?') && this.patients.splice(index, 1)
      },

      /*This method grabs all the headers in header[] and checks its property, compares it with
      the state from the tab (which get provided by the Tableframe) and sets the tableheaders
      accordingly */
      renderHeader(){
        return this.headers.filter(h => (h.property>= this.state))
      }
    }
  }
  </script>

<style>
.dataSet{
  max-height: 50px;
  min-width: 130px;
}
</style>
